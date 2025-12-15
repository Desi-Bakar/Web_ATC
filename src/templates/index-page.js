import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import HeroCarousel from "../components/HeroCarousel";
import BlogRoll from "../components/BlogRoll";

export const IndexPageTemplate = ({
  title,
  subheading,
  description,
  intro,
  main,
  image,
}) => {
  return (
    <div>
      {/* Hero Carousel */}
      <HeroCarousel />

      <section className="section section--gradient">
        <div className="container">
          <div className="section">

            {/* Title */}
            <div className="columns">
              <div className="column is-12">
                <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
                  {title}
                </h1>
                {subheading && (
                  <h3 className="subtitle is-size-4 mt-2">{subheading}</h3>
                )}
              </div>
            </div>

            {/* Description */}
            <div className="columns">
              <div className="column is-12">
                <p>{description}</p>
              </div>
            </div>

            {/* INTRO SECTION */}
            {intro?.blurbs?.length > 0 && (
              <div className="columns is-multiline mt-4">
                {intro.blurbs.map((item, index) => (
                  <div className="column is-6" key={index}>
                    <div className="box">
                      {item.image && (
                        <figure className="image">
                          <img src={item.image} alt="" />
                        </figure>
                      )}
                      <p className="mt-2">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* MAIN SECTION */}
            {main && (
              <div className="section mt-6">
                <h2 className="title is-size-3 has-text-weight-bold">
                  {main.heading}
                </h2>
                <p className="mb-4">{main.description}</p>

                <div className="columns">
                  <div className="column is-6"></div>
                  <div className="column is-6"></div>
                </div>
              </div>
            )}

            {/* BLOG SECTION */}
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold">Blog</h2>

              <BlogRoll />

              <div className="has-text-centered" style={{ marginTop: "2rem" }}>
                <a className="btn" href="/blog">
                  Read more
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

IndexPageTemplate.propTypes = {
  title: PropTypes.string,
  subheading: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.arrayOf(
      PropTypes.shape({
        image: PropTypes.string,
        text: PropTypes.string,
      })
    ),
  }),
  main: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
  }),
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        title={frontmatter.title}
        subheading={frontmatter.subheading}
        description={frontmatter.description}
        image={frontmatter.image}
        intro={frontmatter.intro}
        main={frontmatter.main}
      />
    </Layout>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        subheading
        image
        description
        intro {
          blurbs {
            image
            text
          }
        }
        main {
          heading
          description
        }
      }
    }
  }
`;
