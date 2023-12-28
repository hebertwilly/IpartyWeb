import React from "react";
import backgroundImageUrl from "../assets/backgroundBanner.png";
import HeaderHomePage from "../components/HeaderHomePage";
import ContainerBanner from "../components/ContainerBanner";

const HomePage = () => {
  return (
    <ContainerBanner backgroundImage={backgroundImageUrl}>
      <HeaderHomePage />
    </ContainerBanner>
  );
};

export default HomePage;