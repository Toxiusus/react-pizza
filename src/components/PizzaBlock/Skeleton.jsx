import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
  <ContentLoader 
    className="pizza-block"
    speed={2}
    width={280}
    height={465}
    viewBox="0 0 280 465"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="100" cy="100" r="100" /> 
    <rect x="0" y="211" rx="0" ry="0" width="209" height="29" /> 
    <rect x="0" y="253" rx="5" ry="5" width="209" height="59" /> 
    <rect x="0" y="324" rx="0" ry="0" width="94" height="29" /> 
    <rect x="113" y="320" rx="5" ry="5" width="92" height="39" />
  </ContentLoader>
)

export default Skeleton