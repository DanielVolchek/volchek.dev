# Hello, Tailiscope!

## And Hello, World!

I'm finally writing something. This is my first post on here. I noticed something a bit frustrating while I was working on this website. I'm freshly using Neovim after using VSCode for a long time. I love the ecosystem and the tooling. The community is great and it's fantastic to be able to build and configure your editor exactly how you want it. But something felt like it was missing while I was working.

## The problem

The TailwindCSS documentation support is not excellent. LSP support is nice, formatting is great with prettier-tailwind-plugin. (ADD real name here + npm link). So what's missing?
On VSCode there's an awesome plugin named [Tailwind Docs](https://marketplace.visualstudio.com/items?itemName=austenc.tailwind-docs), which allows you to go straight to the Tailwind docs for any topic you want. The workflow with it is amazing, and I want to recreate that in Neovim.

## The solution

Neovim has an amazing plugin called Telescope. It provides an extremely extensible fuzzy-finder UI for a whole variety of things, and if you use Neovim without it, you're really missing out.
Telescope supports building plugins, and Lua (the scripting language used by Neovim) supports opening the native browser. Putting the two pieces together would allow building an improved version of PLUGIN, available to any who'd want it.

## Putting the pieces together

So how to make this work? First and foremost, we need the links. Can't open docs without having docs, right? Next thing we need to hook it up to Telescope. That's pre tty much it! This should be pretty simple

That's it!
It's usually not as simple as it sounds, but let's get started and find out!

## The Process

### Let's make some step-by-step instructions to follow

1. Get links as needed
1. Look into Telescope plugin API
1. Create Telescope menu with searchable list of doc pages
1. Use Telescope events to open browser with Lua
1. Package as Telescope extension and distribute

### Step 1: Get Links

This'll be very easy. My initial thoughts were to use the Github API to get the names of the doc links from the Tailwind repo, or even to fetch the page and look for links. However, with a little investigation, I found that the Tailwind Docs plugin ships with a build script. MIT license means we'll be adapting it to our needs. Let's get started!

#### Let's take a look at the code

##### This block is the only one that matters to us

```
req = urllib.request.Request(
    'https://tailwindcss.com/docs',
    data=None,
    headers={
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_3) ' +
        'AppleWebKit/537.36 (KHTML, like Gecko) ' +
        'Chrome/35.0.1916.47 Safari/537.36'
    }
)

# Pull the html from the main docs page and find all /docs links
docs = urllib.request.urlopen(req)
links = re.findall('href="(/docs/.*?)"', docs.read().decode('utf-8'))

found = []
pages = []

# Compile all the info for the pages
for url in sorted(set(links)):
    topic = url.split('/')[2].title().replace('-', ' ').split('#')[0]
    slug = url.split('/')[2].split('#')[0]

    if (topic not in found):
        found.append(topic)
        pages.append({
            "topic": topic,
            "slug": slug,
        })

```

This is a few lines of the results we get from running this script:

```
  {
    "topic": "Word Break",
    "slug": "word-break"
  },
  {
    "topic": "Z Index",
    "slug": "z-index"
  }
]
```

Perfect! All we have to do is prepend it as https://tailwindcss.com/docs/{slug}, and we go right where we need to be
We'll use topic as our search keyword, and slug as our action result

Let's modify the result further to fit into our lua script

The format we'll need for our data looks something like this

```
{
  {
    "topic1", "slug1"
  },
  {
    "topic2", "slug2"
  }
}
```

This won't be dificult to recreate at all.

```
parsedPages = []
for page in pages:
    parsedPages.append('{"%s", "%s"}' % (page["topic"], page["slug"]))

outfile = '../lua/tailiscope/docs.lua'
with open(join(abspath(dirname(__file__)), outfile), 'w') as f:
    f.write('return {\n')
    f.write('\t{"Cheat Sheet", "cheat-sheet"},\n')
    for page in parsedPages:
        f.write('\t%s,\n' % page)
    f.write('}')
```

That's all we need to format our code. Let's take a look at what we're doing here.

You'll notice that we also write in an additional table using slug cheat-sheet. We'll get back to that soon.

### Step 2: Look into Telescope API

The Telescope Extension API is pretty simple, and has decent enough documentation for creating extensions. You can find that right [here](https://github.com/nvim-telescope/telescope.nvim/blob/master/developers.md)

It's important to note that as Telescope is a heavily community-based plugin - just like the majority of Neovim plugins, what you can't find in the documentation can usually be found by examining the codebase of some other extensions. A full list of extensions can be found right [here](https://github.com/nvim-telescope/telescope.nvim/wiki/Extensions)

Well, that was easy. Let's move on

### Step 3: Create Telescope Menu with Searchable list of Doc Pages

We've already got our list, thanks to the build script. Let's now incorporate them within Telescope

Our code is short and sweet, let's take a look

```javascript
const func = () => {
  console.log("hello world");
};
func();
```

```lua
local pickers = require("telescope.pickers")
local finders = require("telescope.finders")
local conf = require("telescope.config").values
local actions = require("telescope.actions")
local action_state = require("telescope.actions.state")
local results = require("tailiscope.docs")

return function(opts)
	opts = opts or {}
	pickers
		.new(opts, {
			prompt_title = "Tailiscope",
			finder = finders.new_table({
				results = results,
				entry_maker = function(entry)
					return {
						value = entry,
						display = entry[1],
						ordinal = entry[1],
					}
				end,
			}),

			sorter = conf.generic_sorter(opts),
			attach_mappings = function(prompt_bufnr, map)
				actions.select_default:replace(function()
					actions.close(prompt_bufnr)
					local selection = action_state.get_selected_entry()
					local doc = selection.value[2]
						doc = ""
					end
				end)
				return true
			end,

      layout_config = {
				width = 0.5,
				height = 0.75,
			},

		})
		:find()
end

```

open_doc(doc, \_path)

#### The Picker

First thing we need to do is create a new picker. Our Telescope plugin will live in the picker. Inside our picker, we'll pass in opts to access user defined settings. We need to define a few more properties to get everything working right. Primarily, we'll need to create a new finder, which will act as our UI and event dispatcher.

#### The Finder

The finder is pretty simple. We'll pass in the results, which we grabbed from the file generated in our buildscript. We'll also need our entry_maker fumction, which will define how our values translate from their view (the topic) to their value (the slug).

#### The Sorter

The sorter is what's used to make fuzzy search functional. The sorter we use is set to generic sorter and passed in opts, allowing users to set their own sorter in Telescope setup if they so choose.

#### The Mapper

The attach_mappings function is where we'll process the results and perform our actions. As you can see, we're mapping over select_default (aka pressing enter) with a function. We'll pass in the prompt buffer, and mappings. We close the buffer, then grab our selection using action_state.get_selected_entry(). That gives us the table we defined in entry_maker. That's everything we'll need before our most important step

### Step 4: Use Telescope events to open browser with Lua

We're gonna need to add a few functions to make this work

```

```
