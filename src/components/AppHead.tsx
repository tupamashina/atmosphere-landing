import Head from 'next/head';

import type { FC } from 'react';

export const AppHead: FC = () => (
  <Head>
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <title>dr.</title>
    <link rel="icon" href="/favicon.ico" sizes="any" />
  </Head>
);
