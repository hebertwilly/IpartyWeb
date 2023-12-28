import React from "react";
import backgroundImageUrl from "../assets/backgroundBanner.png";
import HeaderHomePage from "../components/HeaderHomePage";
import ContainerBanner from "../components/ContainerBanner";
import SloganBanner from "../components/SloganBanner";

const HomePage = () => {
  return (

    <div className="w-screen h-screen bg-[#090808]">
      <ContainerBanner backgroundImage={backgroundImageUrl}>
        <HeaderHomePage />
        <SloganBanner title='TUDO PARA SUA FESTA OU EVENTO !' 
                      subtitle='A i party é um markplace voltado para festas e eventos. 
                                Aqui  você vai encontrar os melhores fornecedores de produtos e serviços 
                                para sua festa.'
        />
      </ContainerBanner>
      
    </div>
  );
};

export default HomePage;