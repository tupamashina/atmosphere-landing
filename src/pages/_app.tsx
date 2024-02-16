import { AppHead } from '@/components/AppHead';

import type { AppProps } from 'next/app';
import type { FC } from 'react';

import 'modern-normalize';
import '@/styles/global.css';

const App: FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <AppHead />
    <Component {...pageProps} />
  </>
);

export default App;
