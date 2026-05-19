import { useState } from "react";


import options from "../../assets/icons/optionsIcon.png";
import optionsSelected from "../../assets/icons/optionsSelected.png";
import { InputDate } from "../input/InputDate";
import { InputDefault } from "../input/InputDefault";
import { Account } from "./ModalAccount";

interface IAddTransationProps {

    onClose: () => void;
}

export const AddTransation = ({onClose}: IAddTransationProps) => {

    const [showModalDate, setShowModalDate] = useState(false);


    const [showModalAccounts, setShowModalAccounts] = useState(false);

    const [dataTransition, setDataTransition]= useState<Date | null>(null);

    const [valueTransation, setValue] = useState("");

    const [account, setAccount] = useState("");

    const [succesMessage, setSuccesMessage] = useState("");
    const [showModalMessageSucces, setShowModalMessageSucces] = useState(false);


    const formattedDate = dataTransition
    ? dataTransition.toLocaleDateString("pt-BR")
    : "";

    return (
        <div className="flex justify-center z-40">
            <div className="w-80 h-120 bg-[var(--color-white-250)] border-3 border-[var(--color-success-420)] rounded-xl ">
            
            <p className="font-bold text-[18px] flex justify-center text-shadow-lg mt-3">ADICIONAR TRANSAÇÃO</p>

            <button className="absolute">
                <img src={optionsSelected} alt="icon"  onClick={onClose}
                    className="relative size-10 bottom-8 pl-[4px] z-30 left-66"
                />
            </button>

            <div className="pb-2 pt-5">
                    <InputDefault titleInput="Qual foi o valor?"
                    placeholder="R$ 0,00" 
                    type="text"
                    value={valueTransation}
                    onChange={(e) => {  // executa toda vez que o usuario digita algo no input
                        let value = e.target.value.replace(/\D/g, ""); // fiktra tudo que nao for m=numero no valor digitado e exclui, deixando spo os valoes numericos 

                        value = (Number(value) / 100).toLocaleString("pt-BR", {  // transforma a string em um numero e fdivide por 100 ex.: "1234" = 12.34  isso seve para criar os centavos auto e depois formata para o padrao br
                            minimumFractionDigits:2,
                            maximumFractionDigits:2, // forçam sempre duas casas decimais
                        });

                        setValue(value) // para atualizar o estado do input 
                    }}
                    />
                </div>
                
                <div className="relative pb-2 ">
                    <InputDefault titleInput="Qual é foi a data da transação?"
                        placeholder="Selecione.."
                        type="text"
                        value={formattedDate}
                        readOnly
                        />
                        <button
                            type="button"
                            onClick={() => setShowModalDate(!showModalDate)}
                            className={`absolute bottom-6 right-13 -translate-y-1/3 
                            transition-all duration-450 size-10
                            ${showModalDate ? "-translate-y-16 z-20  top-15 " :" z-10"}
                            `}
                            >
                            <img
                                src={showModalDate ? optionsSelected : options }
                                alt="toggle date"
                                className="size-10 mt-6 cursor-pointer shadow- shadow-2xl"
                            />
                            </button>
                        {showModalDate && (
                            <div className="absolute top-16 right-2 z-[1000]">
                                {/*Passando as props para o calendário*/}
                                    <InputDate
                                    selectedDate={dataTransition}
                                    setSelectedDate={setDataTransition}
                                    
                            />
                    
                            </div>
                        )}
                    </div>
                
                <div className="relative pb-2 ">
                    <InputDefault titleInput="Qual foi a conta?"
                        placeholder="Selecione..."
                        type="text"
                        value={account}
                        readOnly
                        />
                        <button     
                            type="button"
                            onClick={() => setShowModalAccounts(!showModalAccounts)}
                            className={`absolute bottom-6 right-13 -translate-y-1/3 
                            transition-all duration-450 size-10
                            ${showModalAccounts ? "-translate-y-16 z-20  top-15 " :" z-10"}
                            `}
                            >
                            <img
                                src={showModalAccounts ? optionsSelected : options }
                                alt="toggle date"
                                className="size-10 mt-6 cursor-pointer shadow- shadow-2xl"
                            />
                            </button>
                        {showModalAccounts && (
                            <div className="absolute top-16 right-2 z-[1000]">
                                <Account
                                selectedAccount={account}
                                setSelectedAccount={setAccount}
                            />
                    
                            </div>
                        )}
                    </div>
        </div>
    </div>
    )
}