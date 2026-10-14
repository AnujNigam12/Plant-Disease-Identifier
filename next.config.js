const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx", "js", "mjs", "jsx", "md", "mdx"],
  reactStrictMode: true,
  images: {
    unoptimized: true, // <-- ye add karo
    domains: ["plant-id.ams3.cdn.digitaloceanspaces.com"],
  },
  output: "export",
}

module.exports = withMDX(nextConfig)
