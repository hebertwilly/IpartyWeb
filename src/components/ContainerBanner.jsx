import React from "react";

const ContainerBanner = ({ backgroundImage, children }) => {
    const containerStyle = {
      backgroundImage: `url(${backgroundImage})`,
    };
    return (
      <div className="h-[600px] w-[100%] bg-cover bg-center" style={containerStyle}>
        {children}
      </div>
    );
  };

export default ContainerBanner;