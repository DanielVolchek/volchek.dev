import Link from "./link";

export type Post = {
  title: string;
  desc: string;
  tags: string[];
  slug: string;
  date: string;
};

export default function PostInfo({ title, desc, tags, slug, date }: Post) {
  return (
    <div>
      <Link href={`/blog/${slug}`} content={title} />
    </div>
  );
}
