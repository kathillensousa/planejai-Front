import seta from "../../assets/icons/optionsIcon.png"
import { InputDate } from "../input/InputDate"

function ModalBody(props: any) {

    return (
        <div className='h-screen w-screen flex justify-center items-center fixed top-0 left-0  bg-[black] bg-opacity-20' style={{ zIndex: 4 }}>

            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-5 outline-none focus:outline-none">
                <div className="relative h-[100%] pt-16">
                    {/*content*/}
                    <div className="w-85 h-100 overflow-y-scroll border-0 rounded-lg shadow-lg relative flex flex-col bg-[var(--color-gray-150)] outline-none focus:outline-none ps-3" style={{ zIndex: 400 }}>
                        {/*header*/}
                            <button  onClick={() => props.closeModal(false)}>
                                <img src={seta} className=" absolute h-10 w-10 mt-2" />
                            </button>
                        {props.children}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ModalBody