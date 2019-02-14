import Meta from "next/head";
import Footer from "../components/footer";
import Link from "next/link";

const Profile = () => (
  <div>
    <div className="bold"># Profile</div>
    計算機科学を学んでいる大学生(B2).<br/>
    怠惰で, 気まぐれ屋で, 考え事が多く, <br/>
    生きるのが少し苦手です.
    <style jsx>{`
      .bold {
        font-size: 1.3em;
        margin-top: 1em;
        margin-bottom: 0.5em;
        margin-left: -0.5em;
      }
    `}</style>
  </div>
);

const Interests = () => (
  <div>
    <div className="bold"># Interests</div>
    -  Node.js<br/>
    -  React<br/>
    -  TypeScript<br/>
    -  Haskell<br/>
    -  Rust<br/>
    -  fish shell<br/>
    -  Vim<br/>
    <style jsx>{`
      .bold {
        font-size: 1.3em;
        margin-top: 1em;
        margin-bottom: 0.5em;
        margin-left: -0.5em;
      }
    `}</style>
  </div>
);

const Certifications = () => (
  <div>
    <div className="bold"># Certifications</div>
    -  Not yet ... (I wanna get some)
    <style jsx>{`
      .bold {
        font-size: 1.3em;
        margin-top: 1em;
        margin-bottom: 0.5em;
        margin-left: -0.5em;
      }
    `}</style>
  </div>
);

const About = () => (
  <p>This site is created by <a href="https://nextjs.org/">Next.js</a>.</p>
);

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
      <style jsx>{`
        .whoami {
          text-align: center;
        }
        
        .detail {
          text-align: left;
          display: inline-block;
        }
      `}</style>
      <style jsx global>{`
        .bold {
          font-size: 1.3em;
          margin-top: 1em;
          margin-bottom: 0.5em;
          margin-left: -0.5em;
        }
      `}</style>
    </div>
    <div className="jump">
      <Link scroll={false} href="/" replace>
        <a>home</a>
      </Link>
    </div>
    <Footer />
  </div>
);
