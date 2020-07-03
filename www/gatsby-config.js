/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
module.exports = {
  siteMetadata: {},
  plugins: [
    // Allow querying of src files via graphql
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/markdown`,
      },
    },

    // Include webfonts
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Open Sans:400', 'Roboto:400'],
        },
      },
    },

    // Sass support
    `gatsby-plugin-sass`,

    // Allows absolute imports
    'gatsby-plugin-root-import',

    // Markdown support
    `gatsby-transformer-remark`,

    // Format <code> blocks in markdown
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: 'language-',
            },
          },
        ],
      },
    },

    // Support markdown with mixed react (*.mdx)
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        // Enable formatting <code> blocks in mdx
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              classPrefix: 'language-',
            },
          },
        ],
      },
    },
  ],
};
