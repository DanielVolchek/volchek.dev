import Link from "next/link";
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
      className={`decoration-2 hover:text-slate-600 hover:underline active:text-blue-500 ${className}`}
      href={href}
    >
      {content}
    </Link>
  );
}
