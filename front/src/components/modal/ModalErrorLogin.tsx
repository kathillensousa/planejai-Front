import { useState } from "react";
import options from "../../assets/icons/optionsIcon.png"
import optionsSelected from "../../assets/icons/optionsSelected.png"

interface IModalErrorLoginProps {
    onClose: () => void;
}

export const ModalErrorLogin = ({onClose}: IModalErrorLoginProps) => {

    return (
        <div className="fixed inset-0 z-2 flex items-center justify-center bg-black/30 ">
            <div className=" 
                relative
                w-[300px]
                h-[150px]
                rounded-2xl
                bg-[var(--color-gray-200)]
                shadow-xl
                ">
                <div >
                    <p className="font-bold
                    text-[20px]
                    text-center
                    p-10 ">
                        E-mail ou senha estão incorretos
                    </p>
                    <button
                            type="button"
                            onClick={onClose}
                            className="absolute top-2 right-2"
                            >
                            <img
                                src={options}
                                alt="close modal"
                                className="size-8 cursor-pointer"
                            />
                        </button>
                </div>
            </div>
        </div>
    )
}