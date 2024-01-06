import React from "react";
import backgroundImageUrl from "../assets/backgroundBanner.png";
import HeaderHomePage from "../components/headers/HeaderHomePage";
import ContainerBanner from "../components/containers/ContainerBanner";
import SloganBanner from "../components/utilites/SloganBanner";
const HomePage = () => {
  const title = 'TUDO PARA SUA FESTA OU EVENTO !'
  const subtitle = "A i party é um markplace voltado para festas e eventos. Aqui  você vai encontrar os melhores fornecedores de produtos e serviços para sua festa."
  
  return (
    <>
      <div className="w-screen h-screen bg-[#090808]">
        <ContainerBanner backgroundImage={backgroundImageUrl} height="550px">
            <HeaderHomePage />
            <SloganBanner title={title} subtitle={subtitle}/>
        </ContainerBanner>
      </div>
    </>
  );
};

export default HomePage;