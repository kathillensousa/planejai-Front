import { Outlet, useLocation } from "react-router-dom"
import { HeaderLayout } from "./Header"

import azulVerde from "../../assets/background-icons/azulVerde.png"
import azulVerdeBaixo from "../../assets/background-icons/azulVerdeBaixo.png"

export const LayoutDefault = () => {
    const location = useLocation()  // para pegar a rota atual
  
    const titles: Record<string, string> = {  // mapea todas as rotas e seus respecctivos titulos
        "/": "Página inicial - Visão Geral das finanças",
        "/planejai": "O que é o PlanejAI",
        "/perfil": "Perfil de usuário",
        "/capital": "Controle de Capital",
        "/gastos": "Controle de Gastos",
        "/dividas": "Controle de Dívidas",
    }
  
    const title =
        titles[location.pathname] || null
        // caso a rota nao exista ou nao tenha titulo, será exibido o titulo da pág inicial
  
    return (
        <div className="flex h-screen absolute w-full z-0 right-0 top-0 bg-[var(--color-gray-180)]">
    
        <img src={azulVerde} alt="bgIcon" className="absolute z-0 top-15 left-0  size-35"/>
        <img src={azulVerdeBaixo} alt="bgIcon" className="absolute z-0 bottom-0 right-0 size-35"/>

    
            <div className="flex-1 flex flex-col ">
                <HeaderLayout title={title}  />
    
            <main className="flex-1 p-4 ">
                <Outlet />
            </main>
        </div>
    
        </div>
    )
}