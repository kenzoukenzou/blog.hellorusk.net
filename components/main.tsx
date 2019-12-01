import Link from "next/link";
import { useState } from "react";
import { connect } from "react-redux";
import { ModeState } from "../store/types";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "../store/store";

const renderInfo = (num: number) => {
  const elements = [
    <div className="about">
      <Link scroll={false} href="/whoami">
        <a>Profile</a>
      </Link>
      <br />
      <Link scroll={false} href="/blog">
        <a>Blog</a>
      </Link>
      <br />
      <style jsx>{`
        .about {
          display: inline-block;
          text-align: left;
          animation: fadein 0.2s linear;
        }

        @keyframes fadein {
          from {
            opacity: 0;
            transform: translate3d(0, 5px, 0);
          }

          to {
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }
        }
      `}</style>
    </div>,
    <div className="links">
      <ul>
        <li>
          <a href="https://github.com/7ma7X" target="_blank">
            GitHub
          </a>
        </li>
        <li>
          <a href="https://keybase.io/hellorusk" target="_blank">
            Keybase
          </a>
        </li>
        <li>
          <a href="https://twitter.com/hellorusk" target="_blank">
            Twitter
          </a>
        </li>
        <li>
          <a href="https://www.last.fm/ja/user/HelloRusk" target="_blank">
            Last.fm
          </a>
        </li>
        <li>
          <a href="https://tech.hellorusk.net" target="_blank">
            Hatena Blog
          </a>
        </li>
        <li>
          <a href="https://bookmeter.com/users/849928" target="_blank">
            Book Meter
          </a>
        </li>
      </ul>
      <style jsx>{`
        .links {
          display: inline-block;
          text-align: left;
          animation: fadein 0.2s linear;
        }

        .links ul {
          margin: 0 40px 0 0;
          list-style-type: none;
          padding-inline-start: 2.5em;
        }

        .links li {
          font-size: 1em;
        }

        @keyframes fadein {
          from {
            opacity: 0;
            transform: translate3d(0, 5px, 0);
          }

          to {
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }
        }
      `}</style>
    </div>
  ];

  return elements[num];
};

interface LayoutProps {
  boxshadow: string;
  border: string;
}

const Main = (props: LayoutProps) => {
  const [num, setNum] = useState(0);

  const idList = ["About", "Links"];
  const buttonType = ["button", "button2"];
  const buttonElements: JSX.Element[] = [];

  idList.forEach((v, iter) => {
    buttonElements.push(
      <div
        key={v}
        className={buttonType[(num + iter) % 2]}
        onClick={() => setNum(iter)}
      >
        {v}
      </div>
    );
  });

  return (
    <PersistGate loading={null} persistor={persistor}>
      <div className="buttonContainer">{buttonElements}</div>
      <style jsx>{`
        .buttonContainer {
          margin: 0 auto;
          padding-top: 15px;
          text-align: center;
        }

        @media screen and (min-width: 501px) {
          .buttonContainer {
            min-width: 500px;
            width: 50%;
          }
        }

        @media screen and (max-width: 500px) {
          .buttonContainer {
            width: 100%;
          }
        }
      `}</style>
      <style jsx global>{`
        .button,
        .button2 {
          font-size: 1.1em;
          display: inline-block;
          width: 30%;
          margin: 0 10px;
          padding: 5px 0;
          cursor: pointer;
          border: ${props.border};
          box-shadow: ${props.boxshadow};
        }

        .button {
          background-color: #000000;
          color: #ffffff;
        }

        .button2 {
          background-color: #ffffff;
          color: #000000;
          transition: 0.4s;
        }

        .button2:hover {
          background-color: #000000;
          color: #ffffff;
        }
      `}</style>
      <div className="info">{renderInfo(num)}</div>
      <style jsx>{`
        .info {
          margin: 0 auto;
          margin-top: 10px;
          text-align: center;
          height: 220px;
        }
      `}</style>
    </PersistGate>
  );
};

const mapStateToProps = (state: ModeState) => {
  return {
    boxshadow: state.boxshadow,
    border: state.border
  };
};

export default connect(mapStateToProps)(Main);
