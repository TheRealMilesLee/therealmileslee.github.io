// next.config.ts
import type { NextConfig } from 'next';

const isGithubPages = process.env.GITHUB_ACTIONS === 'true';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: isGithubPages ? '/therealmileslee.github.io' : '',
  assetPrefix: isGithubPages ? '/therealmileslee.github.io/' : '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
