import 'styles/app.scss';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { CacheProvider, EmotionCache } from '@emotion/react';
import createEmotionCache from 'styles/createEmotionCache';
import 'styles/fonts.scss';

const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

function MyApp({ Component, pageProps, emotionCache = clientSideEmotionCache }: MyAppProps) {
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>Institutional Marketplace for Commercial Real Estate - Pillar Markets</title>
        <meta
          name="description"
          content="Pillar is a commercial real estate investment platform designed to facilitate discovery, diligence, execution, and ongoing management of direct deals for institutional CRE investors (e.g. pensions/endowments/family offices/RIAs) and help sponsors efficiently manage capital throughout the lifecycle of an investment."
        />
      </Head>
      <Component {...pageProps} />
    </CacheProvider>
  );
}

export default MyApp;
