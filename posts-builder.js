const fs = require("fs");

const posts = fs.readdirSync("./pages/posts");
posts.sort((a, b) => a < b ? 1 : -1);

fs.writeFileSync("./pages/posts.json", JSON.stringify({ "postsDateList": posts }));