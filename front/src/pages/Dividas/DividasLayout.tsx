
import DividasLayoutStyles from './DividasLayout.module.css'

export const DividasLayout = () => {
    return (
        <div>
            <img src='/background-icons/amarelo-vermelho.png' className={DividasLayoutStyles.amareloVermelho}/>
            <img src='/background-icons/amarelo-vermelhoBaixo.png' className={DividasLayoutStyles.amareloVermelhoBaixo}/>
        
            <div className={DividasLayoutStyles.container}>

                    <div className={DividasLayoutStyles.header}>

                        <div className={DividasLayoutStyles.headerContent}>
                            <h1 className={DividasLayoutStyles.title}> Controle de Dividas</h1>

                            </div>
                        </div>

            </div>
        </div>
    )
}