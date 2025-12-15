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

<<<<<<< HEAD
    // SOURCE DIRS
=======
    // ====== Sumber Gambar & File ======
>>>>>>> 29e6dbfe008eb4e357db06bd86b8e7d94887fe42
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/static/img`,
        name: "uploads",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/img`,
        name: "images",
      },
    },

<<<<<<< HEAD
    // IMAGE TOOLS
=======
    // ====== BLOG MARKDOWN (yang kamu minta ditambahkan) ======
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/src/pages/blog/`,
      },
    },
    `gatsby-transformer-remark`,

    // ====== IMAGE PROCESSOR ======
>>>>>>> 29e6dbfe008eb4e357db06bd86b8e7d94887fe42
    `gatsby-plugin-image`,
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",

<<<<<<< HEAD
    // Markdown Remark dengan plugin baru
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-relative-images-v2`,
            options: {
              name: "uploads",
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 2048,
            },
          },
          {
            resolve: `gatsby-remark-copy-linked-files`,
            options: {
              destinationDir: "static",
            },
          },
        ],
      },
    },

    // CMS
=======
    // ====== CMS ======
>>>>>>> 29e6dbfe008eb4e357db06bd86b8e7d94887fe42
    {
      resolve: "gatsby-plugin-decap-cms",
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },

<<<<<<< HEAD
    // PurgeCSS
=======
    // ====== Purge CSS ======
>>>>>>> 29e6dbfe008eb4e357db06bd86b8e7d94887fe42
    {
      resolve: "gatsby-plugin-purgecss",
      options: {
        develop: true,
        purgeOnly: ["/bulma-style.sass"],
        printRejected: true,
      },
    },

    // Sitemap
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/sitemap.xml`,
        createLinkInHead: true,
      },
    },

    "gatsby-plugin-netlify",
  ],
};
