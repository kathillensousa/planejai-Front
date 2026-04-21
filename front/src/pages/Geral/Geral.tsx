import { NavLink} from 'react-router-dom';
import GeralLayoutStyles from './GeralLayout.module.css'


export const VisaoGeral = () => {
    return (
        <div className={GeralLayoutStyles.container}> 
            <img src='/background-icons/azul-verde.png' className={GeralLayoutStyles.azulVerde}/>
            <img src='/background-icons/azul-verdeBaixo.png' className={GeralLayoutStyles.azulVerdeBaixo}/>
        
            <h1 className={GeralLayoutStyles.title}> Visão geral de suas finanças</h1>
        </div>
    )
}