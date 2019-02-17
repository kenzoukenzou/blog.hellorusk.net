const fs = require("fs");
const path = require("path");
const withMDX = require("@zeit/next-mdx")();

module.exports = withMDX({
  pageExtensions: ["js", "mdx"],

  exportPathMap: async function () {
    fs.copyFileSync("./static/keybase.txt", "./out/keybase.txt");

    const posts = fs.readdirSync("./pages/posts");
    posts.sort((a, b) => a < b ? 1 : -1);
    const data = {
      postsDateList: posts
    };

    fs.writeFile("./static/posts.json", JSON.stringify(data), err => {
      if (err) throw err;

      console.log(`your posts data has been saved in ${path.resolve("./static/posts.json")}`);

      const pathMap = {};
      pathMap["/"] = { page: "/" };
      pathMap["/whoami"] = { page: "/whoami" };
      pathMap["/blog"] = { page: "/blog" };
      pathMap["404.html"] = { page: "/_error" };
  
      for (const post of posts) {
        const postPath = post.replace(/(\d{4})(\d{2})(\d{2})\.mdx/, (match, p1, p2, p3) => {
          return `/blog/${p1}/${p2}/${p3}`;
        });
        const pagePath = post.replace(/(\d{4})(\d{2})(\d{2})\.mdx/, (match, p1, p2, p3) => {
          return `/posts/${p1}${p2}${p3}`;
        });
        pathMap[postPath] = { page: pagePath };
      }
   
      console.log(pathMap);
      return pathMap;
    });
  }
});