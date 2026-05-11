import { useState } from "react";
import { SideBar } from "./SideBar";
import { NavLink } from "react-router-dom";

import Menu from "../../assets/icons/menusIcon.webp";
import back from "../../assets/icons/optionsIcon.png";
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
            className={`absolute top-8 left-0 -translate-y-1/3 
                                transition-all duration-450 size-10
                                ${showSideBar ? "-translate-y- z-22 top-35":" z-22"}
                                `}>
                <img src={Menu} alt="icon"
                className="absolute w-7 left-5 bottom-4 cursor-pointer"
                />

            </button>
            <header >
                {title && (
                    <h1 className="absolute text-md font-bold p-2 border-2 rounded-md border-[var(--color-black-20)] bg-[var(--color-gray-20)] top-18 left-3">
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