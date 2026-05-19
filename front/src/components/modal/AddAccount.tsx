import { useState } from "react";

import options from "../../assets/icons/optionsIcon.png";
import optionsSelected from "../../assets/icons/optionsSelected.png";

import type { IAccount } from "../../Interfaces/IAccount";
import { InputDefault } from "../input/InputDefault";
import { InputColor } from "../input/InputColorAccount";
import { ModalMessageSucces } from "./ModalSucces";


interface IAddAccountProps {
    onClose: () => void;
}

export const AddAccount = ({ onClose }: IAddAccountProps)  => {
    
    const [accounts, setAccounts] = useState<IAccount[]>([]);


    const [showModalAccounts, setShowModalAccounts] = useState(false);

    const [nameAccount, setName] = useState("")

    const [numberAccount, setNumberAccount] = useState("")

    const [agency, setAgency] = useState("");

    const [borderAccount, setBorderAccount] = useState("");

    const [succesMessage, setSuccesMessage] = useState("");
    const [showModalMessageSucces, setShowModalMessageSucces] = useState(false);


// configurando o handle para slavr as contas np local storage por enquanto
    const handleCreateAccount = () => {

        // para pegar as contas quenjpa estao salvas

        const savedAccounts = localStorage.getItem("accounts");

        const currentAccounts = savedAccounts
        ? JSON.parse(savedAccounts)
        :[];

        const newAccount: IAccount = {
            id: Date.now(),
            name: nameAccount,
            number: numberAccount,
            agency: agency,
            color: borderAccount,
        };

        const updateAccounts =[
            ...currentAccounts,
            newAccount
        ];

        setAccounts(updateAccounts);

        localStorage.setItem(
            "accounts",
            JSON.stringify(updateAccounts)
        );

        setName("");
        setNumberAccount("");
        setAgency("");
        setBorderAccount("");

        setShowModalAccounts(false);

        console.log("Conta criada:", newAccount);
        setSuccesMessage("Conta bancária adicionada com sucesso!");
        setShowModalMessageSucces(true);
    }


    return (
        <div className="flex justify-center">
            <div className="w-80 h-120 bg-[var(--color-white-250)] border-3 border-[var(--color-success-420)] rounded-xl ">
            
            <p className="font-bold text-[18px] flex justify-start pl-2 text-shadow-lg mt-3">ADICIONAR CONTA BANCÁRIA</p>

            <div className="pb-2 pt-5">
                <InputDefault titleInput="Como você quer chamar essa conta?"
                placeholder="Digite aqui..."
                type="text"
                value={nameAccount}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setName(e.target.value)
                }
                />
            </div>
                
            <div className="pb-2 pt-5">
                <InputDefault titleInput="Qual é o numero da conta?"
                placeholder="00000000-0"
                type="text"
                value={numberAccount}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setNumberAccount(e.target.value)
                }
                />
            </div>

            <div className="pb-2 pt-5">
                <InputDefault titleInput="Qual é a agencia?"
                placeholder="0000"
                type="text"
                value={agency}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setAgency(e.target.value)
                }
                />
            </div>

            <div className="relative pb-2 ">
                <InputDefault titleInput="Escolhe uma cor pra deixar padrão da conta:"
                    placeholder="Selecione.."
                    type="text"
                    value={borderAccount}
                    />
                    <button
                        type="button"
                        onClick={() => setShowModalAccounts(!showModalAccounts)}
                        className={`absolute bottom-0 right-8 -translate-y-1/3 
                        transition-all duration-450 size-15
                        ${showModalAccounts ? "-translate-y-16 z-22  top-15 " :" z-10"}
                        `}
                        
                        >
                        <img
                            src={showModalAccounts ? optionsSelected : options }
                            alt="toggle schoolYear"

                            className="size-10 mt-6 cursor-pointer shadow- shadow-2xl"
                        />
                        </button>
                    {showModalAccounts && (
                        <div className="absolute top-15 -left-3 20 z-5 shadow-2xl">
                            {/*Passando as props para o calendário*/}
                                <InputColor
                                selectedColor={borderAccount}
                                setSelectedColor={setBorderAccount}
                                
                        />
                
                        </div>
                    )}
                </div>

                <div className="flex justify-center mt-6">

                    <button
                        type="button"
                        onClick={handleCreateAccount}
                        className="
                            bg-[var(--color-success-420)]
                            text-white
                            px-6
                            py-2
                            rounded-xl
                            font-bold
                            shadow-xl
                            hover:scale-105
                            transition-all
                        "
                    >
                        Salvar conta
                    </button>

                </div>
        </div>
        {showModalMessageSucces && (
            <ModalMessageSucces
                onClose={() => {
                
                    setShowModalMessageSucces(false);

                    onClose();
                }}
                value={succesMessage}
            />
            )}
    </div>
    )
}