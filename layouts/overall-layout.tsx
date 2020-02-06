import { connect } from "react-redux";
import { ModeType } from "../store/types";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "../store/store";
import { css, Global } from "@emotion/core";

interface LayoutProps {
  textColor: string;
  backgroundColor: string;
  linkColor: string;
  codeColor: string;
  quoteColor: string;
}

const PageLayout = (props: LayoutProps) => (
  <PersistGate loading={null} persistor={persistor}>
    <Global
      styles={css`
        body {
          color: ${props.textColor};
          background-color: ${props.backgroundColor};
          font-family: "Noto Sans JP", sans-serif;
          font-display: swap;
          font-weight: 300;
          word-break: break-all;
          max-width: 656px;
          margin-right: auto;
          margin-left: auto;
          padding: 0 2%;
          -webkit-text-size-adjust: 100%;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        a {
          text-decoration: none;
        }

        a:link,
        a:visited {
          color: ${props.linkColor};
        }

        a.back {
          color: ${props.linkColor};
          cursor: pointer;
        }

        .title a:link {
          color: ${props.textColor};
        }

        .title a:visited {
          color: ${props.textColor};
        }

        code {
          color: ${props.codeColor};
          font-family: Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;
          font-size: 0.9em;
          background-color: ${props.backgroundColor};
          border-radius: 0.1em;
        }

        blockquote {
          margin: 0;
          padding-left: 0.8em;
          border-left-style: solid;
          color: ${props.quoteColor};
        }

        p > code::before {
          content: \"\`\";
        }
        p > code::after {
          content: \"\`\";
        }

        p {
          text-align: left;
        }

        ul {
          padding-inline-start: 1.2em;
        }

        li {
          font-size: 0.9em;
        }

        span {
          text-align: center;
        }

        hr {
          border-width: 0.5px;
        }

        .jump {
          font-size: 1.1em;
          text-align: center;
        }
      `}
    ></Global>
  </PersistGate>
);

const mapStateToProps = (state: ModeType) => {
  return {
    textColor: state.textColor,
    backgroundColor: state.backgroundColor,
    linkColor: state.linkColor,
    codeColor: state.codeColor,
    quoteColor: state.quoteColor
  };
};

export default connect(mapStateToProps)(PageLayout);
