import Link from "next/link";
import data from "./posts.json";
import { useState } from "react";
import { internalLink, removeTrailingSlash } from "./blog-meta";
import { ModeState } from "../store/types";
import { connect } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "../store/store";

const postsDateList = data["postsDateList"];
const postsComponentList: JSX.Element[] = [];

for (const date of postsDateList) {
  const { meta } = require(`../pages/posts/${date}`);

  const normalizedLink = internalLink(meta.date);
  const normalizedUrl = removeTrailingSlash(meta.url);

  postsComponentList.push(
    <div className="blog" key={meta.date}>
      <div className="date">{meta.date}</div>
      <div className="title">
        <Link scroll={false} href={normalizedLink} as={normalizedUrl}>
          <a>{meta.title}</a>
        </Link>
      </div>
    </div>
  );
}

interface PostsRendererProps {
  linkcolor: string;
}

const PostsRenderer = (props: PostsRendererProps) => {
  const [offset, setOffset] = useState(0);
  const article_num = postsComponentList.length;

  const show_more = (num: number) => {
    return (
      <PersistGate loading={null} persistor={persistor}>
        <div className="post_prev">
          {offset !== 0 ? (
            <p>
              <a onClick={() => setOffset(num - 10)}>Prev</a>
            </p>
          ) : null}
          <style jsx>{`
            .post_prev {
              display: inline-block;
              width: 50%;
            }

            .post_prev p {
              text-align: left;
              font-style: italic;
              cursor: pointer;
              color: ${props.linkcolor};
              font-size: 1.1em;
            }
          `}</style>
        </div>
        <div className="post_next">
          {offset + 10 < article_num ? (
            <p>
              <a onClick={() => setOffset(num + 10)}>Next</a>
            </p>
          ) : null}
          <style jsx>{`
            .post_next {
              display: inline-block;
              width: 50%;
            }

            .post_next p {
              text-align: right;
              font-style: italic;
              cursor: pointer;
              color: ${props.linkcolor};
              font-size: 1.1em;
            }
          `}</style>
        </div>
      </PersistGate>
    );
  };

  return (
    <div>
      {postsComponentList.slice(offset, offset + 10)}
      {show_more(offset)}
    </div>
  );
};

const mapStateToProps = (state: ModeState) => {
  return {
    linkcolor: state.linkcolor
  };
};

export default connect(mapStateToProps)(PostsRenderer);
