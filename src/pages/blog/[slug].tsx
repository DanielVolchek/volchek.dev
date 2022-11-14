import * as fs from "fs";
import g from "glob";
import { GetStaticPropsContext, InferGetStaticPropsType, NextPage } from "next";
import Head from "next/head";
import parseMarkdown from "../../lib/parsemarkdown";

type Props = InferGetStaticPropsType<typeof getStaticProps>;
const BlogPost: NextPage<Props> = ({title, result }) => {
  return (
    <>
    <Head>
        <title>{title.replace('-', ' ')} - Volchek.Dev</title>
    </Head>
    <article
      className="prose"
      dangerouslySetInnerHTML={{ __html: result.toString() }}
    ></article>
    </>
  );
};

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
  const slug = params?.slug as string;
  const postPath = `src/posts/${slug}.md`;
  if (!slug || !fs.existsSync(postPath))
    return {
      notFound: true,
    };

  const result = await parseMarkdown(postPath);
  console.log(result);
  return {
    props: {
      title: slug,
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
