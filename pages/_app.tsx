// libs
import { CacheProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useMemo, useState } from 'react';
import { IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ToastContainer } from 'react-toastify';
// components
import { EmptyLayout } from '@components';
// locales
import locales from '@locales';
// models
import { AppPropsWithLayout } from '@models';
// store
import store, { persistor } from 'app/store';
// utils
import { createEmotionCache, theme, themeOther } from '@utils';
// others
import '../styles/globals.css';
import 'react-toastify/dist/ReactToastify.css';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function App({ Component, pageProps, emotionCache = clientSideEmotionCache }: AppPropsWithLayout) {
  const { locale = 'en', pathname } = useRouter();

  const [appTheme, setAppTheme] = useState(theme);

  let title = 'Booking Care';
  switch (pathname) {
    case '/':
      title = 'Booking Care';
      break;
    case '/login':
      title = 'Login';
      break;
    case '/job-plan':
      title = 'Job Plan';
      break;
    case '/wip-status':
      title = 'WIP Status';
      break;
    case '/fir':
      title = 'Fir';
      break;
    case '/notification':
      title = 'Notification';
      break;
    default:
      title = 'Booking Care';
  }

  const messages: any = useMemo(() => {
    switch (locale) {
      case 'en':
        return locales['en'];
      case 'vi':
        return locales['vi'];
      default:
        return locales['en'];
    }
  }, [locale]);

  useEffect(() => {
    setAppTheme(locale.toLowerCase() == 'en' ? themeOther : theme);
  }, [locale]);

  const Layout = Component.Layout ?? EmptyLayout;
  return (
    <CacheProvider value={emotionCache}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <IntlProvider locale={locale} messages={messages} onError={() => null}>
            <Layout>
              <Head>
                <title>{title}</title>
                <meta name="viewport" content="initial-scale=1, width=device-width" />
                <link
                  rel="stylesheet"
                  type="text/css"
                  href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
                />
                <link
                  rel="stylesheet"
                  type="text/css"
                  href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
                />

                <link
                  rel="stylesheet"
                  type="text/css"
                  // charset="UTF-8"
                  href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
                />
                <link
                  rel="stylesheet"
                  type="text/css"
                  href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
                />
              </Head>

              <ThemeProvider theme={appTheme}>
                <CssBaseline />
                <Component {...pageProps} />

                {/* <ToastContainer
                  position="top-right"
                  autoClose={8000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  draggable={false}
                  // pauseOnVisibilityChange
                  closeOnClick
                  pauseOnHover
                /> */}

                <ToastContainer
                  position="top-right"
                  autoClose={2000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                  theme="light"
                />
              </ThemeProvider>
            </Layout>
          </IntlProvider>
        </PersistGate>
      </Provider>
    </CacheProvider>
  );
}
