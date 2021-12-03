import React from 'react'
import ContentLoader from "react-content-loader";

function LoadingBlock() {
    return (
        <ContentLoader 
        className="pizza-block"
      speed={2}
      width={280}
      height={460}
      viewBox="0 0 280 460"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      
    >
      <circle cx="139" cy="144" r="137" /> 
      <rect x="0" y="300" rx="0" ry="0" width="280" height="28" /> 
      <rect x="0" y="340" rx="6" ry="6" width="280" height="84" /> 
      <rect x="10" y="460" rx="0" ry="0" width="38" height="26" /> 
      <rect x="10" y="428" rx="4" ry="4" width="85" height="31" /> 
      <rect x="184" y="428" rx="27" ry="27" width="85" height="31" />
    </ContentLoader>
      );
}

export default LoadingBlock;
