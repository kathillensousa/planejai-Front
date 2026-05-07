import { useEffect, useState } from "react";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

import ZupOlhoAberto from "../../assets/ZUP/ZupOlhoAberto.png";
import ZupOlhoFechado from "../../assets/ZUP/ZupOlhoFechado.png";
import ZupDeitado from "../../assets/ZUP/ZupDeitado.png"
import options from "../../assets/icons/optionsIcon.png"
import optionsSelected from "../../assets/icons/optionsSelected.png"

import azulVerde from "../../assets/background-icons/azulVerde.png";
import azulVerdeBaixo from "../../assets/background-icons/azulVerdeBaixo.png";
import logo from "../../assets/Logo_planejAI.png";
import { InputDefault } from "../../components/input/InputDefault";
import { InputDate } from "../../components/input/InputDate";
import ModalBody from "../../components/modal/ModalBody";

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

    const [dataNasc,setDataNasc] =  useState<Date | null>(null);

    const formattedDate = dataNasc
    ? dataNasc.toLocaleDateString("pt-BR")
    : "";

    const [schoolYear, setSchoolYear] = useState<string>("");

    const [email, setEmail] = useState<string>("");

    const [password, setPassword] = useState<string>("");

    const [showModal, setShowModal] = useState(false);

    const handleCreateAccount = () => {

    }

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

                <div className="pb-3 pt-5">
                    <InputDefault titleInput="Para começarmos com o pé direito, qual é o seu nome?"
                    placeholder="Digite aqui..."
                    value={setName}
                    />
                </div>
                    

                    <div className="relative pb-3 ">
                        <InputDefault titleInput="Qual é a sua data de nascimento?"
                            placeholder={formattedDate}
                            value={() => {}}
                            />

                            <button
                                type="button"
                                onClick={() => setShowModal(!showModal)}
                                className={`absolute bottom-4 right-13 -translate-y-1/3 
                                transition-all duration-450 size-10
                                ${showModal ? "-translate-y-16 z-22  top-15 " :" z-10"}
                                `}
                                
                                >
                                <img
                                    src={showModal ? optionsSelected : options }
                                    alt="toggle date"
                                    className="size-10 mt-6 cursor-pointer shadow- shadow-2xl"
                                />
                                </button>
                            {showModal && (
                                <div className="absolute top-15 right-2 z-5">
                                    {/*Passando as props para o calendário*/}
                                        <InputDate
                                        selectedDate={dataNasc}
                                        setSelectedDate={setDataNasc}
                                />
                        
                                </div>
                            )}
                    </div>
                
                <div className="pb-3 ">
                    <InputDefault titleInput="Digite seu melhor E-mail"
                    placeholder="Digite aqui..."
                    value={setEmail}
                    />
                </div>

                <div className="pb-3 ">
                    <InputDefault titleInput="Crie uma senha forte:"
                    placeholder="Digite aqui..."
                    value={setPassword}
                    />
                </div>
                
                <p className="font-bold text-[14px] flex ml-5 [text-shadow:3px_3px_6px_rgba(0,0,0,0.3)]">Depois você poderá mudar seus dados caso seja necessário!</p>

                            <button className="w-35 h-10 font-bold bg-[var(--color-success-420)] mt-2 cursor-pointer rounded-md shadow-2xl mx-auto block shadow-[0_10px_25px_rgba(0,0,0,0.25)]"
                                onClick={handleCreateAccount}> 
                                CRIAR CONTA
                            </button>

                            <p className="font-bold text-[14px] flex ml-25 mt-5 [text-shadow:3px_3px_6px_rgba(0,0,0,0.3)] z-10">Já tem uma conta?</p>

                            <NavLink className="w-35 h-10 flex items-center justify-center font-bold bg-[var(--color-success-420)] mt-2 cursor-pointer rounded-md shadow-2xl mx-auto block shadow-[0_10px_25px_rgba(0,0,0,0.25)]"
                            to='/login'> 
                                LOGIN
                            </NavLink>

                </div>
            </div>

        </div>
    )
}
