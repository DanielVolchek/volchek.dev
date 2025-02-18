import "@/lib/blog";

import { Header } from "@/components/Header";
import { LoadOutLink } from "@/components/LoadOutLink";
import { MainLayoutComponent } from "@/components/MainLayoutComponent";
import { getBlogPosts } from "@/lib/blog";

export default async function Blog() {
  return (
    <MainLayoutComponent>
      <Header as="h1" className="fade-in-element text-4xl">
        Blog
      </Header>

      {getBlogPosts().map((post) => (
        <LoadOutLink
          className="fade-in-element"
          href={`/blog/${post.slug}`}
          key={post.slug}
        >
          {post.title}
        </LoadOutLink>
      ))}
    </MainLayoutComponent>
  );
}
