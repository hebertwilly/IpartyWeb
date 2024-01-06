import React from "react";

const ContainerBanner = ({ backgroundImage, height, children }) => {
    const containerStyle = {
      backgroundImage: `url(${backgroundImage})`,
      height: height
    };
    return (
      <div className={`w-[100%] bg-cover bg-center`} style={containerStyle}>
        {children}
      </div>
    );
  };

export default ContainerBanner;