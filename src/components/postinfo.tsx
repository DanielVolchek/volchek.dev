import Link from "next/link";
import * as path from "path";
import type { Post } from "../lib/fetchpost";
import Filters from "./filters";

export default function PostInfo({
  title,
  desc,
  tags,
  slug,
  date,
  currentlyFiltered,
  onClick,
}: Post & { currentlyFiltered: string[]; onClick: (tag: string) => void }) {
  return (
    <Link href={path.join("/blog", slug)}>
      <div className="rounded-sm border-[3px] border-gray-200 px-4 py-2 hover:border-[3px] hover:border-teal-300">
        <div className="">
          <h2 className="text-2xl font-semibold capitalize">{title}</h2>
          <span className="text-xl text-slate-600 lg:text-base">{date}</span>
        </div>
        <Filters
          filterList={tags}
          currentlyFiltered={currentlyFiltered}
          onClick={onClick}
        />
        <p className="text-xl">{desc}</p>
      </div>
    </Link>
  );
}
