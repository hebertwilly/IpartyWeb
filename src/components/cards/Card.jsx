import React from "react";
import { UserCirclePlus, MagnifyingGlass, Handshake, Star} from "@phosphor-icons/react";

const Card = ({cardData}) => {

    const renderIcon = (icon) => {
        switch (icon) {
            case "UserCirclePlus":
                return <UserCirclePlus size={40} color="#C39F20"/>;
            case "MagnifyingGlass":
                return <MagnifyingGlass size={40} color="#C39F20"/>;
            case "Handshake":
                return <Handshake size={40} color="#C39F20"/>;
            case "Star":
                return <Star size={40} color="#C39F20"/>;
            default:
                return null;
        }
    };

    return (
        <div className="w-[310px] 
                        h-[310px] 
                        bg-black-principal 
                        rounded-[15px] 
                        p-4 
                        m-2
                        hover:scale-125
                        cursor-default
                        transition-all duration-500 ease-in-out">
            <div className="flex flex-row justify-center mt-[20px] items-center">
                {renderIcon(cardData.icon)}
                <h1 className="text-[#C39F20] text-[25px] ml-[5px] font-bold">{cardData.title}</h1>
            </div>
            <div className="text-white text-center text-[18px] mt-[20px]">
                    {cardData.description}
            </div>
        </div>
    );
}

export default Card;