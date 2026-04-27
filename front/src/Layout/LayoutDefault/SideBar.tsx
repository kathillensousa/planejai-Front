import type { PropsWithChildren } from "react"
import { NavLink } from "react-router-dom"



import transacoesIcon from "../../assets/icons/transacoesIcon.svg";
import gastosIcon from "../../assets/icons/gastosIcon.svg";
import dividasIcon from "../../assets/icons/dividasIcon.svg";
import visaoGeralIcon from "../../assets/icons/visaoGeralIcon.svg";
import perfilUser from "../../assets/icons/perfilUser.svg";


export const SideBar = ({children}: PropsWithChildren) => {

    return (
        <div className="flex flex-col gap-2">
            <aside className="w-16 h-screen border-r border-black-500  bg-[var(--color-black-110)]">
                <ul>
                    <li>
                        <NavLink  
                        to='/planejai'
                        className="group flex items-center gap-2 "
                        > 
                            <img src="/logo_planejAI.png" 
                            alt="icon"
                            className="size-30 flex items-center mt-10 py-8  transition transform hover:scale-110"/>
                            <span className="opacity-0 group-hover:opacity-100 shadow-xs font-sans text-white  whitespace-nowrap transition text-xs p-2 m-5 bg-[var(--color-black-400)]">
                                Saiba mais sobre o PlanejAI</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to='/perfil'
                            className="group flex items-center gap-2 "
                            >
                                <img src={perfilUser} alt="icon"
                                className="size-30 flex items-center gap-2 p-2  transition transform hover:scale-110"/>
                                <span className="opacity-0 group-hover:opacity-100 shadow-xs font-sans text-white whitespace-nowrap  transition text-xs p-2 m-5 bg-[var(--color-black-400)]">
                                    Perfil de usuário
                                </span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to='/'
                            className="group flex items-center gap-2 "
                            >
                                <img src={visaoGeralIcon} alt="icon"
                                className="size-30 flex items-center gap-2 p-2 py-8 transition transform hover:scale-110"/>
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
                                className="size-30 flex items-center gap-2 p-2 py-8  transition transform hover:scale-110"/>
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
                                className="size-30 flex items-center gap-2 p-2 py-8 transition transform hover:scale-110"/>
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
                                className="size-30 flex items-center gap-2 p-2 py-8 transition transform hover:scale-110"/>
                                <span className="opacity-0 group-hover:opacity-100 shadow-xs font-sans text-white whitespace-nowrap transition text-xs p-2 m-5 bg-[var(--color-black-400)]">
                                    Controle de Dividas</span>
                        </NavLink>
                    </li>
                </ul>
            </aside>
        </div>
    )
}