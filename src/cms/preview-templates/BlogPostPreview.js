import React from "react"
import PropTypes from "prop-types"
import BlogPostTemplate from "../../templates/blog-post"

const BlogPostPreview = ({ entry, widgetFor }) => {
  const data = entry.get("data") || {}

  return (
    <BlogPostTemplate
      content={widgetFor("body")}
      description={data.get("description")}
      tags={data.get("tags") ? data.get("tags").toJS() : []}
      title={data.get("title")}
      featuredimage={data.get("featuredimage")} // amanin, bisa string
      helmet={null} // preview ga butuh Helmet SEO
    />
  )
}

BlogPostPreview.propTypes = {
  entry: PropTypes.shape({
    get: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default BlogPostPreview
