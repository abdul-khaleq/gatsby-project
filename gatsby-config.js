module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "gatsby-project",
  },
  plugins: [{
    resolve: `gatsby-plugin-google-fonts`,
    options: {
      fonts: [
        `Beth+Ellen`,
      ],
      display: 'swap'
    }
  }],
};
