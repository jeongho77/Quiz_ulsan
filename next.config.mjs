const debug = process.env.NODE_ENV !== "production";
const repository = "https://jeongho77.github.io/Quiz_ulsan/quiz/";

const nextConfig = {
  basePath: '/quiz',
  assetPrefix: debug ? "" : repository,
  reactStrictMode: true,
  
  trailingSlash: true,
  experimental: {
    reactRoot: true
  },
  
  // Add output: export to enable static export
  output: {
    export: true
  }
};

export const prefix = debug ? "" : repository;

export default nextConfig;
