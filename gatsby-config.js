module.exports = {
  siteMetadata: {
    title: "Areta Training Center",
    description:
      "Areta Training Center tempat kamu untuk Meningkatkan Skill, Areta Training Center hadir sebagai tempat terbaik untuk belajar IT, Jaringan, dan Digital Marketing, Areta Training Center merupakan lembaga kursus dan pelatihan yang berfokus pada dunia IT dan Bisnis Digital.",
    siteUrl: "https://aretatrainingcenter.space",
    author: "Areta Training Center",

    // ✅ Tambahkan daftar keyword utama untuk SEO dan sitemap
    keywords: [
      "Training Mikrotik Tangerang",
      "Training Mikrotik",
      "Mikrotik",
      "Training",
      "Pelatihan Mikrotik",
      "Kursus Mikrotik",
      "Belajar Jaringan Komputer",
      "Sertifikasi Mikrotik",
      "Pelatihan IT Tangerang",
      "Training Networking",
      "Kampus IT Tangerang",
      "Mikrotik Indonesia",
      "Network Engineering",
      "Belajar Mikrotik",
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
    `gatsby-plugin-image`,
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          "gatsby-remark-relative-images",
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
      resolve: "gatsby-plugin-purgecss",
      options: {
        develop: true,
        purgeOnly: ["/bulma-style.sass"],
        printRejected: true,
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
    "gatsby-plugin-netlify"
  ],
};
