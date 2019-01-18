import Meta from 'next/head';
import Footer from '../components/footer';
import Link from 'next/link';
import "../style.css";

class About extends React.Component {
  render() {
    return(
      <div className="aboutme">
        <div className="bold"># About</div>
        計算機科学を学んでいる大学生(B2).<br/>
        怠惰で, 気まぐれ屋で, 考え事が多く, <br/>
        生きるのが少し苦手です.
      </div>
    );
  }
}

class Interests extends React.Component {
  render() {
    return(
      <div className="interests">
        <div className="bold"># Interests</div>
        -  Node.js<br/>
        -  React / Redux<br/>
        -  Haskell<br/>
        -  Rust<br/>
        -  Ruby, Rails<br/>
        -  fish shell<br/>
        -  Vim<br/>
      </div>
    );
  }
}

class Certifications extends React.Component {
  render() {
    return(
      <div className="certifications">
        <div className="bold"># Certifications</div>
        -  Not yet ... (I wanna get some)
      </div>
    );
  }
}

export default () => (
  <div>
    <Meta>
      <title key="title">HelloRusk Official Website</title>
    </Meta>
    <div className="whoami">
      <div className="detail">
        <About /><br/>
        <Interests /><br/>
        <Certifications /><br/>
      </div>
    </div>
    <div className="jump">
      <Link href="/" replace>
        <a>home</a>
      </Link>
    </div>
    <Footer />
  </div>
)
