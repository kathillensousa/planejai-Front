import { Outlet, useLocation } from "react-router-dom"
import { SideBar } from "./SideBar"
import { HeaderLayout } from "./Header"

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
        titles[location.pathname] ||
        "PlanejAI - seu facilitador de controle financeiro"  // caso a rota nao exista ou nao tenha titulo, será exibido o titulo da pág inicial
  
    return (
        <div className="flex h-screen">
    
            <SideBar />
    
            <div className="flex-1 flex flex-col">
                <HeaderLayout title={title} />
    
            <main className="flex-1 p-4">
                <Outlet />
            </main>
        </div>
    
        </div>
    )
}