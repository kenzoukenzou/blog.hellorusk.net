const fs = require("fs");
const util = require("util");
const remarkMath = require("remark-math");
const rehypeKatex = require("rehype-katex");
const rehypePrism = require("@mapbox/rehype-prism");
const withMDX = require("@zeit/next-mdx")({
  options: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex, rehypePrism]
  }
});

const readdir = util.promisify(fs.readdir);

module.exports = withMDX({
  pageExtensions: ["tsx", "mdx"],

  exportPathMap: async function() {
    const pathMap = {};
    pathMap["/"] = { page: "/" };
    pathMap["/whoami"] = { page: "/whoami" };
    pathMap["/blog"] = { page: "/blog" };
    pathMap["/form"] = { page: "/form" };
    pathMap["404.html"] = { page: "/_error" };

    const posts = await readdir("./pages/posts");
    const pageNum = Math.ceil(posts.length / 7);

    for (const post of posts) {
      const postPath = post.replace(
        /(\d{4})(\d{2})(\d{2})\.mdx/,
        (match, p1, p2, p3) => {
          return `/blog/${p1}/${p2}/${p3}`;
        }
      );
      const pagePath = post.replace(
        /(\d{4})(\d{2})(\d{2})\.mdx/,
        (match, p1, p2, p3) => {
          return `/posts/${p1}${p2}${p3}`;
        }
      );
      pathMap[postPath] = { page: pagePath };
    }

    return pathMap;
  }
});
