/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  pathPrefix: "/portfolio",
  /* Your site meta data */
  siteMetadata: {
    title: "Sanu Dutta",
    siteUrl: "https://sanudutta45.github.io/portfolio/",
    description: "sanu's portfolio",
  },
  /* Your site config here */
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/assets/images/blockchainlogo.jfif",
      },
    },
    {
      resolve: "gatsby-plugin-webfonts",
      options: {
        fonts: {
          google: [
            {
              family: "Roboto",
              variants: ["100", "300", "400", "600", "700"],
            },
          ],
        },
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/assets/images`,
      },
    },
  ],
}
