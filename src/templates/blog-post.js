import React from "react";
import PropTypes from "prop-types";
import { kebabCase } from "lodash";
import { Helmet } from "react-helmet";
import { graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";

export const BlogPostTemplate = ({
  content,
  contentComponent,
  description = "",
  tags = [],
  title = "",
  helmet,
  featuredimage,
}) => {
  const PostContent = contentComponent || Content;

  // --- SAFE IMAGE HANDLING ---
  let image = null;
  let imageSharp = null;

  if (featuredimage) {
    // case: GraphQL object (correct)
    if (featuredimage.childImageSharp) {
      imageSharp = getImage(featuredimage);
    }
    // case: string path
    else if (typeof featuredimage === "string") {
      image = featuredimage;
    }
  }

  return (
    <section className="section blog-post">
      {helmet || null}

      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">

            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {title}
            </h1>

            {description && <p>{description}</p>}

            {/* FEATURED IMAGE */}
            {imageSharp && (
              <div className="featured-image mb-4">
                <GatsbyImage image={imageSharp} alt={title} />
              </div>
            )}

            {image && (
              <div className="featured-image mb-4">
                <img src={image} alt={title} />
              </div>
            )}

            <PostContent content={content} />

            {tags.length > 0 && (
              <div style={{ marginTop: "4rem" }}>
                <h4>Tags</h4>
                <ul className="taglist">
                  {tags.map((tag) => (
                    <li key={kebabCase(tag)}>
                      <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

          </div>
        </div>
      </div>
    </section>
  );
};

BlogPostTemplate.propTypes = {
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
  helmet: PropTypes.node,
  featuredimage: PropTypes.any,
};

const BlogPost = ({ data }) => {
  const post = data?.markdownRemark;

  if (!post) {
    return (
      <Layout>
        <div className="section">
          <div className="container">Loading...</div>
        </div>
      </Layout>
    );
  }

  const { frontmatter, html } = post;

  return (
    <Layout>
      <BlogPostTemplate
        content={html}
        contentComponent={HTMLContent}
        title={frontmatter.title}
        description={frontmatter.description}
        tags={frontmatter.tags || []}
        featuredimage={frontmatter.featuredimage}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{frontmatter.title}</title>
            {frontmatter.description && (
              <meta name="description" content={frontmatter.description} />
            )}
          </Helmet>
        }
      />
    </Layout>
  );
};

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        description
        tags
        featuredimage {
          childImageSharp {
            gatsbyImageData(width: 900, quality: 90, layout: CONSTRAINED)
          }
        }
      }
    }
  }
`;
