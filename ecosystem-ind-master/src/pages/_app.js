import { appWithTranslation } from 'next-i18next';
import '@/styles/globals.css';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import 'swiper/css';
import 'swiper/css/free-mode';

const App = ({ Component, pageProps }) => {
  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(
    <main>
      <Component {...pageProps} />
    </main>,
  );
};

export default appWithTranslation(App);
