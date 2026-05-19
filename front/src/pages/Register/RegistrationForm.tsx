import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { supabase } from "../../integrations/supabase/client";

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
import { ModalMessage } from "../../components/modal/ModalBody";
import { InputSchoolYear } from "../../components/input/InputSchoolYear";
import { ModalMessageSucces } from "../../components/modal/ModalSucces";


export const CreateAccount = () => {

    // PARA LEVAR O USUARIO PARA OUTRS PÁGINAS
    const navigate = useNavigate();

    //SALVANDO O NOME

    const [name, setName] = useState<string>("");

    // SLAVANDO DATA DE NASCIMENTO E FA\NEDO TRATAMENTO DA DATA

    const [dataNasc,setDataNasc] =  useState<Date | null>(null);

    // FOMATANDO A DATA PARA O FORMATO PADRÃO DO BRASIL
    const formattedDate = dataNasc
    ? dataNasc.toLocaleDateString("pt-BR")
    : "";
    // USANDO A DATA FORMATADA PARA CALCULAR A IDADE DO USUARIO
    function calculateAge(birthDate: Date) {
        const today = new Date();

        let age = today.getFullYear() - birthDate.getFullYear();

        const monthDifference =
            today.getMonth() - birthDate.getMonth();

        if (
            monthDifference < 0 ||
            (monthDifference === 0 &&
                today.getDate() < birthDate.getDate())
        ) {
            age--;
        }

        return age;
    }

    const age = dataNasc
        ? calculateAge(dataNasc)
        : null;

    console.log(age);

    //SALVANDO O ANO ESCOLAR E O ENAIL DO USUÁRIO
    const [schoolYear, setSchoolYear] = useState<string>("");

    const [email, setEmail] = useState<string>("");

    // EFEITOS DE SENHA (SALVAR SENHA E ESCONDER SENHA)
    const [password, setPassword] = useState<string>("");

    const [showPassword, setShowPassword] = useState(false);

    //MODAL
    const [showModal, setShowModal] = useState(false);
    
    //TRADUZINDO MENSAGENS DE ERROS PADRAO 
    const translateError = (message: string) => {

    if(message.includes("User already registered")){
        return "Esse e-mail já está cadastrado";
    }

    if(message.includes("Invalid login credentials")){
        return "E-mail ou senha inválidos";
    }

    return "Ocorreu um erro inesperado";
}
    const [succesMessage, setSuccesMessage] = useState("");
    const [showModalMessageSucces, setShowModalMessageSucces] = useState(false);

    const [errorMessage, setErrorMessage] = useState("");

// CONFIGURAÇÃO DE MODALs
    const [showModalMessage, setShowModalMessage] = useState(false);
    

    const [showModalSchool, setShowModalSchool] = useState(false);


    // FUNÇÃO DE CRIAÇÃO DE CONTA, É AQUI QUE OS DADOS VAO PARA O BANCO DE DADOS E O LOGIN VAI PRO SUPABASE
    const handleCreateAccount = async() => {
        if(!email || !password || !name || !dataNasc  || !schoolYear) {
            setErrorMessage("Todos os campos precisam estar preenchidos");
            setShowModalMessage(true);
            return;
        };

        const {data, error} = await supabase.auth.signUp({
            email,
            password,
        });

        if(error){
        console.log(error.message);

        setErrorMessage(translateError(error.message));

        setShowModalMessage(true);
        return;
    };

    const user = data.user;

    if(!user){
        return
    };

    //Para salvar dados extras de usuarios na tabela porfile
    const {error: insertError} = await supabase.from("Logins")
    .insert({
        id_client: user.id,
        name: name,
        "email": email,
        date_birth: dataNasc?.toISOString(),
        age:  Number(age),
        school_year: schoolYear,
    });

    if(insertError){
        console.log(insertError.message);

        setErrorMessage(translateError(insertError.message));

        setShowModalMessage(true);

        return;
    };

    setSuccesMessage("Conta criada com sucesso, seja bem-vindo(a)!");
    setShowModalMessageSucces(true);
    
    }

    return (
        <div>
            <img src={azulVerde} alt="bgIcon" className="absolute z-0 top-0 left-0  size-35"/>
            <img src={azulVerdeBaixo} alt="bgIcon" className="absolute z-0 bottom-0 right-0 size-35"/>

            <img src={logo} alt="logo" className="absolute z-0 top-1 left-5 w-25 h-20"/>

            <div className="h-screen w-screen flex items-center justify-center bg-[var(--color-gray-200)] z-2">

                <div className="relative w-80 h-120 items-center bottom-3 bg-[var(--color-gray-150)] rounded-3xl shadow-[0_10px_25px_rgba(0,0,0,0.25)] z-2">
                    
                    <img
                    src={ZupDeitado} alt='png'
                    className="absolute z-5 left-49 bottom-100 size-40"
                />

                    <h1 className="font-bold text-[25px] flex justify-center text-shadow-lg ">CRIAR CONTA</h1>

                <div className="pb-2 pt-1">
                    <InputDefault titleInput="Para começarmos com o pé direito, qual é o seu nome?"
                    placeholder="Digite aqui..."
                    type="text"
                    value={name}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setName(e.target.value)
                    }
                    />
                </div>
                    

                    <div className="relative pb-2 ">
                        <InputDefault titleInput="Qual é a sua data de nascimento?"
                            placeholder="Selecione.."
                            type="text"
                            value={formattedDate}
                            readOnly
                            />

                            <button
                                type="button"
                                onClick={() => setShowModal(!showModal)}
                                className={`absolute bottom-6 right-13 -translate-y-1/3 
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
                                <div className="absolute top-15 right-2 z-60">
                                    {/*Passando as props para o calendário*/}
                                        <InputDate
                                        selectedDate={dataNasc}
                                        setSelectedDate={setDataNasc}
                                        
                                />
                        
                                </div>
                            )}
                    </div>
                
                <div className="relative pb-2 ">
                        <InputDefault titleInput="Em qual série você está?"
                            placeholder="Selecione.."
                            type="text"
                            value={schoolYear}
                            />

                            <button
                                type="button"
                                onClick={() => setShowModalSchool(!showModalSchool)}
                                className={`absolute bottom-0 right-8 -translate-y-1/3 
                                transition-all duration-450 size-15
                                ${showModalSchool ? "-translate-y-16 z-22  top-15 " :" z-10"}
                                `}
                                
                                >
                                <img
                                    src={showModalSchool ? optionsSelected : options }
                                    alt="toggle schoolYear"
                                    className="size-10 mt-6 cursor-pointer shadow- shadow-2xl"
                                />
                                </button>
                            {showModalSchool && (
                                <div className="absolute top-15 -left-3 20 z-5 shadow-2xl">
                                    {/*Passando as props para o calendário*/}
                                        <InputSchoolYear
                                        selectedSchool={schoolYear}
                                        setSelectedSchool={setSchoolYear}
                                        
                                />
                        
                                </div>
                            )}
                    </div>

                
                <div className="pb-2 ">
                    <InputDefault titleInput="Digite seu melhor E-mail"
                    value={email}
                    type="text"
                    placeholder="Digite seu e-mail"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setEmail(e.target.value)
                    }
                    />
                </div>

                <div className="pb-1 ">
                    <InputDefault titleInput="Crie uma senha forte:"
                    placeholder="Digite aqui..."
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setPassword(e.target.value)
                    }
                    />
                    
                        <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-10 bottom-10 -translate-y-1/2 "
                        >
                        <img
                            src={showPassword ? ZupOlhoFechado : ZupOlhoAberto }
                            alt="toggle senha"
                            className="size-13 mt-6 cursor-pointe shadow- shadow-2xl"
                        />
                        </button>
                </div>

                <p className="font-bold text-[14px] flex ml-5 [text-shadow:3px_3px_6px_rgba(0,0,0,0.3)]">Depois você poderá mudar seus dados caso seja necessário!</p>

                            <button className="absolute right-5 w-35 h-8 font-bold bg-[var(--color-success-420)] bottom-4 cursor-pointer rounded-md shadow-2xl mx-auto block shadow-[0_10px_25px_rgba(0,0,0,0.25)]"
                                onClick={handleCreateAccount}> 
                                CRIAR CONTA
                            </button>

                            <p className="font-bold text-[14px] flex ml-25 mt-10 [text-shadow:3px_3px_6px_rgba(0,0,0,0.3)] z-10">Já tem uma conta?</p>

                            <NavLink className="w-35 h-8 flex items-center justify-center font-bold bg-[var(--color-success-420)] mt-2 cursor-pointer rounded-md shadow-2xl mx-auto block shadow-[0_10px_25px_rgba(0,0,0,0.25)]"
                            to='/login'> 
                                LOGIN
                            </NavLink>
                </div>

            </div>

            {showModalMessage && (
                <ModalMessage
                onClose={() => setShowModalMessage(false)} 
                value={errorMessage}/>
                )}

                {showModalMessageSucces && (
                <ModalMessageSucces
                    onClose={() => {
                    
                        setShowModalMessageSucces(false);
                    
                        navigate('/login');
                    
                    }}
                    value={succesMessage}
                />
                )}


        </div>
    )
}
