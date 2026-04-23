import { NavLink} from 'react-router-dom';
import GeralLayoutStyles from './GeralLayout.module.css'
import { useState } from 'react';


export const VisaoGeral = () => {
    const meses = [
        "Janeiro", "Fevereiro", "Março", "Abril",
        "Maio", "Junho", "Julho", "Agosto",
        "Setembro", "Outubro", "Novembro", "Dezembro"
    ]
    const [mes, setMes] = useState(0);
    const [abertoMes, setAbertoMes] = useState(false);

    const anos = [
        2025,2026
    ]
    const [ano, setAno] = useState(0);
    const [abertoAno, setAbertoAno] = useState(false);
    
    return (
        
        <div>
                <img src='/background-icons/azul-verde.png' className={GeralLayoutStyles.azulVerde}/>
                <img src='/background-icons/azul-verdeBaixo.png' className={GeralLayoutStyles.azulVerdeBaixo}/>

            <div className={GeralLayoutStyles.container}> 

                <div className={GeralLayoutStyles.header}>

                    <div className={GeralLayoutStyles.headerContent}>
                        <h1 className={GeralLayoutStyles.title}> Visão geral de suas finanças</h1>

                        <h1 className={GeralLayoutStyles.mes}> Mês Referente: {meses[mes]}</h1>

                        <div className={GeralLayoutStyles.mesContainer}>

                            <button onClick={() => setAbertoMes(!abertoMes)} className={GeralLayoutStyles.botaoMes}>
                                <img src="/icons/seta-icon.svg" alt="icon" 
                                className={`${GeralLayoutStyles.setaMes} ${
                                abertoMes ? GeralLayoutStyles.setaAbertaMes : ""
                                }`}/>
                            </button>

                        </div>
                    </div>
                <div>

                    {abertoMes && (
                        <ul className={GeralLayoutStyles.optionMeses}>
                            {meses.map((m,index) => (
                                <li
                                className={GeralLayoutStyles.options}
                                    key={index}
                                    onClick={() => {
                                        setMes(index);
                                        setAbertoMes(false)
                                }}
                                >
                                    {m}
                                </li>
                            ))}
                        </ul>
                    )}

                </div> 
                
                <div className={GeralLayoutStyles.anoContainer}>
                    <h1 className={GeralLayoutStyles.mes}> Ano referente: {anos[ano]}</h1>
                            <button onClick={() => setAbertoAno(!abertoAno)} className={GeralLayoutStyles.botaoAno}>
                                <img src="/icons/seta-icon.svg" alt="icon" 
                                className={`${GeralLayoutStyles.setaAno} ${
                                abertoAno ? GeralLayoutStyles.setaAbertaAno : ""
                                }`}/>
                            </button>

                </div>
                {abertoAno && (
                        <ul className={GeralLayoutStyles.optionAnos}>
                            {anos.map((m,index) => (
                                <li
                                className={GeralLayoutStyles.optionsAnos}
                                    key={index}
                                    onClick={() => {
                                        setAno(index);
                                        setAbertoAno(false)
                                }}
                                >
                                    {m}
                                </li>
                            ))}
                        </ul>
                    )}
                
            </div>
                
            </div>
        </div>
    )
}