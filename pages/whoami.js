import Meta from 'next/head';
import Footer from '../components/footer';
import Link from 'next/link';
import "../style.css";

class Profile extends React.Component {
  render() {
    return(
      <div>
        <div className="bold"># Profile</div>
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
      <div>
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
      <div>
        <div className="bold"># Certifications</div>
        -  Not yet ... (I wanna get some)
      </div>
    );
  }
}

class About extends React.Component {
  render() {
    return(
      <p>
        This site is created by <a href="https://nextjs.org/">Next.js</a>.
      </p>
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
        <Profile /><br/>
        <Interests /><br/>
        <Certifications /><br/>
        <About /><br/>
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
