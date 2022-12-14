import * as fs from "fs";
import * as path from "path";
import z from "zod";

export const postsDir = "src/posts/";

const postSchema = z.object({
  title: z.string(),
  desc: z.string(),
  tags: z.string().array(),
  slug: z.string(),
  date: z.string(),
  id: z.number(),
});

export type Post = z.infer<typeof postSchema>;

export function fetchAllPostData(): Post[] {
  const data = fs.readFileSync(path.join(postsDir, "posts.json"), "utf-8");
  // throw an error if any posts are invalid
  return z.array(postSchema).parse(JSON.parse(data));
}

export function fetchPostData(slug: string) {
  const data = fetchAllPostData();
  for (const post of data) {
    if (post.slug === slug) return post;
  }
  throw new Error("Post not found");
}
