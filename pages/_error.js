import Meta from 'next/head';
import Header from '../components/header';
import Footer from '../components/footer';
import Link from 'next/link';
import "../style.css";

export default () => (
  <div>
    <Meta>
      <title>HelloRusk Official Website</title>
    </Meta>
    <Header />
      <p>Error</p>
    <Link href="/">
      <p className="jump">home</p>
    </Link>
    <Footer />
  </div>
)