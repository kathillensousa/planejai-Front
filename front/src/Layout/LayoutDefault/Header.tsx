import { useState } from "react";
import { SideBar } from "./SideBar";
import { NavLink } from "react-router-dom";

import Menu from "../../assets/icons/menusIcon.webp";
import Logo from "../../assets/logo_planejAI.png"
import moldura from "../../assets/ZUP/moldura-perfil.png"
import perfil from "../../assets/icons/perfilUser.svg"

interface IHeaderLayoutProps {
    title?: any;
    children?: React.ReactNode;
    
}

export const HeaderLayout = ({children, title}: IHeaderLayoutProps) => {

 
    const [showSideBar, setShowSideBar] = useState(false)

    return (
        <div className=" relative h-16 border-b gap-4 mb-10 flex items-center px-10 z-10 bg-[var(--color-gray-200)]">
            <NavLink
            to="./planejai"
            className="absolute right-0 size-18 top-1"
            >
                <img src={Logo} 
                />
            </NavLink>


            <img src={perfil} alt="perfil"
            className="absolute left-1/2 -translate-x-1/2 top-1 size-13 z-5"/>

            <img src={moldura} alt="moldura"
            className="absolute left-1/2 -translate-x-1/2 top-1 size-13 z-10"/>

            <button
            type="button"
            onClick={() => setShowSideBar(!showSideBar)}
            className="group absolute top-8 left-0 -translate-y-1/3 transition-all duration-450 size-10"
            >
                <img src={Menu} alt="icon"
                className="absolute w-7 left-5 bottom-4 cursor-pointer"
                />
                <span className="
                absolute left-14 bottom-3
                opacity-0 group-hover:opacity-90
                transition-opacity duration-300
                shadow-xs font-sans text-white whitespace-nowrap
                text-xs p-2 
                bg-[var(--color-black-400)]
                ">
                    Menu de controles 
                </span>

            </button>

            <header >
                {title && (
                    <h1 className="absolute text-md font-bold p-2 border-l-2  border-[var(--color-black-20)]  top-18 left-3 [text-shadow:2px_2px_6px_rgba(0,0,0,0.3)]">
                        {title}
                    </h1>
                    )}
            {children}
            

        </header>
            {showSideBar && (
                <SideBar
                onClose={() => setShowSideBar(false)} 
                />
            )}
        </div>
        
    )
}