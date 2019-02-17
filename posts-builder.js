const fs = require("fs");

const posts = fs.readdirSync("./pages/posts");
posts.sort((a, b) => a < b ? 1 : -1);

fs.writeFile("./pages/posts.json", JSON.stringify({ "postsDateList": posts }), err => {
  if (err) throw err;
  console.log("Successfully generated: posts.json");
});