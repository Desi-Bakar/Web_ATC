import * as React from "react";
import PropTypes from "prop-types";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

const FeatureGrid = ({ gridItems }) => (
  <div className="columns is-multiline">
    {gridItems.map((item, index) => (
      <div key={index} className="column is-6">
        <div
          className="product-item"
          style={{
            border: "1px solid #eaeaea",
            borderRadius: "12px",
            padding: "1.5rem",
            boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
            background: "#fff",
            height: "100%",
            transition: "transform 0.2s",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "1rem",
            }}
          >
            <div style={{ width: "240px" }}>
              <PreviewCompatibleImage imageInfo={item} />
            </div>
          </div>

          <p
            className="has-text-weight-semibold"
            style={{ textAlign: "left", marginTop: "0.5rem" }}
          >
            {item.text}
          </p>
        </div>
      </div>
    ))}
  </div>
);

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
    })
  ),
};

export default FeatureGrid;
