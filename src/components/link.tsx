import Link from "next/link";
import colors from "../lib/colors";
export default function StyledLink({
  href,
  content,
  className,
}: {
  href: string;
  content: string;
  className?: string;
}) {
  return (
    <Link
      className={`text-teal-300 decoration-2 hover:text-black hover:underline active:text-black ${className}`}
      href={href}
    >
      {content}
    </Link>
  );
}
