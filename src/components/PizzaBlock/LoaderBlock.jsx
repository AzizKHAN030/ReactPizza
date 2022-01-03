import React from "react";
import ContentLoader from "react-content-loader";
function LoaderBlock() {
  return (
    <ContentLoader
      className="pizza-block"
      speed={1}
      width={280}
      height={460}
      viewBox="0 0 280 460"
      backgroundColor="#ededed"
      foregroundColor="#d4d4d4"
    >
      <circle cx="132" cy="132" r="132" />
      <rect x="0" y="278" rx="4" ry="4" width="280" height="21" />
      <rect x="0" y="308" rx="6" ry="6" width="280" height="84" />
      <rect x="0" y="413" rx="10" ry="10" width="106" height="37" />
      <rect x="137" y="408" rx="24" ry="24" width="140" height="43" />
    </ContentLoader>
  );
}

export default LoaderBlock;
