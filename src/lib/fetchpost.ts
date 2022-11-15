import type { Post } from "../components/postinfo";
import * as fs from "fs";
import * as path from "path";

export const postsDir = "src/posts/";

export function fetchAllPostData(): Post[] {
  console.log("Fetching all posts");
  const data = fs.readFileSync(path.join(postsDir, "posts.json"), "utf-8");
  console.log(data);
  return JSON.parse(data) as Post[];
}

export function fetchPostData(slug: string) {
  const data = fetchAllPostData();
  for (const post of data) {
    if (post.slug === slug) return post;
  }
  throw new Error("Post not found");
}
