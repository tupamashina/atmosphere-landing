// @ts-check

import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin';

const withVanillaExtract = createVanillaExtractPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: { locales: ['ru-RU'], defaultLocale: 'ru-RU' },
};

export default withVanillaExtract(nextConfig);
