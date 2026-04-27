import { useState } from "react";


export const ButtonMes = () => {

    const meses = [
        "Janeiro", "Fevereiro", "Março", "Abril",
        "Maio", "Junho", "Julho", "Agosto",
        "Setembro", "Outubro", "Novembro", "Dezembro"
    ]
    const [mes, setMes] = useState(0);
    const [abertoMes, setAbertoMes] = useState(false);

    return (
        <div>
            <h1>Mês Referente: {meses[mes]}</h1>

        <div>
            <button onClick={() => setAbertoMes(!abertoMes)}>
                <img src="/icons/seta-icon.svg" alt="icon"/>
            </button>
        </div>

            {abertoMes && (
                <ul>
                    {meses.map((m,index) => (
                        <li
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
        
    )


}