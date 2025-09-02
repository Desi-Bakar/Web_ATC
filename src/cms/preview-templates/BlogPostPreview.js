// src/cms/preview-templates/BlogPostPreview.js
import React from "react"
import PropTypes from "prop-types"
import BlogPostTemplate from "../../templates/blog-post"

const BlogPostPreview = ({ entry, widgetFor }) => {
  return (
    <BlogPostTemplate
      content={widgetFor("body")}
      description={entry.getIn(["data", "description"])}
      tags={entry.getIn(["data", "tags"])}
      title={entry.getIn(["data", "title"])}
      // 🚫 jangan kirim featuredimage biar gambar kanan ga muncul di preview
    />
  )
}

BlogPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default BlogPostPreview
