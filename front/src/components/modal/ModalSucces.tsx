import { useState } from "react";
import options from "../../assets/icons/optionsIcon.png"
import optionsSelected from "../../assets/icons/optionsSelected.png"

interface IModalMessageSuccesProps {
    onClose: () => void;
    value: string;
}

export const ModalMessageSucces = ({onClose, value}: IModalMessageSuccesProps) => {

    return (
            <div className="fixed inset-0
            bg-black/30
            z-40
            flex items-center justify-center
                ">
                
                <div className=" 
                w-[300px]
                h-[150px]
                rounded-2xl
                bg-[var(--color-gray-150)]
                shadow-xl
                relative
                ">
                    <p className="font-bold
                    text-[20px]
                    text-center
                    p-10 ">
                        {value}
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
            
    )
}