import React from "react";
import PropTypes from "prop-types";
import { Link, graphql, StaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const BlogRollTemplate = ({ data }) => {
  const posts = data.allMarkdownRemark.edges;

  return (
    <div className="columns is-multiline is-variable is-4">
      {posts.map(({ node: post }) => {
        const fm = post.frontmatter;
        const fmImg = fm?.featuredimage;

        // SAFE IMAGE HANDLING
        const gatsbyImg =
          fmImg && fmImg.childImageSharp ? getImage(fmImg) : null;

        const fallbackImg =
          fmImg?.publicURL ||
          (typeof fmImg === "string" ? fmImg : null);

        return (
          <div className="column is-6" key={post.id}>
            <article
              className="box blog-card is-flex is-flex-direction-column is-justify-space-between"
              style={{ height: "100%" }}
            >
              <div>
                {/* FEATURED IMAGE */}
                {gatsbyImg && (
                  <div className="featured-thumbnail mb-4">
                    <GatsbyImage
                      image={gatsbyImg}
                      alt={fm.title || "Blog image"}
                    />
                  </div>
                )}

                {!gatsbyImg && fallbackImg && (
                  <div className="featured-thumbnail mb-4">
                    <img
                      src={fallbackImg}
                      alt={fm.title || "Blog image"}
                      style={{ width: "100%", height: "auto" }}
                    />
                  </div>
                )}

                {/* HEADER */}
                <header>
                  <p className="post-meta">
                    <Link
                      className="title has-text-primary is-size-4"
                      to={post.fields.slug}
                    >
                      {fm.title}
                    </Link>
                    <br />
                    <span className="subtitle is-size-6 has-text-grey">
                      {fm.date}
                    </span>
                  </p>
                </header>

                <p className="mt-3">{post.excerpt}</p>
              </div>

              {/* BUTTON */}
              <div className="mt-4">
                <Link
                  className="button is-small has-background-white has-text-link"
                  to={post.fields.slug}
                >
                  Keep Reading →
                </Link>
              </div>
            </article>
          </div>
        );
      })}
    </div>
  );
};

BlogRollTemplate.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.object,
  }),
};

export default function BlogRoll() {
  return (
    <StaticQuery
      query={graphql`
        query BlogRollQuery {
          allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
          ) {
            edges {
              node {
                id
                excerpt(pruneLength: 400)
                fields {
                  slug
                }
                frontmatter {
                  title
                  date(formatString: "MMMM DD, YYYY")

                  # FIX: featuredimage boleh string / publicURL / childImageSharp
                  featuredimage
                }
              }
            }
          }
        }
      `}
      render={(data) => <BlogRollTemplate data={data} />}
    />
  );
}
