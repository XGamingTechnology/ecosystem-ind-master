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
        <div
          className='-z-10 absolute h-[60%] min-h-[600px] lg:min-h-[700px] top-0 left-0 w-full bg-no-repeat bg-cover bg-bottom'
          style={{ backgroundImage: 'url("/secondary-bg.svg")' }}
        />
        <Footer />
      </RootLayout>
    </>
  );
}
