import { useState, type PropsWithChildren } from "react"
import { NavLink } from "react-router-dom"



import transacoesIcon from "../../assets/icons/transacoesIcon.svg";
import gastosIcon from "../../assets/icons/gastosIcon.svg";
import dividasIcon from "../../assets/icons/dividasIcon.svg";
import visaoGeralIcon from "../../assets/icons/visaoGeralIcon.svg";
import perfilUser from "../../assets/icons/perfilUser.svg";
import pensamento from "../../assets/icons/pensamentoIcon.webp";
import configIcon from "../../assets/icons/configIcon.webp";
import optionsSelected from "../../assets/icons/optionsSelected.png"

interface ISideBarProps {
    onClose: () => void;
}

export const SideBar = ({onClose}: ISideBarProps) => {

    

    return (
        <div className="absolute inset-0
                bg-black/50
                z-2
                h-screen
                flex
                items-center
                ">

        
            <div className="w-16 h-145 bottom-10 rounded-r-2xl   bg-[var(--color-gray-150)]">
                <ul>
                    <button
                    type="button"
                    onClick={onClose} 
                    className="group flex items-center"
                    >
                        <img src={optionsSelected} alt="icon"
                        className="size-13 flex p-2  transition transform hover:scale-110"/>
                                <span className="opacity-0 group-hover:opacity-100 shadow-xs font-sans text-white whitespace-nowrap  transition text-xs p-2 m-5 bg-[var(--color-black-400)]">
                                    Voltar à página
                                </span>
                    </button>
                    <li>
                        <NavLink 
                            to='/perfil'
                            className="group flex items-center"
                            >
                                <img src={perfilUser} alt="icon"
                                className="size-13 flex p-2 mb-2 transition transform hover:scale-110"/>
                                <span className="opacity-0 group-hover:opacity-100 shadow-xs font-sans text-white whitespace-nowrap  transition text-xs p-2 m-5 bg-[var(--color-black-400)]">
                                    Perfil de usuário
                                </span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to='/home'
                            className="group flex items-center gap-2 "
                            >
                                <img src={visaoGeralIcon} alt="icon"
                                className="size-13 flex items-center gap-2 p-2  transition transform hover:scale-110"/>
                                <span className="opacity-0 group-hover:opacity-100 shadow-xs font-sans text-white whitespace-nowrap transition text-xs p-2 m-5 bg-[var(--color-black-400)]">
                                    Home - Visão geral de suas finanças</span>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink 
                            to='/capital'
                            className="group flex items-center gap-2 "
                            >
                                <img src={transacoesIcon}alt="icon"
                                className="size-14 flex items-center gap-2 p-2 transition transform hover:scale-110"/>
                                <span className="opacity-0 group-hover:opacity-100 shadow-xs font-sans  text-white whitespace-nowrap transition text-xs p-2 m-5 bg-[var(--color-black-400)] ">
                                    Controle de Capital</span>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to ='/gastos'
                            className="group flex items-center gap-2 "
                            >
                                <img src={gastosIcon} alt="icon"
                                className="size-14 flex items-center gap-2 p-2  transition transform hover:scale-110"/>
                                <span className="opacity-0 group-hover:opacity-100 shadow-xs font-sans text-white whitespace-nowrap transition text-xs p-2 m-5 bg-[var(--color-black-400)]">
                                    Controle de Gastos</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/dividas'
                            className="group flex items-center gap-2"
                            >
                                <img src={dividasIcon} alt="icon"
                                className="size-13 flex items-center gap-2 p-2  left-1 transition transform hover:scale-110"/>
                                <span className="opacity-0 group-hover:opacity-100 shadow-xs font-sans text-white whitespace-nowrap transition text-xs p-2 m-5 bg-[var(--color-black-400)]">
                                    Controle de Dividas</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to='/planejeaqui'
                            className="group flex items-center gap-2 "
                            >
                                <img src={pensamento} alt="icon"
                                className="size-13 flex items-center gap-2 p-2  transition transform hover:scale-110"/>
                                <span className="opacity-0 group-hover:opacity-100 shadow-xs font-sans text-white whitespace-nowrap transition text-xs p-2 m-5 bg-[var(--color-black-400)]">
                                    Planeje aqui</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to='/config'
                            className="group flex items-center gap-2 "
                            >
                                <img src={configIcon} alt="icon"
                                className="size-13 flex items-center gap-2 p-2  transition transform hover:scale-110"/>
                                <span className="opacity-0 group-hover:opacity-100 shadow-xs font-sans text-white whitespace-nowrap transition text-xs p-2 m-5 bg-[var(--color-black-400)]">
                                    Configurações</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
        
        </div>
    )
}