import React from "react";

const SloganBanner = (props) =>{

    const gradientStyle = {
        background: `linear-gradient(270deg, #C39F20 -13.41%, #E5E5E5 106.35%)`,
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
    };

    return (
        <div className="ml-[116px] mt-[190px]">
             <h1 className="w-[700px]  text-[45px] font-bold" style={gradientStyle}>
                {props.title}
            </h1>
             <p className="w-[600px] mt-[10px] text-[21px] font-normal " style={gradientStyle}>
                {props.subtitle}
            </p>
        </div>
    );
}

export default SloganBanner;



/* 
    const gradientStyle = {
        background: `linear-gradient(270deg, #C39F20 -13.41%, #E5E5E5 106.35%)`,
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
    }; 
*/