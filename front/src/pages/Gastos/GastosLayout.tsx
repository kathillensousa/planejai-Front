
import GastosLayoutStyles from './GastosLayout.module.css'

export const GastosLayout = () => {
    return (
        <div>
            <img src='/background-icons/amarelo-verde.png' className={GastosLayoutStyles.amareloVerde}/>
            <img src='/background-icons/amarelo-verdeBaixo.png' className={GastosLayoutStyles.amareloVerdeBaixo}/>
        
            <div className={GastosLayoutStyles.container}>

                    <div className={GastosLayoutStyles.header}>

                        <div className={GastosLayoutStyles.headerContent}>
                            <h1 className={GastosLayoutStyles.title}> Controle de Gastos</h1>

                            </div>
                        </div>

            </div>
        </div>
    )
}