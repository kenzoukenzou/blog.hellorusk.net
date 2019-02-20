import React from "react";
import Meta from "next/head";
import Header from "../components/header";
import Footer from "../components/footer";
import Link from "next/link";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = { num: 0 };
  }

  clickHandler(i) {
    this.setState({ num: i });
  }

  render() {
    const idList = ["About", "Links"];
    const buttonType = ["button", "button2"];
    const buttonElements = [];

    idList.forEach((v, iter) => {
      buttonElements.push(
        <div
          key={v}
          className={buttonType[(this.state.num + iter) % 2]}
          onClick={() => this.clickHandler(iter)}
        >
          {v}
        </div>
      );
    });

    return (
      <div>
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
          .button, .button2 {
            display: inline-block;
            border: dotted 0.1px #000000;
            width: 30%;
            margin: 0 10px;
            padding: 5px 0;
            cursor: pointer;
          }
          
          .button {
            background-color: #000000;
            color: #FFFFFF;
          }
          
          .button2 {
            transition: .4s;
          }

          .button2:hover {
            background-color: #000000;
            color: #FFFFFF;
          }
        `}</style>
        <div className="info">{renderInfo(this.state.num)}</div>
        <style jsx>{`          
          .info {
            margin: 0 auto;
            margin-top: 10px;
            text-align: center;
          }
          
          @media screen and (min-height: 701px) {
            .info {
              height: 300px;
            }
          }
          
          @media screen and (max-height: 700px) {
            .info {
              height: 250px;
            }
          }
        `}</style>
      </div>
    );
  }
}

const renderInfo = (num) => {
  const elements = [
    <div className="about">
      <Link scroll={false} href="/whoami"><a>Profile</a></Link><br/>
      <Link scroll={false} href="/blog"><a>Blog</a></Link><br/>
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
          <a href="https://github.com/7ma7X">GitHub</a>
        </li>
        <li>
          <a href="https://keybase.io/hellorusk">Keybase</a>
        </li>
        <li>
          <a href="https://twitter.com/hellorusk">Twitter</a>
        </li>
        <li>
          <a href="https://mstdn.jp/@hellorusk">mstdn.jp</a>
        </li>
        <li>
          <a href="https://www.last.fm/ja/user/HelloRusk">Last.fm</a>
        </li>
        <li>
          <a href="https://helllrrrk.hatenablog.com">
            はてなブログ（技術メモ）
          </a>
        </li>
        <li>
          <a href="https://hellorusk.hatenablog.com">はてなブログ（日記）</a>
        </li>
        <li>
          <a href="http://b.hatena.ne.jp/HelloRusk/">はてなブックマーク</a>
        </li>
        <li>
          <a href="https://bookmeter.com/users/849928">読書メーター</a>
        </li>
        <li>
          <a href="https://www.eventernote.com/users/8ma8X/">
            イベンターノート
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
          margin: 0 30px 0 0;
          list-style-type: none;
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

export default () => (
  <div>
    <Meta>
      <title key="title">HelloRusk Official Website</title>
    </Meta>
    <Header />
    <Main />
    <Footer />
  </div>
);