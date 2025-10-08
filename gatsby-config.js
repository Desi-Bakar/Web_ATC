module.exports = {
  siteMetadata: {
    title: "Areta Training Center",
    description:
      "Areta Training Center tempat kamu untuk Meningkatkan Skill, Areta Training Center hadir sebagai tempat terbaik untuk belajar IT, Jaringan, dan Digital Marketing, Areta Training Center merupakan lembaga kursus dan pelatihan yang berfokus pada dunia IT dan Bisnis Digital.",
    siteUrl: "https://aretatrainingcenter.space", // ✅ Ganti 'url' jadi 'siteUrl'
    author:"",

   keywords: "Pelatihan CorelDRAW, Pelatihan CorelDRAW untuk Pemula, Pelatihan Desain Grafis, Pelatihan CorelDRAW Dasar, Pelatihan Desain Grafis dari Dasar, Pelatihan CorelDRAW Mahir, Pelatihan CorelDRAW Online, Pelatihan CorelDRAW Offline, Pelatihan Desain Grafis Pemula, Pelatihan CorelDRAW Bersertifikat, Pelatihan Web Standard, Pelatihan Web untuk Pemula, Pelatihan HTML Dasar, Pelatihan CSS Dasar, Pelatihan JavaScript Dasar, Pelatihan Web Development Pemula, Pelatihan Frontend Web Standard, Pelatihan Membuat Website, Pelatihan Coding Web Pemula, Pelatihan Dasar Web Programming, Pelatihan Mikrotik, Pelatihan Mikrotik untuk Pemula, Pelatihan Mikrotik Dasar, Pelatihan Jaringan Mikrotik, Pelatihan Mikrotik SMK, Pelatihan Mikrotik Mahasiswa, Pelatihan Mikrotik untuk Siswa, Pelatihan Mikrotik Online, Pelatihan Mikrotik Offline, Pelatihan Mikrotik Indonesia, Pelatihan AutoCAD Advance, Pelatihan AutoCAD Tingkat Lanjut, Pelatihan AutoCAD Advance untuk Profesional, Pelatihan AutoCAD Advance Bersertifikat, Pelatihan AutoCAD Advance Teknik Sipil, Pelatihan AutoCAD Advance Arsitektur, Pelatihan AutoCAD Advance Desain 2D dan 3D, Pelatihan AutoCAD Advance Online, Pelatihan AutoCAD Advance untuk Industri, Pelatihan AutoCAD Advance dengan Studi Kasus, Pelatihan Hacking, Pelatihan Ethical Hacking, Pelatihan Keamanan Jaringan, Pelatihan Cyber Security, Pelatihan Keamanan Informasi, Pelatihan Hacking Dasar, Pelatihan Security untuk Pemula, Pelatihan Hacking dan Security, Pelatihan Sistem Keamanan, Pelatihan Hacker Etis, Pelatihan MySQL Administrator, Pelatihan MySQL Administrator untuk Pemula, Pelatihan MySQL Administrator Online, Pelatihan MySQL Administrator Bersertifikat, Pelatihan MySQL Administrator Profesional, Pelatihan MySQL Administrator dan Manajemen Database, Pelatihan MySQL Administrator untuk Admin Server, Pelatihan MySQL Administrator Tingkat Lanjut, Pelatihan MySQL Administrator dan Optimasi Query, Pelatihan MySQL Administrator dan Keamanan Database, Kursus Cloud Computing dan Virtualisasi Server, Pelatihan Cloud Computing untuk Pemula, Training Cloud Engineer & Virtualisasi, Kursus Administrasi Server Berbasis Cloud, Pelatihan Manajemen Server Virtual, Kursus Proxmox dan Teknologi Cloud, Training Virtual Machine dengan KVM & OpenVZ, Kursus High Availability Server dan Cluster, Pelatihan Backup & Restore Sistem Cloud, Kursus Sertifikasi Cloud Computing Profesional, Pelatihan Macromedia Flash, Pelatihan Flash untuk Pemula, Pelatihan Animasi Interaktif, Pelatihan Flash Dasar, Pelatihan Animasi Dasar, Pelatihan Desain Animasi, Pelatihan Multimedia Interaktif, Pelatihan Macromedia Flash Pemula, Pelatihan Membuat Animasi, Pelatihan Flash Profesional, Pelatihan Adobe Illustrator, Pelatihan Adobe Illustrator untuk Pemula, Pelatihan Desain Grafis dengan Adobe Illustrator, Pelatihan Ilustrasi Digital Adobe Illustrator, Pelatihan Vektor Adobe Illustrator, Pelatihan Adobe Illustrator Online, Pelatihan Adobe Illustrator Bersertifikat, Pelatihan Logo dengan Adobe Illustrator, Pelatihan Kreatif Adobe Illustrator, Pelatihan Profesional Adobe Illustrator, Gatsby, Gatsby JS, Gatsby Framework, Gatsby Website, Gatsby Static Site Generator, Gatsby untuk Pemula, Gatsby Developer Guide, Gatsby Starter, Gatsby Blog, Gatsby Tutorial, AI Generate Content, Konten AI, Content Creation AI, Generasi Konten AI, AI Content Creator, Teknologi AI, Konten Otomatis dengan AI, AI dalam Kreativitas, AI for Marketing, AI Driven Content, Materi Pengenalan Pemrograman, Materi Dasar Pemrograman, Materi Pemrograman Komputer, Materi Coding untuk Pemula, Materi Belajar Pemrograman, Materi Pemrograman Dasar, Materi Logika Pemrograman, Materi Bahasa Pemrograman, Materi Algoritma Pemrograman, Materi Pemrograman untuk Siswa, FrontendDeveloper, FrontendDevelopment, BelajarFrontend, PelatihanFrontend, FrontendBootcamp, FrontendTraining, FrontendSkills, FrontendWeb, FrontendIndonesia, FrontendCareer, Pelatihan Adobe Photoshop, Pelatihan Photoshop Dasar, Pelatihan Editing Foto, Pelatihan Desain Grafis, Pelatihan Photoshop untuk Pemula, Pelatihan Software Desain, Pelatihan Teknik Editing, Pelatihan Gambar Digital, Pelatihan Editing Gambar, Pelatihan Photoshop Online, Pelatihan Cloud Computing, Pelatihan AWS, Manajemen Proyek, Rekayasa Perangkat Lunak, Project Management, Software Engineering, Tim Pengembang, Manajemen Tim IT, Keamanan, Jaringan AAA Server, Infrastruktur Jaringan, Mikrotik, Cisco, Infrastruktur Jaringan",
  
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
