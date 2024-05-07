/** @type {import('next').NextConfig} */
// module.exports
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/view/kw-idea', // 진입점
        destination: '/view/kw-idea/home', // rewrite 대상 페이지
      },
    ];
  },
};

// export default nextConfig;
module.exports = nextConfig;
