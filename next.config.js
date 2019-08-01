const fs = require("fs");
const util = require("util");
const withMDX = require("@zeit/next-mdx")();

const stat = util.promisify(fs.stat);
const mkdir = util.promisify(fs.mkdir);
const readdir = util.promisify(fs.readdir);
const copyFile = util.promisify(fs.copyFile);

module.exports = withMDX({
  pageExtensions: ["tsx", "mdx"],

  exportPathMap: async function () {
    try {
      await stat("./out");
    } catch (e) {
      await mkdir("./out");
    }
    
    await copyFile("./static/keybase.txt", "./out/keybase.txt");
    await copyFile("./static/sitemap.xml", "./out/sitemap.xml");

    const pathMap = {};
    pathMap["/"] = { page: "/" };
    pathMap["/whoami"] = { page: "/whoami" };
    pathMap["/blog"] = { page: "/blog" };
    pathMap["/form"] = { page: "/form" };
    pathMap["404.html"] = { page: "/_error" };

    const posts = await readdir("./pages/posts");

    for (const post of posts) {
      const postPath = post.replace(/(\d{4})(\d{2})(\d{2})\.mdx/, (match, p1, p2, p3) => {
        return `/blog/${p1}/${p2}/${p3}`;
      });
      const pagePath = post.replace(/(\d{4})(\d{2})(\d{2})\.mdx/, (match, p1, p2, p3) => {
        return `/posts/${p1}${p2}${p3}`;
      });
      pathMap[postPath] = { page: pagePath };
    }

    return pathMap;
  }
});