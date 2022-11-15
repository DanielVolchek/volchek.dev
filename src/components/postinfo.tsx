import Link from "next/link";
import * as path from "path";

export type Post = {
  title: string;
  desc: string;
  tags: string[];
  slug: string;
  date: string;
};

export default function PostInfo({ title, desc, tags, slug, date }: Post) {
  return (
    <Link href={path.join("/blog", slug)}>
      <div className="rounded-sm border border-gray-200 px-4 py-2">
        <h2 className="text-2xl font-semibold capitalize">{title}</h2>
      </div>
    </Link>
  );
}
