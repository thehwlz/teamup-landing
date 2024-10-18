import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n.js');

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "npx serve@latest out",
  images: { unoptimized: true },
};

export default withNextIntl(nextConfig);
