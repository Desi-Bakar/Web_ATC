import React from "react";
import PropTypes from "prop-types";
import { kebabCase } from "lodash";
import { Helmet } from "react-helmet";
import { graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import HeroCarousel from "../components/HeroCarousel";

export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet,
  featuredimage,
}) => {
  const PostContent = contentComponent || Content;
  const image = getImage(featuredimage);

  const imageList = [
    "/img/DESIGNN.png",
    "/img/DESIGNN1.png",
    "/img/aretanet.png",
  ];

  return (
    <section className="section">
      {helmet || ""}
      <HeroCarousel images={imageList} />

      <div className="container content blog-post">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {title}
            </h1>

            <p>{description}</p>

            {image && (
              <div className="featured-image mb-4">
                <GatsbyImage image={image} alt={title} />
              </div>
            )}

            <PostContent content={content} />

            {tags && tags.length > 0 && (
              <div style={{ marginTop: "4rem" }}>
                <h4>Tags</h4>
                <ul className="taglist">
                  {tags.map((tag) => (
                    <li key={`${tag}-tag`}>
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
  tags: PropTypes.array,
  helmet: PropTypes.object,
  featuredimage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
};

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        title={post.frontmatter.title}
        tags={post.frontmatter.tags}
        featuredimage={post.frontmatter.featuredimage}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{post.frontmatter.title}</title>
            <meta name="description" content={post.frontmatter.description} />
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
        tags: PropTypes.array,
        featuredimage: PropTypes.object,
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
