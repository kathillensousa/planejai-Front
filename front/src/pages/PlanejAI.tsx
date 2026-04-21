import { NavLink } from "react-router-dom"
import PlanejAILayoutStyles from './PlanejAI.module.css'

export const PlanejAI = () => {
    return (
        <div className={PlanejAILayoutStyles.container}>

            <div >
                <img src='/background-icons/azul-verde.png' className={PlanejAILayoutStyles.azulVerde}/>
                <img src='/background-icons/azul-verdeBaixo.png' className={PlanejAILayoutStyles.azulVerdeBaixo}/>
            </div>
                
            <div className={PlanejAILayoutStyles.textItens}>

                <img src='/texts/textUm.png' className={PlanejAILayoutStyles.textUm}/>
                <img src='/texts/textDois.png' className={PlanejAILayoutStyles.textDois}/>
                <img src='/texts/textTres.png' className={PlanejAILayoutStyles.textTres}/>
                <img src='/texts/textQuatro.png' className={PlanejAILayoutStyles.textQuatro}/>
                <img src='/texts/textCinco.png' className={PlanejAILayoutStyles.textCinco}/>
            </div>

            <NavLink to='/'
            className={`${PlanejAILayoutStyles.btn} ${PlanejAILayoutStyles.btPlanejAI}`}
            >
                <img src="/buttons/planejAI-bt.png" alt="button"/>
                <span>Saiba mais sobre o PlanejAI</span>
            </NavLink>
                
        </div>
    )
}