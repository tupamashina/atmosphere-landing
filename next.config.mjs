import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: { locales: ['ru-RU'], defaultLocale: 'ru-RU' },
};

export default createVanillaExtractPlugin()(nextConfig);
