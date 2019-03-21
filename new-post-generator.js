const fs = require("fs");

const date = new Date();
const Y = date.getFullYear();
const M = date.getMonth() + 1;
const D = date.getDate();

const zeroPadding = num => {
  if (num < 10) {
    return "0" + String(num);
  } else {
    return String(num);
  }
};

const template = `
import BlogLayout from "../../components/blog-layout";
import BlogMeta from "../../components/blog-meta";

export const meta = {
  date: '${Y}-${zeroPadding(M)}-${zeroPadding(D)}',
  title: 'ここにタイトルを記入してください',
  url: '/blog/${Y}/${zeroPadding(M)}/${zeroPadding(D)}/',
  description: '${Y}-${zeroPadding(M)}-${zeroPadding(D)} の日記'
}

## ここにタイトルを記入してください
#### ${Y}-${zeroPadding(M)}-${zeroPadding(D)}



<BlogLayout meta={meta} />
<BlogMeta meta={meta} />
`;

fs.writeFile(`./pages/posts/${Y}${zeroPadding(M)}${zeroPadding(D)}.mdx`, template, "utf-8", err => {
  if (err) throw err;
  console.log(`Successfully generated: ${Y}${zeroPadding(M)}${zeroPadding(D)}.mdx`);
});