import Link from "next/link";
import data from "./posts.json";
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
        <Link href={normalizedLink} as={normalizedUrl}>
          <a>{meta.title}</a>
        </Link>
      </div>
    </div>
  );
}

interface PostsRendererProps {
  linkcolor: string;
  page: number;
}

const PostsRenderer = (props: PostsRendererProps) => {
  const N = 7;

  const article_num = postsComponentList.length;
  const page = props.page;

  const prev_cri = page > 1 && (page - 1) * N < article_num;
  const next_cri = page >= 1 && page * N < article_num;
  const inner_cri = (page - 1) * N < article_num && article_num <= page * N;

  const show_more = () => {
    return (
      <PersistGate loading={null} persistor={persistor}>
        <div className="post_prev">
          {prev_cri ? (
            <p>
              <Link href={`/blog?page=${page - 1}`} prefetch={false}>
                <a>&lt; PREV</a>
              </Link>
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
          {next_cri ? (
            <p>
              <Link href={`/blog?page=${page + 1}`} prefetch={false}>
                <a>NEXT &gt;</a>
              </Link>
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
        <div>
          {!prev_cri && !next_cri && !inner_cri ? (
            <div className="error">
              <span>表示する記事がありません。</span>
              <br />
              <br />
              <img src="/hitori.jpg" width="90%" alt="hitori" />
              <br />
              <style jsx>{`
                .error {
                  padding-top: 15px;
                  text-align: center;
                }
              `}</style>
            </div>
          ) : null}
        </div>
      </PersistGate>
    );
  };

  return (
    <div>
      {page >= 1 ? postsComponentList.slice((page - 1) * N, page * N) : null}
      {show_more()}
    </div>
  );
};

const mapStateToProps = (state: ModeState) => {
  return {
    linkcolor: state.linkcolor
  };
};

export default connect(mapStateToProps)(PostsRenderer);
