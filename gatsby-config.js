module.exports = {
  siteMetadata: {
    title: "Areta Training Center",
    description:
      "Areta Training Center tempat kamu untuk Meningkatkan Skill, Areta Training Center hadir sebagai tempat terbaik untuk belajar IT, Jaringan, dan Digital Marketing, Areta Training Center merupakan lembaga kursus dan pelatihan yang berfokus pada dunia IT dan Bisnis Digital.",
    siteUrl: "https://aretatrainingcenter.space",
    author: "Areta Training Center",

    keywords: [
      "Training Mikrotik",
      "Pelatihan Mikrotik",
      "Kursus Mikrotik",
      "Sertifikasi Mikrotik",
      "Belajar Mikrotik",
      "Mikrotik Indonesia",
      "Jaringan Komputer",
      "Network Engineering",
      "Training Networking",
      "Pelatihan IT",
      "RouterOS",
      "Teknologi Jaringan",
      "Mikrotik Tangerang",
    ],
  },

  plugins: [
    "gatsby-plugin-react-helmet",

    {
      resolve: "gatsby-plugin-sass",
      options: {
        sassOptions: {
          indentedSyntax: true,
        },
      },
    },

    // Uploads folder
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/static/img`,
        name: "uploads",
      },
    },

    // Pages folder
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages",
      },
    },

    // Images folder
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/img`,
        name: "images",
      },
    },

    `gatsby-plugin-image`,
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",

    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 2048,
            },
          },
          {
            resolve: "gatsby-remark-copy-linked-files",
            options: {
              destinationDir: "static",
            },
          },
        ],
      },
    },

    {
      resolve: "gatsby-plugin-decap-cms",
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },

    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/sitemap.xml`,
        createLinkInHead: true,
        serialize: ({ site, allSitePage }) =>
          allSitePage.nodes.map((node) => ({
            url: `${site.siteMetadata.siteUrl}${node.path}`,
            changefreq: `weekly`,
            priority: 0.7,
          })),
      },
    },

    "gatsby-plugin-netlify",
  ],
};
