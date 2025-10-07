module.exports = {
  siteMetadata: {
    title: "Areta Training Center",
    description:
      " Areta Training Center tempat kamu untuk Meningkatkan Skill, Areta Training Center hadir sebagai tempat terbaik untuk belajar IT, Jaringan, dan Digital Marketing,  Areta Training Center merupakan lembaga kursus dan pelatihan yang berfokus pada dunia IT dan Bisnis Digital.",
    url: "https://aretatrainingcenter.biz.id",
    },
     keywords: [
      "Kampus IT Tangerang", 
      "Kampus IT Tangerang Selatan",
      "Kampus IT Tangerang Kabupaten",
      "Kampus IT Terdekat",
      "Kampus IT Terdekat dari lokasi saya", 
      "kampus full praktek", 
      "kampus bisnis digital", 
      "Kampus digital marketing", 
      "Kuliah IT Tangerang",
      "Kuliah Jurusan Teknik Informatika",
       "Jurusan Teknik Informatika", 
      "Areta Informatics College", 
      "full praktek", 
      "Jurusan Teknik Informatika", 
      "Pelatihan Jaringan Tangerang", 
       "Ahli Jaringan", 
      "Pelatihan IT", 
      "Pelatihan Jaringan Komputer", 
      "Mikrotik Training Seminar", 
      "MikroTik Certified Network Associate", 
      "Mikrotik Full Praktek", 
      "MikroTik Tangerang", 
     ],
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
      // keep as first gatsby-source-filesystem plugin for gatsby image support
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
          'gatsby-remark-relative-images',
          {
            resolve: "gatsby-remark-images",
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
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
      resolve: "gatsby-plugin-purgecss", // purges all unused/unreferenced css rules
      options: {
        develop: true, // Activates purging in npm run develop
        purgeOnly: ['/bulma-style.sass'], // applies purging only on the bulma css file
        printRejected: true,
      },
    }, // must be after other CSS plugins
    "gatsby-plugin-netlify", // make sure to keep it last in the array
  ],
};
