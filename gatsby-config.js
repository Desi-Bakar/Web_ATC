module.exports = {
  siteMetadata: {
    title: "Areta Training Center",
    description:
      "Areta Training Center tempat kamu untuk Meningkatkan Skill, Areta Training Center hadir sebagai tempat terbaik untuk belajar IT, Jaringan, dan Digital Marketing, Areta Training Center merupakan lembaga kursus dan pelatihan yang berfokus pada dunia IT dan Bisnis Digital.",
    siteUrl: "https://aretatrainingcenter.space", // ✅ Ganti 'url' jadi 'siteUrl'
    author:"",

   keywords: [
  "Pelatihan CorelDRAW",
  "Pelatihan CorelDRAW untuk Pemula",
  "Pelatihan Desain Grafis",
  "Pelatihan CorelDRAW Dasar",
  "Pelatihan Desain Grafis dari Dasar",
  "Pelatihan CorelDRAW Mahir",
  "Pelatihan CorelDRAW Online",
  "Pelatihan CorelDRAW Offline",
  "Pelatihan Desain Grafis Pemula",
  "Pelatihan CorelDRAW Bersertifikat",
  "Pelatihan Web Standard",
  "Pelatihan Web untuk Pemula",
  "Pelatihan HTML Dasar",
  "Pelatihan CSS Dasar",
  "Pelatihan JavaScript Dasar",
  "Pelatihan Web Development Pemula",
  "Pelatihan Frontend Web Standard",
  "Pelatihan Membuat Website",
  "Pelatihan Coding Web Pemula",
  "Pelatihan Dasar Web Programming",
  "Pelatihan Mikrotik",
  "Pelatihan Mikrotik untuk Pemula",
  "Pelatihan AutoCAD Advance",
  "Pelatihan Cyber Security",
  "Pelatihan MySQL Administrator",
  "Pelatihan Cloud Computing",
  "Pelatihan Adobe Photoshop",
  "Pelatihan Illustrator",
  "Manajemen Proyek",
  "Rekayasa Perangkat Lunak",
  "Frontend Development",
  "Gatsby",
  "Gatsby JS"
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
    `gatsby-plugin-sitemap`, // ✅ Sitemap plugin ditambahkan di sini
    "gatsby-plugin-netlify",
  ],
};
