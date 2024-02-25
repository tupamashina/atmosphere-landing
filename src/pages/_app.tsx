import { AppHead } from '@/components/AppHead';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';

import type { AppProps } from 'next/app';
import type { FC } from 'react';

import '@/styles/global.css';
import 'modern-normalize';

const App: FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <AppHead />

    <Header />
    <Component {...pageProps} />
    <Footer />
  </>
);

export default App;
