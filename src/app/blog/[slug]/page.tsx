import { marked } from "marked";

import { getBlogPosts } from "@/lib/blog";

export async function generateStaticParams() {
  const slugs = getBlogPosts().map((post) => {
    const { slug } = post;
    return { slug };
  });

  return slugs;
}

type PropsType = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export default async function BlogPostPage(props: PropsType) {
  const { params } = props;
  const { slug } = await params;

  const post = getBlogPosts().find((post) => post.slug === slug);
  const text = post?.content.join("\n") ?? "";

  const innerHtml = await marked.parse(text);

  return (
    <main
      className="fade-in-element prose prose-invert mx-auto mt-8"
      dangerouslySetInnerHTML={{ __html: innerHtml }}
    ></main>
  );
}
