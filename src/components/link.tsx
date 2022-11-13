import NextLink from "next/link";
export default function Link({
  href,
  content,
}: {
  href: string;
  content: string;
}) {
  return <span>{content}</span>;
  return <NextLink href={href}>{content}</NextLink>;
}
