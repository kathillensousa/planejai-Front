import { useState } from "react";
import options from "../../assets/icons/optionsIcon.png"
import optionsSelected from "../../assets/icons/optionsSelected.png"

interface IModalMessageSuccesProps {
    onClose: () => void;
    value: string;
}

export const ModalMessageSucces = ({onClose, value}: IModalMessageSuccesProps) => {

    return (
            <div className="absolute inset-0
                bg-black/30
                z-2
                ">
                
                <div className=" 
                absolute top-1/2 left-1/2
                -translate-x-1/2 -translate-y-1/2
                w-[300px]
                h-[150px]
                rounded-2xl
                bg-[var(--color-gray-150)]
                shadow-xl
                z-50
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