import { unified } from "unified";
import { read } from "to-vfile";
import remarkParse from "remark-parse";
import rehypeParse from "rehype-parse";
import rehypePrismCommon from "rehype-prism-plus/common";
import rehypeStringify from "rehype-stringify";
import rehypeRaw from "rehype-raw";
import remarkRehype from "remark-rehype";
import rehypeSanitize from "rehype-sanitize";

export default async function parseMarkdown(filename: string) {
  const result = await unified()
    .use(remarkParse)
    .use(rehypeParse)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypePrismCommon)
    .use(rehypeRaw)
    .use(rehypeSanitize)
    .use(rehypeStringify)
    .process(await read(filename));
  return result;
}
