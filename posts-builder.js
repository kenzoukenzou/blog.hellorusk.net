const fs = require("fs");

const posts = fs.readdirSync("./pages/posts");

posts.sort((a, b) => a < b ? 1 : -1);

let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
<url>
  <loc>https://hellorusk.net/</loc>
  <priority>1.0</priority>
</url>
<url>
  <loc>https://hellorusk.net/whoami/</loc>
  <priority>0.8</priority>
</url>
<url>
  <loc>https://hellorusk.net/blog/</loc>
  <priority>0.8</priority>
</url>
`;

fs.writeFile("./pages/posts.json", JSON.stringify({ "postsDateList": posts }), err => {
  if (err) throw err;
  console.log("Successfully generated: posts.json");

  posts.forEach(e => {
    const path = e.replace(/(\d{4})(\d{2})(\d{2})\.mdx/, (match, p1, p2, p3) => {
      return `blog/${p1}/${p2}/${p3}/`;
    });

    sitemap += "<url>\n";
    sitemap += `  <loc>https://hellorusk.net/${path}</loc>\n`;
    sitemap += "  <priority>0.5</priority>\n";
    sitemap += "</url>\n";
  });

  sitemap += "</urlset>";

  fs.writeFile("./static/sitemap.xml", sitemap, "utf-8", err => {
    if (err) throw err;

    console.log("Successfully generated: sitemap.xml");
    console.log("-----------------------------------");
    console.log(sitemap);
  });
});