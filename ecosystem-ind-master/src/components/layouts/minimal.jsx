import Head from 'next/head';
import Navbar from '../Navbar';
import Footer from '../Footer';
import RootLayout from './root';

export default function Layout({ children, title = '' }) {
  const nTitle = `${title} - Ecosystems International`;

  return (
    <>
      <Head>
        <title>{nTitle}</title>
      </Head>
      <RootLayout>
        <Navbar />
        <div>{children}</div>
        <Footer />
      </RootLayout>
    </>
  );
}
