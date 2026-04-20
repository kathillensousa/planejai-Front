import AppLayoutStyles from './AppLayout.module.css'

interface IAppLayoutProps {
    title:  string;
    children: React.ReactNode
}


export const AppLayout = ({ title, children }: IAppLayoutProps) => {

    return (
        <>
            <header  className={AppLayoutStyles.header}>
                <h1>{title}</h1>
                <div className={AppLayoutStyles.sidebar}>
                    <nav>
                        <ul>
                            <button className={AppLayoutStyles.btnCapital}>
                                <img src="icon.png" alt="icone"/>
                                <span>Capital</span>
                            </button>
                                <button className={AppLayoutStyles.btnCapital}>
                                <img src="icon.png" alt="icone"/>
                                <span>Gastos</span>
                            </button>
                            <button className={AppLayoutStyles.btnDividas}>
                                <img src="icon.png" alt="icone"/>
                                <span>Dividas</span>
                            </button>
                        </ul>
                    </nav>
                </div>
            </header>
            <div className={AppLayoutStyles.content}>
                {children}
            </div>
        </>
    )
}