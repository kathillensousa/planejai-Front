import { Outlet, useLocation } from "react-router-dom"
import { HeaderLayout } from "./Header"

import azulVerde from "../../assets/background-icons/azulVerde.png"
import azulVerdeBaixo from "../../assets/background-icons/azulVerdeBaixo.png"
import amareloVerde from "../../assets/background-icons/amarelo-verde.png"
import amareloVerdeBaixo from "../../assets/background-icons/amarelo-verdeBaixo.png"
import amareloVermelho from "../../assets/background-icons/amarelo-vermelho.png"
import amareloVermelhoBaixo from "../../assets/background-icons/amarelo-vermelhoBaixo.png"

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
    
    const topIcons: Record<string, string> = {
        "/home": azulVerde,
        "/planejai": azulVerde,
        "/perfil": azulVerde,
        "/capital": amareloVerde,
        "/gastos": amareloVermelho,
        "/dividas": amareloVermelho,
    };

    const bottomIcons: Record<string, string> = {
        "/home": azulVerdeBaixo,
        "/planejai": azulVerdeBaixo,
        "/perfil": azulVerdeBaixo,
        "/capital": amareloVerdeBaixo,
        "/gastos": amareloVermelhoBaixo,
        "/dividas": amareloVermelhoBaixo,
    }



    return (
        <div className="relative min-h-screen w-full bg-[var(--color-gray-200)]">
    
            <img
            src={topIcons[location.pathname]}
            alt="bgIcon"
            className="absolute top-15 left-0 z-0 size-35"
            />
    
            <div className="relative z-10 flex flex-col MIN-h-screen">

                <HeaderLayout title={title}  />
                

            <main className=" flex-1 p-4">
                <Outlet />
            </main>

            <div className="flex justify-end z-0">
                <img
                    src={bottomIcons[location.pathname]}
                    alt="bgIcon"
                    className="size-35"
                />
            </div>

        </div>
            
    </div>
    )
}