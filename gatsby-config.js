const path = require("path")

module.exports = {
  pathPrefix: "/rumcajs",
  siteMetadata: {
    title: `Rumcajs`,
    description: `Wynajem autokarów, autobusów i busów. Biuro turystyczne, przewóz osób oraz wycieczki w miejscowości Jasło.`,
    author: `@ashylen`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-theme-material-ui`,
    },
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        stylesProvider: {
          injectFirst: true,
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Rumcajs`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#CF2B27`,
        theme_color: `#CF2B27`,
        display: `minimal-ui`,
        icon: `src/images/favicon.jpg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        pagesStyles: path.join(__dirname, "src/pagesStyles"),
        assets: path.join(__dirname, "src/assets"),
        components: path.join(__dirname, "src/components"),
        pages: path.join(__dirname, "src/pages"),
        templates: path.join(__dirname, "src/templates"),
        views: path.join(__dirname, "src/views"),
        utils: path.join(__dirname, "src/utils"),
        src: path.join(__dirname, "src"),
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: true,
      },
    },
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true, // defaults to false
        jsxPragma: `jsx`, // defaults to "React"
        allExtensions: true, // defaults to false
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
