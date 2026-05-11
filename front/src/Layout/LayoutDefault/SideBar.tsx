import type { PropsWithChildren } from "react"
import { NavLink } from "react-router-dom"



import transacoesIcon from "../../assets/icons/transacoesIcon.svg";
import gastosIcon from "../../assets/icons/gastosIcon.svg";
import dividasIcon from "../../assets/icons/dividasIcon.svg";
import visaoGeralIcon from "../../assets/icons/visaoGeralIcon.svg";
import perfilUser from "../../assets/icons/perfilUser.svg";

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

        
            <div className="w-16 h-110 bottom-10 rounded-r-2xl   bg-[var(--color-gray-150)]">
                <ul>
                    <li>
                        <NavLink 
                            to='/perfil'
                            className="group flex items-center pb-0"
                            >
                                <img src={perfilUser} alt="icon"
                                className="size-15 flex p-2  mt-15 transition transform hover:scale-110"/>
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
                                className="size-15 flex items-center gap-2 mt-4 p-2  transition transform hover:scale-110"/>
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
                                className="size-15 flex items-center gap-2 mt-4 p-2   transition transform hover:scale-110"/>
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
                                className="size-15 flex items-center gap-2 mt-4 p-2  transition transform hover:scale-110"/>
                                <span className="opacity-0 group-hover:opacity-100 shadow-xs font-sans text-white whitespace-nowrap transition text-xs p-2 m-5 bg-[var(--color-black-400)]">
                                    Controle de Gastos</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/dividas'
                            className="group flex items-center gap-2 "
                            >
                                <img src={dividasIcon} alt="icon"
                                className="size-15 flex items-center gap-2 mt-4 p-2  transition transform hover:scale-110"/>
                                <span className="opacity-0 group-hover:opacity-100 shadow-xs font-sans text-white whitespace-nowrap transition text-xs p-2 m-5 bg-[var(--color-black-400)]">
                                    Controle de Dividas</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
        
        </div>
    )
}