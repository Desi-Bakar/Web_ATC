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
}) => {
  return (
    <div>
      {/* Hero Carousel */}
      <HeroCarousel />

      <section className="section section--gradient">
        <div className="container">
          <div className="section">

            {/* TITLE */}
            <div className="columns">
              <div className="column is-12">
                <h1 className="title is-size-2 has-text-weight-bold">
                  {title}
                </h1>
                {subheading && (
                  <h3 className="subtitle is-size-4 mt-2">{subheading}</h3>
                )}
              </div>
            </div>

            {/* DESCRIPTION */}
            <div className="columns">
              <div className="column is-12">
                <p>{description}</p>
              </div>
            </div>

             {/* MAIN SECTION */}
              {main && (
                <div className="columns mt-4">
                  <div className="column is-12">
                    <h2 className="title is-size-2 has-text-weight-bold">
                      {main.heading}
                    </h2>
                    <p>{main.description}</p>
                  </div>
                </div>
              )}


            {/* INTRO SECTION (CARD) */}
            {intro?.blurbs?.length > 0 && (
              <div className="columns is-multiline mt-5">
                {intro.blurbs.map((item, index) => (
                  <div className="column is-6" key={index}>
                    <div
                        className="box intro-card"
                        style={{
                        height: "100%",
                        width: "500px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        marginBottom:  "1rem",
                        flexDirection: "column",
                      }}
>

                     {item.image && (
                              <figure
                                style={{
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                  height: "200px",
                                  marginBottom: "1rem",
                                }}
                              >
                                <img
                                  src={item.image}
                                  alt=""
                                  style={{
                                    width: "180px",
                                    height: "180px",
                                    objectFit: "cover",
                                    borderRadius: "7px",
                                  }}
                                />
                              </figure>
                            )}


                      <div className="intro-content">
                        <p>{item.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

           

                            <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "1rem",
                  }}
                >
                  <a
                    href="https://wa.me/6281285234904?text=Halo%20saya%20ingin%20join%20training"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      backgroundColor: "#ff7a00",
                      color: "#fff",
                      padding: "0.6rem 1.4rem",
                      borderRadius: "999px",
                      fontWeight: "600",
                      fontSize: "0.9rem",
                      textDecoration: "none",
                      transition: "all 0.3s ease",
                    }}
                  >
                    Join Sekarang
                  </a>
                </div>


            {/* BLOG SECTION */}
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold">Blog</h2>

              <BlogRoll />

              <div className="has-text-centered mt-5">
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
`
;
