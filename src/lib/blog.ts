import fs from "fs";
import path from "path";

type BlogPostData = {
  path: string;
  content: string[];
  slug: string;
  title: string;
  metadata: Record<string, string>;
};

const requiredMetadata = ["slug", "title"] as const;

const getBlogPostPaths = () => {
  const relativePaths = path.join(process.cwd(), "content", "blog");
  const absolutePaths = fs
    .readdirSync(relativePaths)
    .map((post) => path.join(relativePaths, post));
  return absolutePaths;
};

const parseErrorGenerator = (file: string) => {
  return (errorMessage: string) =>
    `File ${file} failed to parse, ${errorMessage}`;
};

const getBlogPostContent = (paths: string[]) => {
  const readPost = (path: string): BlogPostData => {
    const parseError = parseErrorGenerator(path);
    const content = fs.readFileSync(path, { encoding: "utf8" }).split("\n");

    const metadata = parseOutMetadata(content);
    if (metadata == null) {
      throw new Error(parseError("No metadata found or formatted incorrectly"));
    }

    for (const req of requiredMetadata) {
      if (!metadata[req]) {
        throw new Error(
          parseError(`Required metadata attribute ${req} not found`),
        );
      }
    }

    return {
      path,
      content,
      metadata,
      slug: metadata["slug"],
      title: metadata["title"],
    };
  };

  return paths.map(readPost);
};

const parseOutMetadata: (lines: string[]) => Record<string, string> | null = (
  lines,
) => {
  const metadata: Record<string, string> = {};

  // Skip initial empty lines
  while (lines.length > 0 && lines[0].trim() === "") {
    lines.splice(0, 1);
  }

  // Check for opening delimiter
  if (lines.length === 0 || lines[0] !== "---") {
    return null;
  }
  lines.splice(0, 1); // Remove opening delimiter

  // Parse frontmatter until closing delimiter
  while (lines.length > 0) {
    const line = lines.splice(0, 1)[0];
    if (line === "---") {
      return metadata;
    }

    if (line && line.trim() !== "") {
      const [key, ...valueParts] = line.split(":");
      const value = valueParts.join(":").trim();
      if (key && value) {
        metadata[key.trim()] = value;
      }
    }
  }

  // If we get here, no closing delimiter was found
  return null;
};

const getBlogPostsWithClosure = () => {
  const paths = getBlogPostPaths();
  const content = getBlogPostContent(paths);

  return () => content;
};

export const getBlogPosts = getBlogPostsWithClosure();
//export const getBlogPosts = _getBlogPosts();
////////////////
