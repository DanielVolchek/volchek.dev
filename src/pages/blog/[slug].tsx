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
import { fetchAllPostData, fetchPostData, postsDir } from "../../lib/fetchpost";

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
  console.log("getstaticpaths");
  const pages = g.sync(path.join(postsDir, "*.md"));
  if (!pages) return { paths: [], fallback: false };
  console.log("passed");
  if (new Set(pages).size !== pages.length)
    throw new Error("Duplicate slugs found in posts");
  const pageData = fetchAllPostData();
  const paths = pages.map((page) => {
    const slug = page.split("/").pop()?.replace(".md", "");
    if (!pageData.find((data) => data.slug === slug))
      throw new Error(`No post found in posts.json for ${slug}`);
    return { params: { slug } };
  });
  const ids = pageData.map((data) => data.id);
  if (new Set(ids).size !== ids.length)
    throw new Error("Duplicate ids found in posts.json");
  return {
    paths,
    fallback: false,
  };
};

export default BlogPost;
