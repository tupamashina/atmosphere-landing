import { Open_Sans } from 'next/font/google';
import Head from 'next/head';

import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';

import type { AppProps } from 'next/app';
import type { FC } from 'react';

import 'modern-normalize/modern-normalize.css';
import '@/styles/global.css';

const font = Open_Sans({
  style: 'normal',
  subsets: ['cyrillic'],

  fallback: [
    'system-ui',
    '-apple-system',
    'BlinkMacSystemFont',
    'Segoe UI',
    'Noto Sans',
    'Helvetica',
    'Arial',
    'sans-serif',
    'Apple Color Emoji',
    'Segoe UI Emoji',
  ],
});

const App: FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <title>dr.</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Header />
    <Component {...pageProps} />
    <Footer />

    {/* eslint-disable-next-line react/no-unknown-property */}
    <style jsx global>{`
      :root {
        font-family: ${font.style.fontFamily};
        font-style: ${font.style.fontStyle};
      }
    `}</style>
  </>
);

export default App;
