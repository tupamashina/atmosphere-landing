import { Open_Sans } from 'next/font/google';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Top } from '@/components/Top';

import type { AppProps } from 'next/app';
import type { FC } from 'react';

import 'modern-normalize/modern-normalize.css';
import '@/styles/global.css';

const title = 'Преобразуем энергию в экономию';

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

const App: FC<AppProps> = ({ Component, pageProps }) => {
  const { pathname } = useRouter();
  const isIndex = pathname === '/';

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta
          name="format-detection"
          content="telephone=no, date=no, email=no, address=no"
        />

        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.webmanifest" />

        <title>{title}</title>
        <meta key="titleMeta" name="title" content={title} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://atm-itp.ru/" />
        <meta property="og:title" content={title} />

        <meta property="twitter:url" content="https://atm-itp.ru/" />
        <meta property="twitter:title" content={title} />
      </Head>

      {isIndex && <Header />}
      {isIndex && <Top />}
      <Component {...pageProps} />
      {isIndex && <Footer />}

      {/* eslint-disable-next-line react/no-unknown-property */}
      <style jsx global>{`
        :root {
          font-family: ${font.style.fontFamily};
          font-style: ${font.style.fontStyle};
        }
      `}</style>
    </>
  );
};

export default App;
