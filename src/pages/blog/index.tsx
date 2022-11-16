import type { InferGetStaticPropsType, NextPage } from "next";
import { useEffect, useMemo, useState } from "react";
import PostInfo from "../../components/postinfo";
import Head from "next/head";
import type { Post } from "../../lib/fetchpost";
import { fetchAllPostData } from "../../lib/fetchpost";
import Filters from "../../components/filters";

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const Blog: NextPage<Props> = ({ data, tags }) => {
  const [filters, setFilters] = useState<string[]>([]);
  const [visiblePosts, setVisiblePosts] = useState<Post[]>(data);

  const resetFilters = (posts: Post[]) => {
    setFilters([]);
    setVisiblePosts([...posts]);
  };

  useEffect(() => {
    setVisiblePosts(
      data.filter((post) =>
        filters.every((filter) => post.tags.includes(filter))
      )
    );
  }, [data, filters]);

  const modifyFilter = (tag: string) => {
    if (filters.includes(tag)) {
      setFilters(filters.filter((t) => t !== tag));
    } else setFilters([...filters, tag]);
  };
  return (
    <>
      <>
        <Head>
          <title>Blog - Volchek.Dev</title>
        </Head>
        <div>
          <div className="flex flex-col items-center justify-between lg:flex-row">
            <h1 className="pb-5 text-5xl font-semibold md:text-4xl lg:pb-0">
              Blog Posts
            </h1>
            <div className="flex gap-2">
              {filters.length !== 0 && (
                <button
                  onClick={() => resetFilters(data)}
                  className="rounded-md border-2 border-teal-300 bg-white px-4 py-2 transition-colors hover:border-white hover:bg-teal-300 hover:text-white"
                >
                  Reset Filters
                </button>
              )}
              <Filters
                onClick={modifyFilter}
                filterList={tags}
                currentlyFiltered={filters}
                filterListStyles={true}
                onReset={() => resetFilters(data)}
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 pt-4">
            {visiblePosts?.map((post) => {
              return (
                <PostInfo
                  key={post.slug}
                  currentlyFiltered={filters}
                  onClick={modifyFilter}
                  {...post}
                />
              );
            })}
          </div>
        </div>
      </>
    </>
  );
};

export const getStaticProps = async () => {
  const data = fetchAllPostData();
  const tags = new Set(data.map((post) => post.tags).flat());
  return {
    props: {
      data: data.sort((a, b) => b.id - a.id),
      tags: Array.from(tags),
    },
  };
};
export default Blog;
