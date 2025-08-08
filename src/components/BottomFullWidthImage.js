import React from "react";
import PropTypes from "prop-types";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const BottomFullWidthImage = ({ image, title, imgPosition = "center" }) => {
  const img = getImage(image) || image;

  return (
    <section
      style={{
        margin: 0,
        padding: 0,
        backgroundColor: "#0057b8",
        lineHeight: 0, // hilangin jarak ekstra di bawah
      }}
    >
      {img ? (
        <GatsbyImage
          image={img}
          alt={title || ""}
          style={{
            width: "100%",
            height: "100%",
            margin: 0,
          }}
          imgStyle={{
            objectFit: "cover",
            objectPosition: imgPosition,
            margin: 0,
          }}
        />
      ) : (
        <div
          style={{
            backgroundColor: "#0057b8",
            height: "400px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            margin: 0,
          }}
        >
          No image available
        </div>
      )}
    </section>
  );
};

BottomFullWidthImage.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  imgPosition: PropTypes.string,
};

export default BottomFullWidthImage;
