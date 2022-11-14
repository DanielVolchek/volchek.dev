import * as fs from "fs";
import type { InferGetStaticPropsType, NextPage } from "next";
import g from "glob";
import { useMemo } from "react";

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const Blog: NextPage<Props> = ({ data }) => {
  const parsed = useMemo(() => {
    if (!data) return null;
    let result = JSON.parse(data.map((post) => {}));
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
