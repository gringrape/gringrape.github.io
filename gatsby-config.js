module.exports = {
  jsxRuntime: 'automatic',
  siteMetadata: {
    title: 'Jin\'s log',
    siteUrl: 'https://www.yourdomain.tld',
  },
  plugins: ['gatsby-plugin-styled-components', 'gatsby-plugin-mdx', {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'pages',
      path: './docs/',
    },
    __key: 'pages',
  },
  'gatsby-transformer-remark',
  ],
};
