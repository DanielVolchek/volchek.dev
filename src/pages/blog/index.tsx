import * as fs from "fs";
import type { InferGetStaticPropsType, NextPage } from "next";
import g from "glob";
import { useEffect, useMemo } from "react";
import PostInfo, { Post } from "../../components/postinfo";
import Head from "next/head";

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const Blog: NextPage<Props> = ({ data }) => {
  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <>
      <>
        <Head>
          <title>Blog - Volchek.Dev</title>
        </Head>
        {data?.map((post) => {
          return <PostInfo {...post} />;
        })}
      </>
    </>
  );
};

export const getStaticProps = async () => {
  let data;
  let parsed;
  try {
    data = fs.readFileSync("src/posts/posts.json", "utf-8");
    if (!data) return null;
    console.log(data);
    parsed = JSON.parse(data) as Post[];
    if (!Array.isArray(parsed))
      throw new Error(
        "BlogPost data formatted incorrectly: expected array, received ",
        parsed
      );
  } catch (e) {
    console.error("Error in gsp on blog/index: ", e);
    return {
      props: {
        notFound: true,
      },
    };
  }

  return {
    props: {
      data: parsed,
    },
  };
};

export default Blog;
