import * as fs from "fs";
import g from "glob";
import { GetStaticPropsContext, InferGetStaticPropsType, NextPage } from "next";
import { unified } from "unified";
import { read } from "to-vfile";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeRaw from "rehype-raw";
import rehypeSanitize from "rehype-sanitize";
import rehypeStringify from "rehype-stringify";

type Props = InferGetStaticPropsType<typeof getStaticProps>;
const BlogPost: NextPage<Props> = ({ result }) => {
  return (
    <article
      className="prose"
      dangerouslySetInnerHTML={{ __html: result.toString() }}
    ></article>
  );
};

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
  const slug = params?.slug as string;
  const postPath = `src/posts/${slug}.md`;
  if (!slug || !fs.existsSync(postPath))
    return {
      notFound: true,
    };

  const result = await unified()
    .use(remarkParse)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeSanitize)
    .use(rehypeStringify)
    .process(await read(postPath));
  console.log(result);
  return {
    props: {
      result: result.value,
    },
  };
};

export const getStaticPaths = async () => {
  const pages = g.sync("src/posts/*.md");
  if (!pages) return { paths: [], fallback: false };
  return {
    paths: pages.map((page) => ({
      params: {
        slug: page.split("/").pop()?.replace(".md", ""),
      },
    })),
    fallback: false,
  };
};

export default BlogPost;
