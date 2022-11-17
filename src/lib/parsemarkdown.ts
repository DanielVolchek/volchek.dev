import { unified } from "unified";
import { read } from "to-vfile";
import remarkParse from "remark-parse";
import remarkPrism from "remark-prism";
import rehypePrismCommon from "rehype-prism-plus/common";
import remarkRehype from "remark-rehype";
import rehypeRaw from "rehype-raw";
import rehypeSanitize from "rehype-sanitize";
import rehypeStringify from "rehype-stringify";

export default async function parseMarkdown(filename: string) {
  const result = await unified()
    .use(remarkParse)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypePrismCommon)
    .use(rehypeStringify)
    .process(await read(filename));
  return result;
}
