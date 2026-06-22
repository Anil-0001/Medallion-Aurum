/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images: {
    localPatterns: [
      {
        pathname: "/**",
        search: "",
      },
      {
        pathname: "/structslider/**",
        search: "?v=fresh-20260620",
      },
    ],
  },
  reactCompiler: true,
};

export default nextConfig;
