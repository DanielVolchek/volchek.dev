import Link from "./link";

export type Post = {
  title: string;
  desc: string;
  tags: string[];
  slug: string;
};

export default function PostInfo({ title, desc, tags, slug }: Post) {
  return (
    <div>
      <Link href={`/blog/${slug}`} content={title} />
    </div>
  );
}
