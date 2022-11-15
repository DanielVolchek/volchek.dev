import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "../components/link";
import me from "../images/metemp.png";

const About: NextPage = ({}) => {
  return (
    <>
      <Head>
        <title>About - Volchek.Dev</title>
      </Head>
      <div>
        <h1 className="text-4xl">Daniel Volchek - About Me </h1>
        <div>
          <section className="flex flex-col lg:flex-row">
            <Image
              src={me}
              alt="Daniel Volchek - Profile Image"
              className="order-first mr-8 mt-4 h-auto rounded-md border-[3px] border-teal-300 lg:order-last lg:w-[30vw] xl:w-[20vw]"
            />
            <div className="mt-4 flex flex-col">
              <h2 className="text-2xl">So who are you even?</h2>
              <p className="pt-2 pl-4 text-slate-600">
                I&apos;m just me! But I&apos;m guessing you want to know a bit
                more right? You probably wouldn&apos;t be here if not...
                <br />
                Well first off, I&apos;m much more than just my terminal. When
                I&apos;m not coding, I love to try new things. Lately, I&apos;ve
                been learning to rock climb. I&apos;m starting off slowly, but
                hopefully this time next year I&apos;ll be scaling mountains! I
                love the outdoors, and if it wasn&apos;t for my other love,
                Wi-Fi, I&apos;d probably already be living in a cabin in the
                middle of nowhere.
                <br />
                As a kid, I loved to tinker. I was always curious about how my
                computer worked, what caused this to do that, and how I could do
                it myself. It didn&apos;t take long before I knew I wanted to be
                a programmer. The much harder question was what type of
                programming I wanted to do.
              </p>
            </div>
          </section>
        </div>
        <section className="">
          <h2 className="block text-2xl">
            Let&apos;s talk a little more technical...
          </h2>
          <article className="flex flex-col pl-4">
            <TechSections
              header="What do you do?"
              p="
              I'm a software engineer. I haven't decided what field I want to go down, but right now I'm leaning towards backend/fullstack development. I love the technical challenge of solving logical problems, and I don't mind working behind the scenes to get everything functional. Still, I enjoy building functional websites with react and tailwind quite a bit. Thus, fullstack."
            />
            <TechSections
              header="Where do you do it?"
              p={
                <>
                  My dev enviornment is constantly in flux. My primary editor is
                  Neovim, and I spend a lot of time tweaking and modifying my
                  settings. It&apos;s almost like its own little hobby! If
                  you&apos;d like to take a look at my dotfiles, you can find
                  them right{" "}
                  <Link
                    href="https://github.com/danielvolchek/dotfiles"
                    content="here!"
                  />
                </>
              }
            />
            <TechSections header="What are your goals?" p={<></>} />
          </article>
        </section>
      </div>
    </>
  );
};

const TechSections = ({
  header,
  p,
}: {
  header: React.ReactNode;
  p: React.ReactNode;
}) => {
  return (
    <section className="my-2">
      <h3 className="text-xl">{header}</h3>
      <p className="text-gray-600">{p}</p>
    </section>
  );
};

export default About;
