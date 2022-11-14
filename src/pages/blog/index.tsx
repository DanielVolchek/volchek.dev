import * as fs from "fs";
import type { InferGetStaticPropsType, NextPage } from "next";
import g from "glob";
import { useMemo } from "react";

type BlogPost = {
  title: string;
  desc: string;
  tags: string[];
  slug: string;
};
type Props = InferGetStaticPropsType<typeof getStaticProps>;

const Blog: NextPage<Props> = ({ data }) => {
  const links = useMemo<BlogPost[]|null>(() => {
    if (!data) return null;
    console.log(data);
    const parsed = JSON.parse(data);
    if (!Array.isArray(parsed))
      throw new Error(
        "BlogPost data formatted incorrectly: expected array, received ",
        parsed
      );
    return parsed as BlogPost[];
  }, [data]);
  return (
    <>
      <main className="mt-4 flex flex-col justify-center"></main>
    </>
  );
};

export const getStaticProps = async () => {
  let data;
  try {
    data = fs.readFileSync("src/pages/blog/posts/posts.json", "utf-8");
  } catch {
    return {
      props: {
        notFound: true,
      },
    };
  }

  return {
    props: { data },
  };
};

export default Blog;
