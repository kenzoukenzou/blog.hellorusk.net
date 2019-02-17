import Link from "next/link";
import data from "./posts.json";

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

export default () => (
  <div>
    {postsComponentList}
  </div>
);