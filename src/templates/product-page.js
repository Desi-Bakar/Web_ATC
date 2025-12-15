import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
import Pricing from "../components/Pricing";
import HeroCarousel from "../components/HeroCarousel";

// Helper aman untuk semua tipe image
const getImageSrc = (img) => {
  if (!img) return null;

  if (img.childImageSharp) {
    const g = getImage(img);
    return g?.images?.fallback?.src || null;
  }

  return img.publicURL || (typeof img === "string" ? img : null);
};

export const ProductPageTemplate = ({
  image,
  title,
  heading,
  description,
  intro,
  main,
  testimonials,
  fullImage,
  pricing,
}) => {
  return (
    <div className="content">

      {/* HERO UTAMA */}
      <HeroCarousel
        images={[getImageSrc(image)].filter(Boolean)}
      />

      <section className="section section--gradient">
        <div className="container">
          <div className="section">

            <div className="columns">
              <div className="column is-7">
                <h3 className="has-text-weight-semibold is-size-2">
                  {heading}
                </h3>
                <p>{description}</p>
              </div>
            </div>

            {/* FEATURES */}
            <Features gridItems={intro?.blurbs || []} />

            {/* MAIN */}
            <div className="columns">
              <div className="column is-7">
                <h3 className="has-text-weight-semibold is-size-2">
                  {main?.heading}
                </h3>
                <p>{main?.description}</p>
              </div>
            </div>

            {/* MAIN IMAGES CAROUSEL */}
            <HeroCarousel
              images={[
                getImageSrc(main?.image1?.image),
                getImageSrc(main?.image2?.image),
                getImageSrc(main?.image3?.image),
              ].filter(Boolean)}
            />

            {/* TESTIMONIALS */}
            <Testimonials testimonials={testimonials || []} />

            {/* FULL IMAGE */}
            <HeroCarousel
              images={[getImageSrc(fullImage)].filter(Boolean)}
            />

            {/* PRICING */}
            <Pricing data={pricing} />

          </div>
        </div>
      </section>
    </div>
  );
};

ProductPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
  main: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    image1: PropTypes.object,
    image2: PropTypes.object,
    image3: PropTypes.object,
  }),
  testimonials: PropTypes.array,
  fullImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  pricing: PropTypes.object,
};

const ProductPage = ({ data }) => {
  const post = data.markdownRemark;

  return (
    <Layout>
      <ProductPageTemplate
        image={post.frontmatter.image}
        title={post.frontmatter.title}
        heading={post.frontmatter.heading}
        description={post.frontmatter.description}
        intro={post.frontmatter.intro}
        main={post.frontmatter.main}
        testimonials={post.frontmatter.testimonials}
        fullImage={post.frontmatter.full_image}
        pricing={post.frontmatter.pricing}
      />
    </Layout>
  );
};

export default ProductPage;

export const pageQuery = graphql`
  query ProductPageByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        image

        description
      }
    }
  }
`;
