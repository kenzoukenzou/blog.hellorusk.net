import { connect } from "react-redux";
import { ModeState } from "../store/types";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "../store/store";

interface LayoutProps {
  textcolor: string,
  backgroundcolor: string,
  linkcolor: string
}

const PageLayout = (props: LayoutProps) => (
  <PersistGate loading={null} persistor={persistor}>
    <style jsx global>{`
      body {
        color: ${props.textcolor};
        background-color: ${props.backgroundcolor};
        font-family: 'Noto Sans JP', sans-serif;
        font-display: swap;
        font-weight: 300;
        word-break : break-all;
        max-width: 656px;
        margin-right: auto;
        margin-left: auto; 
        padding: 0 2%;
        -webkit-text-size-adjust: 100%;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      h2 {
        font-weight: 300;
        font-size: 1.3em;
      }

      h3 {
        font-weight: 300;
        font-size: 1.1em;
      }

      h4 {
        font-weight: 300;
        font-size: 0.9em;
        color: #666666;
        font-style: italic;
      }
      
      a {
        text-decoration: none;
      }

      a:link, a:visited {
        color: ${props.linkcolor};
      }

      .title a:link {
        color: ${props.textcolor};
      }

      .title a:visited {
        color: ${props.textcolor};
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

      blockquote {
        margin: 0;
        padding-left: 0.8em;
        border-left-style: solid;
        color: #808080;
      }

      pre {
        overflow-x: scroll;
        font-size: 0.9em;
        background-color: #F0F0F0;
        padding: 0.1em;
        border-radius: 0.3em;
      }

      code {
        color: #000000;
        font-family: consolas, monaco;
        font-size: 0.9em;
        background-color: #F0F0F0;
        padding: 0.2em;
        border-radius: 0.3em;
      }
      
      .jump {
        text-align: center;
      }
    `}</style>
  </PersistGate>
);

const mapStateToProps = (state: ModeState) => {
  return {
    textcolor: state.textcolor,
    backgroundcolor: state.backgroundcolor,
    linkcolor: state.linkcolor
  };
};

export default connect(mapStateToProps)(PageLayout);