import { NavLink} from 'react-router-dom';
import AppLayoutStyles from './AppLayout.module.css'

interface IAppLayoutProps {
    children: React.ReactNode
}


export const AppLayout = ({children }: IAppLayoutProps) => {

    return (
        <div className={AppLayoutStyles.container}>
                
                <aside className={AppLayoutStyles.sidebar}>
                    <NavLink  to='/planejai'
                        className={AppLayoutStyles.logo}> 
                            <img src="/logo_planejAI.png"/>
                            <span>Saiba mais sobre o PlanejAI</span>
                        </NavLink>
                    
                    <nav>
                        <ul>
                            <NavLink 
                                to='/perfil'
                                className={`${AppLayoutStyles.btn} ${AppLayoutStyles.btnPerfil}`}
                                >
                                    <img src="/icons/perfil-user.svg" alt="icon"/>
                                    <span>Perfil de usuário</span>
                            </NavLink>
                            <NavLink 
                                to='/'
                                className={`${AppLayoutStyles.btn} ${AppLayoutStyles.btnGeral}`}
                                >
                                    <img src="/icons/visaogeral-icon.svg" alt="icon"/>
                                    <span>Visão Geral</span>
                            </NavLink>

                            <NavLink 
                                to='/capital'
                                className={`${AppLayoutStyles.btn} ${AppLayoutStyles.btnCapital}`}
                                >
                                    <img src="/icons/transacoes-icon.svg" alt="icon"/>
                                    <span>Controle de Capital</span>
                            </NavLink>
                                
                            <NavLink
                                to ='/gastos'
                                className={`${AppLayoutStyles.btn} ${AppLayoutStyles.btnGastos}`}>
                                    <img src="/icons/gastos-icon.svg" alt="icon"/>
                                    <span>Controle de Gastos</span>
                            </NavLink>

                            <NavLink
                                to='/dividas'
                                className={`${AppLayoutStyles.btn} ${AppLayoutStyles.btnDividas}`}>
                                    <img src="/icons/dividas-icon.svg" alt="icon"/>
                                    <span>Controle de Dividas</span>
                            </NavLink>
                        </ul>
                    </nav>
                </aside>
            <header>
            <div className={AppLayoutStyles.content}>
                {children}
            </div>
            </header>
        </div>
    )
}
