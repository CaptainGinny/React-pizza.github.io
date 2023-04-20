import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
  <ContentLoader 
    className="pizza-block"
    speed={2}
    width={280}
    height={480}
    viewBox="0 0 280 480"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="152" y="103" rx="0" ry="0" width="2" height="0" /> 
    <circle cx="125" cy="125" r="125" /> 
    <rect x="0" y="279" rx="10" ry="10" width="280" height="25" /> 
    <rect x="0" y="319" rx="10" ry="10" width="280" height="88" /> 
    <rect x="0" y="435" rx="10" ry="10" width="95" height="30" /> 
    <rect x="129" y="432" rx="25" ry="25" width="152" height="45" />
  </ContentLoader>
)

export default Skeleton;
