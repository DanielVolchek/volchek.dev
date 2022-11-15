import * as fs from "fs";
import g from "glob";
import type {
  GetStaticPropsContext,
  InferGetStaticPropsType,
  NextPage,
} from "next";
import Head from "next/head";
import parseMarkdown from "../../lib/parsemarkdown";
import * as path from "path";
import { fetchPostData, postsDir } from "../../lib/fetchpost";

type Props = InferGetStaticPropsType<typeof getStaticProps>;
const BlogPost: NextPage<Props> = ({ post, markdown }) => {
  return (
    <>
      <Head>
        <title>{`${post.title} - Volchek.Dev`}</title>
      </Head>
      <article
        className="prose"
        dangerouslySetInnerHTML={{ __html: markdown.toString() }}
      ></article>
    </>
  );
};

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
  const slug = params?.slug as string;
  const postPath = path.join(postsDir, `${slug}.md`);
  if (!slug || !fs.existsSync(postPath))
    return {
      notFound: true,
    };

  const result = await parseMarkdown(postPath);
  const post = fetchPostData(slug);
  console.log(post);
  return {
    props: {
      post,
      markdown: result.value,
    },
  };
};

export const getStaticPaths = async () => {
  const pages = g.sync(path.join(postsDir, "*.md"));
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
