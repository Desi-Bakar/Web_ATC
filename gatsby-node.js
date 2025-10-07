const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");
const _ = require("lodash");

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              tags
              templateKey
            }
          }
        }
      }
    }
  `);

  // 🔹 Tangani error GraphQL dengan reporter bawaan Gatsby (lebih aman)
  if (result.errors) {
    reporter.panicOnBuild("❌ Error while running GraphQL query.", result.errors);
    return;
  }

  const posts = result.data.allMarkdownRemark.edges;

  // 🔹 Generate halaman untuk setiap post
  posts.forEach(({ node }) => {
    const id = node.id;
    const template = node.frontmatter.templateKey
      ? path.resolve(`src/templates/${String(node.frontmatter.templateKey)}.js`)
      : path.resolve("src/templates/blog-post.js");

    createPage({
      path: node.fields.slug,
      component: template,
      context: { id },
    });
  });

  // 🔹 Generate halaman tag unik
  const tags = _.uniq(
    _.flatMap(posts, (edge) => edge.node.frontmatter.tags || [])
  );

  tags.forEach((tag) => {
    createPage({
      path: `/tags/${_.kebabCase(tag)}/`,
      component: path.resolve("src/templates/tags.js"),
      context: { tag },
    });
  });
};

// 🔹 Buat slug otomatis untuk setiap file markdown
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === "MarkdownRemark") {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: "slug",
      node,
      value,
    });
  }
};

// 🔹 Tambahkan fix agar warning Decap CMS hilang
exports.onCreateWebpackConfig = ({ stage, actions, getConfig }) => {
  const config = getConfig();

  config.ignoreWarnings = [
    {
      module: /gatsby-plugin-decap-cms/,
      message: /Critical dependency/,
    },
  ];

  config.resolve = {
    ...config.resolve,
    fallback: { fs: false },
  };

  actions.replaceWebpackConfig(config);
};
