import { AddAccount } from "./AddAccount";

import { useEffect, useState } from "react";


import Add from "../../assets/icons/AddTransation.png";
import options from "../../assets/icons/optionsIcon.png";
import optionsSelected from "../../assets/icons/optionsSelected.png";
import type { IAccount } from "../../Interfaces/IAccount";


interface IAccountProps {
    selectedAccount: string,
    setSelectedAccount: React.Dispatch<React.SetStateAction<string>>;
}

export const  Account = ({selectedAccount, setSelectedAccount}: IAccountProps) => {

const [accounts, setAccounts] = useState<IAccount[]>([]);

    const [showCreateAccount, setShowCreateAccount] = useState(false)

    
    useEffect(() => {

    const savedAccounts = localStorage.getItem("accounts");

    if(savedAccounts){
        setAccounts(JSON.parse(savedAccounts));
    }

    }, []);

    return(
        <div className="relative min-w-65 w-auto min-h-30 h-auto border-3 border-[var(--color-success-420)] rounded-xl  bg-[var(--color-gray-180)]">
            <p className="font-bold text-[13px] flex justify-start text-shadow-lg mt-1 p-2">SELECIONAR CONTA BANCÁRIA</p>
                
            <div className="flex flex-col gap-2 p-2 mt-2">
                {accounts.map((account) => (
                
                    <button
                        key={account.id}
                        type="button"
                        onClick={() => setSelectedAccount(account.name)}
                        className="
                        flex
                        items-center
                        gap-3
                        w-full
                        p-2
                        rounded-xl
                        bg-[var(--color-white-250)]
                        shadow-md
                        hover:scale-[1.02]
                        transition-all
                        border-3
                    "
                    style={{
                        borderColor: account.color
                    }}
                    >
                    
                        <div
                            className="w-5 h-5 rounded-full border-2 border-white"
                            style={{
                                backgroundColor: account.color
                            }}
                        />
                        <div className="flex flex-col items-start">
                        
                            <span className="font-bold text-sm">
                                {account.name}
                            </span>
                        
                            <span className="text-xs opacity-70">
                                {account.number}
                            </span>
                        
                        </div>
                        
                    </button>
                ))}
            </div>

                
                <button
                    type="button"
                    onClick={() => setShowCreateAccount(!showCreateAccount)}
                    className={`group absolute left-53 top-6  mt-auto -translate-y-1/3 
                    transition-all duration-450   z-10
                    ${showCreateAccount ? "-translate-y-16 z-22  " :" z-10"}
                    `}
                    >
                    <img
                        src={Add}
                        alt="toggle account"
                        className="size-10   cursor-pointer shadow- shadow-2xl"
                    />
                    <span className="opacity-0
                        group-hover:opacity-100
                        transition-all
                        text-xs
                        p-2
                        rounded-lg
                        bg-[var(--color-black-400)]
                        text-white
                        whitespace-nowrap">
                        Adicionar conta bancária
                    </span>
                    </button>
                {showCreateAccount && (
                    <div className="absolute -top-80 -right-5 z-[999]">
                        <AddAccount
                                onClose={() => {
                                    setShowCreateAccount(false);
                                
                                    const savedAccounts = localStorage.getItem("accounts");
                                
                                    if(savedAccounts){
                                        setAccounts(JSON.parse(savedAccounts));
                                    }
                                }}
                            />
                            <button>
                                <img src={optionsSelected} alt="icon"  onClick={() => setShowCreateAccount(!showCreateAccount)}
                                    className="absolute size-10 top-2 z-30 right-1"
                                />
                            </button>
                    </div>
                    
                )}
                
        </div>
    )

} 