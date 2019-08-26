import Link from "next/link";
import data from "./posts.json";
import { useState } from "react";

const postsDateList = data["postsDateList"];
const postsComponentList: JSX.Element[] = [];

const internalLink = (date: String) => {
  return date.replace(/^(\d{4})-(\d{2})-(\d{2})$/, (match, p1, p2, p3) => {
    return `/posts/${p1}${p2}${p3}`;
  })
}

for (const date of postsDateList) {
  const { meta } = require(`../pages/posts/${date}`);
  postsComponentList.push(
    <div className="blog" key={meta.date}>
      <div className="date">{meta.date}</div>
      <div className="title"><Link scroll={false} href={internalLink(meta.date)} as={meta.url}><a>{meta.title}</a></Link></div>
    </div>
  );
}

export default () => {
  const [num, setNum] = useState(7);
  const article_num = postsComponentList.length;

  const show_more = (num: number) => {
    if (num < article_num) {
      return (
        <div className="older" onClick={() => setNum(num + 7)}>
          <p>older</p>
          <style jsx>{`
            .older p {
              text-align: left;
              font-style: italic;
              cursor: pointer;
              color: #4B0082;
            }
          `}</style>
        </div>
      );
    } 
  };

  return (
    <div>
      {postsComponentList.slice(0, num)}
      {show_more(num)}
    </div>
  );
};