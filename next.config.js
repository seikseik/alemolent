const prismic = require("@prismicio/client");

const sm = require("./sm.json");
const path = require('path')


/** @type {import('next').NextConfig} */
const nextConfig = async () => {
  const client = prismic.createClient(sm.apiEndpoint);

  const repository = await client.getRepository();

  return {
    reactStrictMode: true,
    images: {
      loader: "imgix",
      path: "",
      domains: ["images.prismic.io"],
    }
  };
};
