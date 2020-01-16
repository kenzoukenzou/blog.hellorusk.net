import { connect } from "react-redux";
import { ModeType } from "../store/types";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "../store/store";
import { css, Global } from "@emotion/core";

interface LayoutProps {
  textcolor: string;
  backgroundcolor: string;
  linkcolor: string;
}

const PageLayout = (props: LayoutProps) => (
  <PersistGate loading={null} persistor={persistor}>
    <Global
      styles={css`
        body {
          color: ${props.textcolor};
          background-color: ${props.backgroundcolor};
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
          color: ${props.linkcolor};
        }

        a.back {
          color: ${props.linkcolor};
          cursor: pointer;
        }

        .title a:link {
          color: ${props.textcolor};
        }

        .title a:visited {
          color: ${props.textcolor};
        }

        code {
          color: #f08d49;
          font-family: Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;
          font-size: 0.9em;
          background-color: ${props.backgroundcolor};
          border-radius: 0.1em;
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
    textcolor: state.textcolor,
    backgroundcolor: state.backgroundcolor,
    linkcolor: state.linkcolor
  };
};

export default connect(mapStateToProps)(PageLayout);
