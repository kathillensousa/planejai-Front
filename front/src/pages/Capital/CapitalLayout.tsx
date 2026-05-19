import { ButtonMes } from "../../components/Buttons/ButtonMes"
import { CardCapital } from "../../components/Cards/CardsCapital/CardCapital"
import {AddTransation} from "../../components/modal/AddTransation"
import type { IAccount } from "../../Interfaces/IAccount";

import Add from "../../assets/icons/AddTransation.png";
import filter from "../../assets/icons/filterIcon.webp"
import trash from "../../assets/icons/trashIcon.webp"
import option from "../../assets/icons/optionsIcon.png"
import optionsSelected from "../../assets/icons/optionsSelected.png";

import { useState } from "react";
import { InputDate } from "../../components/input/InputDate";

export const CapitalLayout = () => {

    const [accounts, setAccounts] = useState<IAccount[]>([]);

    const [showAdd, setShowAdd] = useState(false);

    const [dataTrans, setDataTrans] = useState<Date | null>(null);

    const [value, setValue] = useState("");

    const [payment, setPayment] = useState("")

    const accountsColors: Record<string, string> = {
        "Nubank": "border-purple-500",
        "Banco do Brasil": "border-yellow-400",
        "Caixa Tem": "border-blue-500",
    };

    return (
        <div className="min-h-screen overflow-visible">
            
            <div className="flex justify-end w-full z-0">
                <button>
                    <img 
                    src={Add}
                    alt="button"
                    onClick={() => setShowAdd(!showAdd)}
                    className="absolute size-10 right-25 cursor-pointer top-33"
                />
                </button>
                {showAdd && (
                    <div className="absolute flex justify-center items-center w-screen top-50 z-40">
                        {/*Passando as props para o calendário*/}
                        <AddTransation
                        onClose={() => setShowAdd(false)}
                    />
                    
                    </div>
                )}

                <button>
                    <img 
                    src={filter}
                    alt="button"
                    className="absolute size-10 right-13  cursor-pointer top-33"
                />
                </button>

                <button>
                    <img 
                    src={trash}
                    alt="button"
                    className="absolute size-10 right-2 cursor-pointer top-33"
                />
                </button>

            </div>
            <div className="z-20">
                {/* trocar pelo button ano*/ }
            <ButtonMes top="top-36"/>

            <CardCapital
            borderAccount={accountsColors["Banco do Brasil"]}
            month="ABRIL"
            date="30/04/2026"
            value="R$ 565,89"
            account={accounts[1]}
            payment="Transf. bancária"
            />
            </div>
            
        </div>
    )
}