import Meta from 'next/head';
import Header from '../components/header';
import Footer from '../components/footer';
import Link from 'next/link';
import "../style.css";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 0,
      numArray: [1, 0],
      buttonType: ["button", "button2"]
    };
  }

  clickHandler(i) {
    this.setState({ num: i });
    if (i === 0) {
      this.setState({
        numArray: [1, 0]
      });
    }
    if (i === 1) {
      this.setState({
        numArray: [0, 1]
      });
    }
  }

  render() {
    const idList = ["About", "Links"];
    const elements = [];

    idList.forEach((v, i) => {
      elements.push(
        <div
          key={v}
          className={this.state.buttonType[this.state.numArray[i]]}
          onClick={() => this.clickHandler(i)}
        >
          {v}
        </div>
      );
    });

    let tmp = this.state.num;

    return (
      <div>
        <div className="buttonContainer">{elements}</div>
        <div className="info">{renderInfo(tmp)}</div>
      </div>
    );
  }
}

function renderInfo(num) {
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
      <Link href="/whoami">
        <p className="jump">in more detail</p>
      </Link>
    </div>,
    <div className="links">
      <ul>
        <li>
          <a href="https://github.com/7ma7X">GitHub</a>
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
      <title>HelloRusk Official Website</title>
    </Meta>
    <Header />
    <Main />
    <Footer />
  </div>
)