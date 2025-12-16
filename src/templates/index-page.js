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
    <>
      {/* =====================
          STYLE LANGSUNG
      ====================== */}
      <style>{`
        .intro-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 2rem;
          margin-top: 3rem;
        }

        .intro-card {
          height: 100%;
        }

        .intro-image {
          display: flex;
          justify-content: center;
          margin-bottom: 1rem;
        }

        .intro-image img {
          width: 160px;
          height: 160px;
          object-fit: cover;
          border-radius: 6px;
        }

        .intro-content p {
          font-size: 0.95rem;
          line-height: 1.6;
        }

        .join-btn {
          background-color: #ff7a00;
          color: #fff;
          padding: 0.7rem 1.6rem;
          border-radius: 999px;
          font-weight: 600;
          font-size: 0.9rem;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .join-btn:hover {
          background-color: #e56e00;
          color: #fff;
        }

        /* HP kecil → 1 kolom */
        @media (max-width: 420px) {
          .intro-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div>
        {/* HERO */}
        <HeroCarousel />

        <section className="section section--gradient">
          <div className="container">
            <div className="section">

              {/* TITLE */}
              <h1 className="title is-size-2 has-text-weight-bold">
                {title}
              </h1>

              {subheading && (
                <h3 className="subtitle is-size-4 mt-2">
                  {subheading}
                </h3>
              )}

              {/* DESCRIPTION */}
              <p className="mt-4">{description}</p>

              {/* MAIN */}
              {main && (
                <div className="mt-6">
                  <h2 className="title is-size-3 has-text-weight-bold">
                    {main.heading}
                  </h2>
                  <p>{main.description}</p>
                </div>
              )}

              {/* CARD ATAS */}
              {intro?.blurbs?.length > 0 && (
                <div className="intro-grid">
                  {intro.blurbs.map((item, index) => (
                    <div key={index} className="box intro-card">
                      {item.image && (
                        <div className="intro-image">
                          <img src={item.image} alt="" />
                        </div>
                      )}
                      <div className="intro-content">
                        <p>{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* JOIN SEKARANG (JARAK SUDAH DITAMBAH) */}
              <div
                className="has-text-centered"
                style={{
                  marginTop: "4rem",
                  marginBottom: "6rem",
                }}
              >
                <a
                  href="https://wa.me/6281285234904?text=Halo%20saya%20ingin%20join%20training"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="join-btn"
                >
                  Join Sekarang
                </a>
              </div>

              {/* BLOG */}
              <div className="section">
                <h2 className="title is-size-3 has-text-weight-bold">
                  Blog
                </h2>

                <BlogRoll />

                {/* READ MORE */}
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
    </>
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
`;
