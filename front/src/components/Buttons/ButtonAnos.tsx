import { useState } from "react";


export const ButtonAnos = () => {

    
    const anos = [
        2025,2026
    ]
    const [ano, setAno] = useState(0);
    const [abertoAno, setAbertoAno] = useState(false);
    

    return (
        <div>

            <div>
                
                <h1> Ano referente: {anos[ano]}</h1>
                    
                    <button onClick={() => setAbertoAno(!abertoAno)}>
                        <img src="/icons/seta-icon.svg" alt="icon"/>
                    
                    </button>
            
            </div>

            
            {abertoAno && (
                    <ul>
                        {anos.map((m,index) => (
                            <li
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
    )
}