import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";

const BlogPostTemplate = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <section className="section">
        <div className="container content">

          {/* Title */}
          <h1 className="title is-size-2">
            {post.frontmatter.title}
          </h1>

          {/* Featured Image */}
          {post.frontmatter.featuredimage && (
            <img
              src={post.frontmatter.featuredimage}
              alt={post.frontmatter.title}
              style={{
                width: "100%",
                borderRadius: "10px",
                marginBottom: "20px",
              }}
            />
          )}

          {/* Description */}
          <p className="subtitle">
            {post.frontmatter.description}
          </p>

          {/* Blog Body */}
          <div
            dangerouslySetInnerHTML={{ __html: post.html }}
          />

        </div>
      </section>
    </Layout>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        description
        featuredimage
        date(formatString: "YYYY-MM-DD")
        tags
      }
    }
  }
`;
