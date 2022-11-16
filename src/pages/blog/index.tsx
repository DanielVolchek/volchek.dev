import type { InferGetStaticPropsType, NextPage } from "next";
import { useEffect, useMemo } from "react";
import PostInfo from "../../components/postinfo";
import Head from "next/head";
import { fetchAllPostData } from "../../lib/fetchpost";

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const Blog: NextPage<Props> = ({ data }) => {
  const posts = useMemo(() => {
    if (!data) return null;
    return data.sort((a, b) => b.id - a.id);
  }, [data]);

  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <>
      <>
        <Head>
          <title>Blog - Volchek.Dev</title>
        </Head>
        {posts?.map((post) => {
          return <PostInfo key={post.slug} {...post} />;
        })}
      </>
    </>
  );
};

export const getStaticProps = async () => {
  let data;
  try {
    data = fetchAllPostData();
    if (!data) return null;
    if (!Array.isArray(data))
      throw new Error(
        `BlogPost data formatted incorrectly: expected array, received ${JSON.stringify(
          data
        )}`
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
      data,
    },
  };
};

export default Blog;
