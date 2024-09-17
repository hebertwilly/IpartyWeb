import React from "react";
import {cardData1, cardData2, cardData3, cardData4} from "../data/cardData";
import Header from "../components/headers/Header";
import SloganBanner from "../components/utils/SloganBanner";
import Card from "../components/cards/Card";
import Background1 from "../assets/Backgroud1.png";

const LandingPage = () =>{

        const title = 'TUDO PARA SUA FESTA OU EVENTO !'
        const subtitle = "A i party é um markplace voltado para festas e eventos. Aqui você vai encontrar os melhores fornecedores de produtos e serviços para sua festa."
  

    return (
        <div className="w-full bg-black">
            <div className="bg-cover bg-center w-full h-[700px]" style={{backgroundImage: `url(${Background1})`}}>
                <Header/>
                <SloganBanner title={title} subtitle={subtitle}/>
            </div>
            <main className="w-full h-[550px] flex flex-col items-center">
                <div className="w-[100%] mt-[55px] flex flex-row justify-between items-center text-center">
                    <h1 className="ml-[116px] text-[35px] font-bold gradient-text">COMO FUNCIONA A I PARTY?</h1>
                    <button className="w-[200px] h-[45px] mr-[116px] border-2 border-[#C39F20] rounded-[25px] text-[#C39F20] font-bold hover:bg-[#C39F20] hover:text-black transition-colors duration-500 ease-in-out">Criar conta</button>
                </div>
                <div className="w-[87%] mt-[50px] flex flex-row justify-between items-center">
                    <Card cardData={cardData1}/>
                    <Card cardData={cardData2}/>
                    <Card cardData={cardData3}/>
                    <Card cardData={cardData4}/>
                </div>
            </main>
        </div>
    );
}

export default LandingPage;