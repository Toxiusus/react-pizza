import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = (props) => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="135" cy="156" r="125" />
    <rect x="0" y="296" rx="10" ry="10" width="280" height="23" />
    <rect x="0" y="333" rx="10" ry="10" width="280" height="88" />
    <rect x="1" y="440" rx="10" ry="10" width="95" height="30" />
    <rect x="128" y="434" rx="25" ry="25" width="152" height="45" />
  </ContentLoader>
);

export default Skeleton;
