// libs
import { CacheProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { useRouter } from 'next/router';
import { useEffect, useMemo, useState } from 'react';
import { IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';
// components
import { EmptyLayout } from '@components';
// locales
import locales from '@locales';
// models
import { AppPropsWithLayout } from '@models';
// store
import store from 'app/store';
// utils
import { createEmotionCache, theme, themeOther } from '@utils';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function App({ Component, pageProps, emotionCache = clientSideEmotionCache }: AppPropsWithLayout) {
  const { locale = 'en', pathname } = useRouter();

  const [appTheme, setAppTheme] = useState(theme);

  let title = 'Inchcape';
  switch (pathname) {
    case '/':
      title = 'Inchcape';
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
      title = 'Inchcape';
  }

  const messages: any = useMemo(() => {
    switch (locale) {
      case 'en':
        return locales['en'];
      case 'tc':
        return locales['vi'];
      default:
        return locales['en'];
    }
  }, [locale]);

  useEffect(() => {
    setAppTheme(locale.toLowerCase() == 'tc' ? themeOther : theme);
  }, [locale]);

  const Layout = Component.Layout ?? EmptyLayout;
  return (
    <CacheProvider value={emotionCache}>
      <Provider store={store}>
        <IntlProvider locale={locale} messages={messages} onError={() => null}>
          <Layout>
            <ThemeProvider theme={appTheme}>
              <CssBaseline />
              <Component {...pageProps} />
            </ThemeProvider>
          </Layout>
        </IntlProvider>
      </Provider>
    </CacheProvider>
  );
}
