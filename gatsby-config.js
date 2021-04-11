module.exports = {
  siteMetadata: {
    title: `Golden Health & Fitness Blog`,
    description: `Kickstart your journey to fitness and physical pride with this simple, interactive blog.`,
<<<<<<< HEAD
    keywords: `"fitness trainer", "fitness blog"`,
=======
    keywords: ``,
>>>>>>> 2fc743038e36c42dd787fbe8c4aaf049f4f09a93
    siteUrl: `localhost:8000`,
    author: `Lily Gold`,
    social: {
      instagram: `li_goldie`,
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`,
      },
    },
<<<<<<< HEAD
=======
    `gatsby-transformer-sharp`,
    `gatsby-transformer-yaml`,
>>>>>>> 2fc743038e36c42dd787fbe8c4aaf049f4f09a93
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-yaml`,
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.md', '.mdx'],
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1000,
<<<<<<< HEAD
              showCaptions: true
=======
>>>>>>> 2fc743038e36c42dd787fbe8c4aaf049f4f09a93
            }
          }
        ]
      },
    },
    `gatsby-remark-reading-time`,
    {
<<<<<<< HEAD
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Golden Health & Fitness`,
        short_name: `GHF`,
        start_url: `/`,
        background_color: `hsl(227,2%,12%)`,
        theme_color: `#d4af37`,
        display: `standalone`,
        icon: `src/images/BG Main.png`, // This path is relative to the root of the site.
        cache_busting_mode: `none`, 
      },
    },
    {
      resolve: 'gatsby-plugin-offline',
      options: {
         workboxConfig: {
            globPatterns: ['src/images/BG Main.png'],
            globDirectory: "public",
         },
=======
      resolve: require.resolve(`gatsby-plugin-load-script`),
      options: {
        id: "s9-sdk",
        async: true,
        defer: true,
        content: "ed1bd24b4cf445ce81a0943c435579a2",
        src: "//cdn.social9.com/js/socialshare.min.js"
      },
    },
    `gatsby-remark-reading-time`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `spartan\:300,400,400i,700`,
          `khula\:400` 
        ],
        display: 'swap' //It lets the page render the default font while the imported font loads
      },
    },
    {
      resolve: `gatsby-plugin-social9-comment`,
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Golden Health & Fitness`,
        short_name: `GHF`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/BG Main.png`, // This path is relative to the root of the site.
        legacy: false,
        cache_busting_mode: `query`,
        theme_color_in_head: false,
        icons: [
        {
        src: `/favicons/android-chrome-192x192.png`,
        sizes: `192x192`,
        type: `image/png`,
        },
        {
        src: `/favicons/android-chrome-512x512.png`,
        sizes: `512x512`,
        type: `image/png`,
        },
        ], 
      },
    },
    {
      resolve: 'gatsby-plugin-offline',
      options: {
         workboxConfig: {
            globPatterns: ['src/images/BG Main.png']
         }
>>>>>>> 2fc743038e36c42dd787fbe8c4aaf049f4f09a93
      },
    },
  //  {
  //   resolve: `gatsby-plugin-google-analytics`,
  //   options: {
  //     // The property ID; the tracking code won't be generated without it; I need to host the site first
  //     trackingId: "YOUR_GOOGLE_ANALYTICS_TRACKING_ID",
  //     // Defines where to place the tracking script - `true` in the head and `false` in the body
  //     head: false,
  //     // Setting this parameter is optional
  //     anonymize: true,
  //     // Setting this parameter is also optional
  //     respectDNT: true,
  //     // Avoids sending pageview hits from custom paths
  //     exclude: ["/preview/**", "/do-not-track/me/too/"],
  //     // Delays sending pageview hits on route update (in milliseconds)
  //     pageTransitionDelay: 0,
  //     // Enables Google Optimize using your container Id
  //     optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
  //     // Enables Google Optimize Experiment ID
  //     experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
  //     // Set Variation ID. 0 for original 1,2,3....
  //     variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID",
  //     // Defers execution of google analytics script after page load
  //     defer: false,
  //     // Any additional optional fields
  //     sampleRate: 5,
  //     siteSpeedSampleRate: 10,
  //     cookieDomain: "example.com",
  //   },
  // },
  ],
  mapping: {
    "MarkdownRemark.frontmatter.author": `AuthorYaml`,
  },
};
