const fs = require("fs");
const withMDX = require('@zeit/next-mdx')();

module.exports = withMDX({
  pageExtensions: ['js', 'mdx'],
  exportPathMap: async function () {
    fs.copyFileSync("./static/keybase.txt", "./out/keybase.txt");

    const pathMap = {}
    pathMap["/"] = { page: "/" };
    pathMap["/whoami"] = { page: "/whoami" };
    pathMap["/blog"] = { page: "/blog" };
    pathMap["404.html"] = { page: "/_error" };
    pathMap["/blog/2019/02/17"] = { page: "/blog/20190217" }

    const posts = fs.readdirSync("./pages/blog");
    for (const post of posts) {
      const postPath = post.replace(/(\d{4})(\d{2})(\d{2})\.mdx/, (match, p1, p2, p3) => {
        return `/blog/${p1}/${p2}/${p3}`;
      });
      const pagePath = post.replace(/(\d{4})(\d{2})(\d{2})\.mdx/, (match, p1, p2, p3) => {
        return `/blog/${p1}${p2}${p3}`;
      });
      pathMap[postPath] = { page: pagePath }
    }
 
    console.log(pathMap);
    return pathMap;
  }
});