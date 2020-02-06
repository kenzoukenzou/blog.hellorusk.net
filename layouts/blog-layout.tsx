import Link from "next/link";
import Footer from "../components/footer";
import {
  MetaUrl,
  MetaTitle,
  removeTrailingSlash,
  encodeCharacterForLink,
  MetaDate
} from "../components/blog-meta";
import data from "../components/posts.json";
import styled from "@emotion/styled";
import { css, Global } from "@emotion/core";
import Meta from "next/head";
import { ModeType } from "../store/types";
import { connect } from "react-redux";
import { persistor } from "../store/store";
import { PersistGate } from "redux-persist/integration/react";

const postsIndexHash: any = data["postsIndexHash"];

interface LayoutProps {
  syntaxStyle: string;
  meta: {
    date: MetaDate;
    title: MetaTitle;
    url: MetaUrl;
  };
}

const BlogLayout = (props: LayoutProps) => {
  const normalizedUrl = removeTrailingSlash(props.meta.url);
  const normalizedTitle = encodeCharacterForLink(props.meta.title);

  const tweetlink = `https://twitter.com/intent/tweet?text=${normalizedTitle}%20-%20HelloRusk%20Official%20Website%0a&url=https://hellorusk.net${normalizedUrl}`;

  const index = postsIndexHash[props.meta.date];

  console.log(props.syntaxStyle);

  return (
    <>
      <PersistGate loading={null} persistor={persistor}>
        <Meta>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Ubuntu+Mono&display=swap"
          />
          <link
            rel="stylesheet"
            href={`https://cdnjs.cloudflare.com/ajax/libs/prism/1.9.0/themes/${props.syntaxStyle}.min.css`}
          />
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/katex@0.11.0/dist/katex.min.css"
          />
        </Meta>
      </PersistGate>
      <GlobalStyle />
      <br />
      <Tweet>
        <a href={tweetlink} target="_blank" rel="noopener">
          <img src="/twitter.svg" height="40" alt="tweet" />
        </a>
      </Tweet>
      <div className="jump">
        <Link href={`/blog?page=${index}`}>
          <a>BACK</a>
        </Link>
        <br />
      </div>
      <Footer />
    </>
  );
};

const Tweet = styled.div`
  text-align: right;
`;

const GlobalStyle = () => (
  <Global
    styles={css`
      h1 {
        font-weight: 300;
        font-size: 1.4em;
      }

      h2 {
        font-weight: 300;
        font-size: 1.3em;
      }

      h3 {
        font-weight: 300;
        font-size: 1.2em;
      }

      h4 {
        font-weight: 300;
        font-size: 0.9em;
        color: #a0a0a0;
        font-style: italic;
      }

      table {
        border-collapse: collapse;
      }

      th {
        padding: 0.2em 1em;
        font-size: 0.9em;
      }

      td {
        border-top: 1px solid #ddd;
        padding: 0.2em 1em;
        font-size: 0.9em;
      }

      p {
        font-size: 0.9em;
      }

      p img {
        display: block;
        margin: 0 auto;
      }

      pre {
        overflow-x: auto;
        font-size: 0.9em;
        background-color: #f0f0f0;
        padding: 0.6em !important;
        border-radius: 0.3em;
      }

      .math {
        overflow-x: auto;
      }

      @media screen and (min-width: 671px) {
        p img {
          width: 650px;
        }
      }

      @media screen and (max-width: 670px) {
        p img {
          width: 100%;
        }
      }
    `}
  />
);

export const microLinkStyle = {
  color: "#000000",
  fontFamily:
    // eslint-disable-next-line prettier/prettier
    "-apple-system-body,BlinkMacSystemFont,\"Helvetica Neue\",\"Hiragino Sans\",\"Hiragino Kaku Gothic ProN\",\"Noto Sans Japanese\",\"游ゴシック Medium\",\"Yu Gothic Medium\",\"メイリオ\",meiryo,sans-serif"
};

const mapStateToProps = (state: ModeType) => {
  return {
    syntaxStyle: state.syntaxStyle
  };
};

export default connect(mapStateToProps)(BlogLayout);
