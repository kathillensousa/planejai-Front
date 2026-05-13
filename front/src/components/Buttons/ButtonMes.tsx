import { useState } from "react";

import option from "../../assets/icons/optionsIcon.png"

export const ButtonMes = () => {

    const meses = [
        "Janeiro", "Fevereiro", "Março", "Abril",
        "Maio", "Junho", "Julho", "Agosto",
        "Setembro", "Outubro", "Novembro", "Dezembro"
    ]
    const [mes, setMes] = useState(0);
    const [abertoMes, setAbertoMes] = useState(false);

    return (
        <div className="w-30 h-10 mt-3 bg-[var(--color-gray-150)] rounded-md border-2 text-center ">
            <h1 className="text-[13px] font-bold [text-shadow:2px_2px_6px_rgba(0,0,0,0.3)]
            ">Mês Referente:</h1>
            <h1 className="text-[14px]  -mt-1 font-bold [text-shadow:2px_2px_6px_rgba(0,0,0,0.3)]"> {meses[mes]}</h1>
            <button onClick={() => setAbertoMes(!abertoMes)}>
                    <img src={option} alt="icon"
                    className={`absolute size-8  left-31 top-4 transition transform hover:scale-110  -translate-y-1/3 transition-all duration-450 ${abertoMes ? "-translate-y-16 z-22  top-17 " :" z-10"}`}/>
            </button>

            {abertoMes && (
                <ul className="absolute col justify-center w-25 left-36 top-8 bg-[var(--color-gray-150)] rounded-md">
                    {meses.map((m,index) => (
                        <li
                            key={index}
                            onClick={() => {
                                setMes(index);
                                setAbertoMes(false)
                        }}
                        className={`
                        cursor-pointer rounded-md p-1 transition-all
                        ${mes === index
                            ? "border-2 border-[var(--color-black-400)] bg-[var(--color-gray-200)]"
                            : "border-2 border-transparent hover:border-[var(--color-gray-300)]"
                        }
                    `}
                        >
                            {m}
                        </li>
                    ))}
                </ul>
            )}
        </div>
        
    )


}