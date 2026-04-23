
import CapitalLayoutStyles from './CapitalLayout.module.css'

export const CapitalLayout = () => {
    return (
        <div>
            <img src='/background-icons/azul-verde.png' className={CapitalLayoutStyles.azulVerde}/>
                <img src='/background-icons/azul-verdeBaixo.png' className={CapitalLayoutStyles.azulVerdeBaixo}/>
        
            <div className={CapitalLayoutStyles.container}>

                    <div className={CapitalLayoutStyles.header}>

                        <div className={CapitalLayoutStyles.headerContent}>
                            <h1 className={CapitalLayoutStyles.title}> Controle de Capital</h1>

                            </div>
                        </div>

            </div>
        </div>
    )
}