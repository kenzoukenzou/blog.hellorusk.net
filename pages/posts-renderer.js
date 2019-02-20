import Link from "next/link";
import data from "./posts.json";
import { useState } from "react";

const postsDateList = data["postsDateList"];
const postsComponentList = [];

for (const date of postsDateList) {
  const { meta } = require(`./posts/${date}`);
  postsComponentList.push(
    <div className="blog" key={meta.date}>
      <div className="date">{meta.date}</div>
      <div className="title"><Link scroll={false} href={meta.url}><a>{meta.title}</a></Link></div>
    </div>
  );
}

export default () => {
  const [num, setNum] = useState(7);
  const article_num = postsComponentList.length;

  const show_more = num => {
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
              font-weight: 400;
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