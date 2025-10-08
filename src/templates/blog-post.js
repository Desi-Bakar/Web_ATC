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
  description,
  tags = [],
  title = "",
  helmet,
  featuredimage,
}) => {
  const PostContent = contentComponent || Content;

  // ✅ amanin: handle berbagai bentuk featuredimage
  const image =
    featuredimage && typeof featuredimage === "object"
      ? getImage(featuredimage)
      : null;

  return (
    <section className="section">
      {helmet || null}

      <div className="container content blog-post">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {title}
            </h1>

            {description && <p>{description}</p>}

            {image && (
              <div className="featured-image mb-4">
                <GatsbyImage
                  image={image}
                  alt={title || "Blog featured image"}
                />
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
  featuredimage: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
    PropTypes.oneOf([null]),
  ]),
};

BlogPostTemplate.defaultProps = {
  tags: [],
  title: "",
  description: "",
  featuredimage: null,
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

  const { frontmatter = {}, html } = post;
  const { title, description, tags, featuredimage } = frontmatter;

  return (
    <Layout>
      <BlogPostTemplate
        content={html}
        contentComponent={HTMLContent}
        description={description}
        title={title}
        tags={tags}
        featuredimage={featuredimage}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{title}</title>
            {description && (
              <meta name="description" content={description || ""} />
            )}
          </Helmet>
        }
      />
    </Layout>
  );
};

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      html: PropTypes.string,
      frontmatter: PropTypes.shape({
        title: PropTypes.string,
        description: PropTypes.string,
        tags: PropTypes.arrayOf(PropTypes.string),
        featuredimage: PropTypes.oneOfType([
          PropTypes.object,
          PropTypes.string,
          PropTypes.oneOf([null]),
        ]),
      }),
    }),
  }),
};

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
        featuredimage {
          childImageSharp {
            gatsbyImageData(width: 800, quality: 90, layout: CONSTRAINED)
          }
        }
      }
    }
  }
`;
