require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
  siteMetadata: {
    title: "Fan2be",
    author: {
      name: `Pedro Silva and David Candreva`,
      summary: `Web Developer`,
    },
    description: `A starter blog for Fan2be.`,
    siteUrl: `https://gatsbystarterblogsource.gatsbyjs.io/`,
    social: { twitter: `Fan2be` },
  },
  pathPrefix: "/gatsby",
  plugins: [
    "gatsby-plugin-fontawesome-css",
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-sass",
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          { resolve: `gatsby-remark-images` },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts-v2`,
      options: {
        fonts: [
          { family: 'Inter',  weights: ['400 .. 700'] },
          { family: 'Roboto', weights: ['400 .. 700'] }
        ],
      }
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "Drupal",
        fieldName: "drupal",
        //url: `${process.env.GATSBY_API_URL}`,
        url: process.env.DRUPAL_URL,
        //headers: {
        //  "Authorization": `Bearer ${process.env.GATSBY_API_TOKEN}`
        //}
        //  refetchInterval: 30,
      },
    },
  ],
};
