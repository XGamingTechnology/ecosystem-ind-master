import Head from 'next/head';
import Navbar from '../Navbar';
import Footer from '../Footer';
import RootLayout from './root';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Ecosystems International</title>
        <meta
          name='description'
          content='PT ESI is a foreign-owned company and a branch of Trident Water
              Systems Pte. Ltd., Singapore. We provide solutions for industrial
              liquid waste processing with technology, engineering and
              experience as well as good project management capabilities.'
        ></meta>
      </Head>
      <RootLayout>
        <Navbar />
        <div>{children}</div>
        <div
          className='-z-10 absolute h-[120vh] min-h-[900px] lg:min-h-[1000px] top-0 left-0 w-full bg-no-repeat bg-cover bg-bottom'
          style={{ backgroundImage: 'url("/main-bg.svg")' }}
        />
        <Footer />
      </RootLayout>
    </>
  );
}
