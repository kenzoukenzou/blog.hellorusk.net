import Meta from 'next/head';
import Header from '../components/header';
import Footer from '../components/footer';
import Link from 'next/link';
import "../style.css";

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
        <div className="info">{renderInfo(this.state.num)}</div>
      </div>
    );
  }
}

const renderInfo = (num) => {
  const elements = [
    <div className="about">
      横浜在住の大学生. <br />
      UNISON SQUARE GARDENとfhánaが好き.
      <br />
      最近はねんどろいどにハマってます.
      <br />
      INTJ-T.
      <br />
      <br />
      <div className="jump">
        <Link scroll={false} href="/whoami" replace>
          <a>in more detail</a>
        </Link>
      </div>
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
    </div>
  ];

  return elements[num];
}

export default () => (
  <div>
    <Meta>
      <title key="title">HelloRusk Official Website</title>
    </Meta>
    <Header />
    <Main />
    <Footer />
  </div>
)