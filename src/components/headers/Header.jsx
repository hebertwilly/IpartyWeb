import React from "react";
import logoIparty from '../../assets/IpartyLogo.svg'


const Header = () =>{
    return (
        <div className="w-full flex flex-col items-center">
            <header className="w-[90%] 
                        h-[66px]
                        bg-[#282828]
                        rounded-[20px]
                        bg-opacity-50
                        mt-[25px]
                        backdrop-blur-sm
                        flex 
                        justify-between 
                        items-center
                        fixed
                        top-0
                        z-50
                    ">
                <nav className="pl-[35px]">
                    <ul className="flex gap-[20px] items-center">
                        <li><img src={logoIparty} alt="Iparty" /></li>
                        <li>
                            <button className="w-[105px] h-[43px] 
                                               border-2 
                                               border-[#C39F20] 
                                               rounded-[25px] 
                                               text-[#C39F20] 
                                               font-bold 
                                               hover:bg-[#C39F20]
                                               hover:text-black
                                               transition-colors duration-500 ease-in-out">
                                Entrar
                            </button>
                        </li>
                        <li><a href="" className="text-white font-bold inline-block hover:text-[#C39F20] transition-color duration-300 ease-in-out">Criar conta</a></li>
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
                        <li><a className="font-bold hover:text-black transition-colors duration-500 ease-in-out" href="">Para Empresas</a></li>
                        <li><a className="font-bold hover:text-black transition-colors duration-500 ease-in-out" href="">Sobre nós</a></li>
                    </ul>
                </nav>
            </header>
        </div>
    );
}

export default Header;