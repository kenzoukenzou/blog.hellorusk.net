import Link from "next/link";
import Footer from "./footer";

export default () => (
  <div>
    <br/>
    <div className="jump">
      <Link scroll={false} href="/blog">
        <a>back</a>
      </Link>
      <style jsx global>{`
        p {
          font-size: 0.9em;
        }
      `}</style>
    </div>
    <Footer />
  </div>
)