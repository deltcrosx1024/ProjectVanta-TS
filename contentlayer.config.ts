import { defineDocumentType, makeSource, ComputedFields } from "contentlayer/source-files";
import remarkGfm from "remark-gfm";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

const computedFields: ComputedFields = {
    path: {
        type: "string",
        resolve: (doc) => `/${doc._raw.flattenedPath}`,
    },
    slug: {
        type: "string",
        resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/"),
    },
};

export const Project = defineDocumentType(() => ({
    name: "Project",
    filePathPattern: "./projects/**/*.mdx",
    contentType: "mdx",
    fields: {
        published: {
            type: "boolean",
            required: true,
            default: false,
        },
        title: {
            type: "string",
            required: true,
        },
        description: {
            type: "string",
            required: true,
        },
        date: {
            type: "date",
            required: false,
        },
        link: {
            type: "string",
            required: false,
        },
        repo: {
            type: "string",
            required: true,
        },
        tags: {
            type: "list",
            of: { type: "string" },
            required: true,
        }
    },
    computedFields,
}));

export const Page = defineDocumentType(() => ({
    name: "Page",
    filePathPattern: "pages/**/*.mdx",
    contentType: "mdx",
    fields: {
        title: {
            type: "string",
            required: true,
        },
        description: {
            type: "string",
        },
    },
    computedFields,
}));

export default makeSource({
    contentDirPath: "./content",
    documentTypes: [Page, Project],
    mdx: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [
            rehypeSlug,
            [
                rehypePrettyCode,
                {
                    theme: "github-dark",
                    onVisitLine(node: any) {
                        // Prevent lines from collapsing in `display: grid` mode, and allow empty
                        // lines to be copy/pasted
                        if (node.children.length === 0) {
                            node.children = [{ type: "text", value: " " }];
                        }
                    },
                    onVisitHighlightedLine(node: any) {
                        node.properties.className.push("line--highlighted");
                    },
                    onVisitHighlightedWord(node: any) {
                        node.properties.className = ["word--highlighted"];
                    },
                },
            ],
            [
                rehypeAutolinkHeadings,
                {
                    properties: {
                        className: ["subheading-anchor"],
                        ariaLabel: "Link to section",
                    },
                },
            ],
        ],
    },
});