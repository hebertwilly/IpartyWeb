import React from "react";
import logoIparty from '../../assets/IpartyLogo.svg'


const HeaderHomePage = () =>{
    return (
        <div className="w-[100%] flex flex-col items-center">
            <header className="w-[1296px] 
                        h-[66px]
                        bg-[#282828]
                        rounded-[20px]
                        bg-opacity-50
                        mt-[20px]
                        backdrop-blur-sm
                        flex 
                        justify-between 
                        items-center 
                    ">
                <nav className="pl-[35px]">
                    <ul className="flex gap-[20px] items-center">
                        <li><img src={logoIparty} alt="Iparty" /></li>
                        <li>
                            <button className="w-[105px] h-[43px] border-2 border-[#C39F20] rounded-[25px] text-[#C39F20] font-bold">Entrar</button>
                        </li>
                        <li><a href="" className="text-white">Criar conta</a></li>
                    </ul>
                </nav>
                <nav className="h-[66px]
                                w-[270px]
                                bg-gradient-to-r
                                from-[rgba(40,40,40,0)]
                                to-[rgba(195,160,32,0.66)]
                                rounded-[20px]
                                
                                flex 
                                items-center
                                pr-[35px] 
                                ">
                    <ul className="flex justify-end gap-[20px] w-[100%] text-white font-medium">
                        <li><a href="">Para Empresas</a></li>
                        <li><a href="">Sobre nós</a></li>
                    </ul>
                </nav>
            </header>
        </div>
       
    );
}

export default HeaderHomePage;