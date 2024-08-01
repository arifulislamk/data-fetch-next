/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.themealdb.com",
        port: "",
        pathname: "/**",
      },
    ],
  },redirects : async () => {
    return [
      {
        source: "/us",
        destination: "/gallery",
        permanent: true,
      },
    ]
  }

};

export default nextConfig;
