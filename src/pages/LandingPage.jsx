import React, { useEffect, useState } from "react";

import {
    ForkKnife, 
    BeerStein, 
    Hamburger, 
    Martini,
    Champagne,
    FlowerLotus, 
    MapPin, 
    Confetti, 
    MicrophoneStage, 
    Sunglasses, 
    Headphones,
    Knife
} from "@phosphor-icons/react";

import {cardData1, cardData2, cardData3, cardData4} from "../data/cardData";
import Header from "../components/headers/Header";
import SloganBanner from "../components/utils/SloganBanner";
import Card from "../components/cards/Card";
import Background1 from "../assets/Backgroud1.png";

const LandingPage = () =>{

    const title = 'TUDO PARA SUA FESTA OU EVENTO !'
    const subtitle = "A i party é um markplace voltado para festas e eventos. Aqui você vai encontrar os melhores fornecedores de produtos e serviços para sua festa."

    const [currentIndex, setCurrentIndex] = useState(0); // Índice do ícone atual
    const items = [
        { icon: <ForkKnife size={50} color="#C39F20" />, label: "Buffets" },
        { icon: <BeerStein size={50} color="#C39F20" />, label: "Adegas" },
        { icon: <Hamburger size={50} color="#C39F20" />, label: "Foods" },
        { icon: <Martini size={50} color="#C39F20" />, label: "Bartenders" },
        { icon: <Champagne size={50} color="#C39F20" />, label: "Coqueteletarias" },
        { icon: <FlowerLotus size={50} color="#C39F20" />, label: "Decoradores" },
        { icon: <MapPin size={50} color="#C39F20" />, label: "Locais P/ Eventos" },
        { icon: <Confetti size={50} color="#C39F20" />, label: "Cerimonialistas" },
        { icon: <MicrophoneStage size={50} color="#C39F20" />, label: "Músicos" },
        { icon: <Sunglasses size={50} color="#C39F20" />, label: "Seguranças" },
        { icon: <Headphones size={50} color="#C39F20" />, label: "Djs" }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % items.length); // Avança para o próximo índice
        }, 1500);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full bg-black min-h-screen">
            <div className="bg-cover bg-center w-full h-[700px]" style={{backgroundImage: `url(${Background1})`}}>
                <Header/>
                <SloganBanner title={title} subtitle={subtitle}/>
            </div>
            <main className="w-full flex flex-col items-center ">
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
                <div className="w-[100%] mt-[55px] flex flex-row justify-between items-center text-center">
                    <h1 className="ml-[116px] text-[35px] font-bold gradient-text">ALGUNS EXEMPLOS DO QUE VOCÊ ENCONTRA NA I PARTY</h1>
                    <button className="w-[200px] h-[45px] mr-[116px] border-2 border-[#C39F20] rounded-[25px] text-[#C39F20] font-bold hover:bg-[#C39F20] hover:text-black transition-colors duration-500 ease-in-out">Criar conta</button>
                </div>
                <div className="flex flex-row w-[87%] mb-[100px] justify-between items-center text-center">
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className="mt-[30px] flex flex-col gap-y-2 items-center"
                            style={{ transform: `scale(${currentIndex === index ? 1.1 : 1})`, transition: "transform 0.5s ease-in-out" }}
                        >
                            {item.icon}
                            <span className="text-lg text-white font-bold text-center">{item.label}</span>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}

export default LandingPage;