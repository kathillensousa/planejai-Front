import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

import ZupOlhoAberto from "../../assets/ZUP/ZupOlhoAberto.png";
import ZupOlhoFechado from "../../assets/ZUP/ZupOlhoFechado.png";
import ZupDeitado from "../../assets/ZUP/ZupDeitado.png"

import azulVerde from "../../assets/background-icons/azulVerde.png";
import azulVerdeBaixo from "../../assets/background-icons/azulVerdeBaixo.png";
import logo from "../../assets/Logo_planejAI.png";
import { InputDefault } from "../../components/input/InputDefault";

interface ICreateAccount {
    name: string | undefined;
    dataNasc: Date | undefined;
    schoolYear: string| undefined;
    email: string | undefined;
    password: string | undefined;
    loading: boolean; // para confirmar a criação da conta
    createAccount(email:string, password:string): Promise<string | null>;  // função para criar a conta
}

export const CreateAccount = () => {

    const [name, setName] = useState<string>("");

    const [dataNasc,setDataNasc] =  useState<string>("");

    const [schoolYear, setSchoolYear] = useState<string>("");

    const [email, setEmail] = useState<string>("");

    const [password, setPassword] = useState<string>("");

    return (
        <div>
            <img src={azulVerde} alt="bgIcon" className="absolute z-0 top-0 left-0  size-35"/>
            <img src={azulVerdeBaixo} alt="bgIcon" className="absolute z-0 bottom-0 right-0 size-35"/>

            <img src={logo} alt="logo" className="absolute z-0 top-3 left-5 w-25 h-20"/>

            <div className="h-screen w-screen flex items-center justify-center bg-[var(--color-gray-200)] z-2">

                <div className="relative w-80 h-120 items-center bg-[var(--color-gray-150)] rounded-3xl shadow-[0_10px_25px_rgba(0,0,0,0.25)] z-2">
                    
                    <img
                    src={ZupDeitado} alt='png'
                    className="absolute z-5 left-49 bottom-100 size-40"
                />

                    <h1 className="font-bold text-[25px] flex justify-center text-shadow-lg ">CRIAR CONTA</h1>

                    <InputDefault titleInput="Para começarmos com o pé direito, qual é o seu nome?"
                    value={setName}
                    />
                    <InputDefault titleInput="Qual é a sua data de nascimento?"
                    value={setDataNasc}
                    />

                    <InputDefault titleInput=""
                    placeholder="Selecione"
                    />


                </div>
            </div>

        </div>
    )
}
