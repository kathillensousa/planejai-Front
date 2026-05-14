import { useState } from "react";


import options from "../../assets/icons/optionsIcon.png";
import optionsSelected from "../../assets/icons/optionsSelected.png";
import { InputDate } from "../input/InputDate";

interface IAddTransationProps {

    onClose: () => void;
    
    value?: any;
    data?: Date;
    account?: any;
    payment?: any;
}

export const AddTransation = ({value, data, account, payment }: IAddTransationProps) => {

    const [showModal, setShowModal] = useState(false);

    const [dataTransition, setDataTransition]= useState();

    return (
        <div className="flex justify-center z-99">
            <div className="w-80 h-120 bg-amber-100 ">
            teste modal add

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
                    
                        <InputDate
                        selectedDate={dataTransition}
                        setSelectedDate={setDataTransition}

                />
                        </div>
                )}
                    
                
        </div>
    </div>
    )
}