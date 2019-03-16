import Meta from "next/head";
import Header from "../components/header";
import Footer from "../components/footer";
import Link from "next/link";
import { useState } from "react";

const Main = () => {
  const [num, setNum] = useState(0);

  const idList = ["About", "Links"];
  const buttonType = ["button", "button2"];
  const buttonElements = [];

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
      <div className="info">{renderInfo(num)}</div>
      <style jsx>{`          
        .info {
          margin: 0 auto;
          margin-top: 10px;
          text-align: center;
          height: 270px;
        }
      `}</style>
    </div>
  );
};

const renderInfo = num => {
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
          <a href="https://github.com/7ma7X" target="_blank">GitHub</a>
        </li>
        <li>
          <a href="https://www.instagram.com/8ma8x/" target="_blank">Instagram</a>
        </li>
        <li>
          <a href="https://twitter.com/hellorusk" target="_blank">Twitter</a>
        </li>
        <li>
          <a href="https://mstdn.jp/@hellorusk" target="_blank">mstdn.jp</a>
        </li>
        <li>
          <a href="https://www.last.fm/ja/user/HelloRusk" target="_blank">Last.fm</a>
        </li>
        <li>
          <a href="https://helllrrrk.hatenablog.com" target="_blank">
            はてなブログ（技術メモ）
          </a>
        </li>
        <li>
          <a href="https://hellorusk.hatenablog.com" target="_blank">はてなブログ（日記）</a>
        </li>
        <li>
          <a href="http://b.hatena.ne.jp/HelloRusk/" target="_blank">はてなブックマーク</a>
        </li>
        <li>
          <a href="https://bookmeter.com/users/849928" target="_blank">読書メーター</a>
        </li>
        <li>
          <a href="https://www.eventernote.com/users/8ma8X/" target="_blank">
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
          padding-inline-start: 3em;
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
      <meta name="google-site-verification" content="NukXzTqPewV5uTImQdXdiNq4ZKc6d3I65Bq9amzEM1s" />
      <title key="title">HelloRusk Official Website</title>
      <meta property="og:title" content="HelloRusk Official Website" /> 
      <meta property="og:url" content="/" /> 
      <meta property="og:description" content="HelloRuskの公式ウェブサイト" />
    </Meta>
    <Header />
    <Main />
    <Footer />
  </div>
);