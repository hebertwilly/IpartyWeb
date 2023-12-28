import React from "react";

const SloganBanner = (props) =>{

    const gradientStyle = {
        background: `linear-gradient(270deg, #C39F20 -13.41%, #E5E5E5 106.35%)`,
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      };

    return (
        <div className="ml-[65px] mt-[50px] ">
             <h1 className="w-[567px]  text-[40px] font-bold" style={gradientStyle}>
                {props.title}
            </h1>
             <p className="w-[495px] mt-[10px] text-[21px] font-normal " style={gradientStyle}>
                {props.subtitle}
            </p>
        </div>
    );
}

export default SloganBanner;