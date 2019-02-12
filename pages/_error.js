import Meta from 'next/head';
import Header from '../components/header';
import Footer from '../components/footer';
import Link from 'next/link';

export default () => (
  <div>
    <Meta>
      <title key="title">HelloRusk Official Website</title>
    </Meta>
    <Header />
    <p>Error</p>
    <div className="jump">
      <Link scroll={false} href="/" replace>
        <a>home</a>
      </Link>
    </div>
    <Footer />
  </div>
)