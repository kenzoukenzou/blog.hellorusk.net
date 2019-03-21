import Meta from "next/head";
import Footer from "../components/footer";
import Link from "next/link";

const Profile = () => (
  <div>
    <div className="title">Profile</div>
    横浜市に在住する大学生です. 大学では計算機科学を学んでいます.<br/>
    おもにプログラミングと読書をして日々を過ごしています.<br/>
    音楽の話をするのが好きです. 好きなアーティストは UNISON SQUARE GARDEN と fhána.<br/>
    その他, 声優アーティストの楽曲にも少し詳しいです.<br/>
    最近はねんどろいどにハマってます.
  </div>
);

const Interests = () => (
  <div>
    <div className="title">Interests</div>
    Node.js, React, TypeScript, Haskell, Rust, fish shell, Vim ...
  </div>
);

const Certifications = () => (
  <div>
    <div className="title">Certifications</div>
    Not yet ... (I wanna get some)
  </div>
);

const About = () => (
  <div>
    <div className="title">About this site</div>
    <a href="https://nextjs.org/" target="_blank">Next.js</a> を用いて構築されています.<br/>
      Netlify によって<a href="https://github.com/7ma7X/mywebsite" target="_blank"> GitHub のリポジトリ</a>から自動でデプロイされています.
  </div>
);

export default () => (
  <div>
    <Meta>
      <title key="title">whoami - HelloRusk Official Website</title>
      <meta property="og:title" content="HelloRusk Profile" /> 
      <meta property="og:url" content="/whoami" /> 
      <meta property="og:description" content="HelloRuskとは何者か？" />
    </Meta>
    <div className="whoami">
      <div className="icon">
        <picture>
          <source type="image/webp" srcSet="/static/mika.webp" alt="mika"/>
          <img src="/static/mika.png" alt="mika"/><br/>
        </picture>
        <span>HN: HelloRusk</span>
      </div>
      <div className="detail">
        <Profile /><br/>
        <Interests /><br/>
        <Certifications /><br/>
        <About /><br/>
      </div>
      <style jsx>{`      
        .detail {
          text-align: left;
          display: inline-block;
        }

        .icon img {
          margin-top: 20px;
          height: 70px;
        }

        .icon span {
          font-size: 0.9em;
          font-style: italic;
          color: #505050;
        }
      `}</style>
      <style jsx global>{`
        .title {
          font-size: 1.5em;
          margin-top: 1em;
          margin-bottom: 0.5em;
          text-shadow: 4px 4px 4px #C0C0C0;
        }
      `}</style>
    </div>
    <div className="jump">
      <Link scroll={false} href="/">
        <a>home</a>
      </Link>
    </div>
    <Footer />
  </div>
);
