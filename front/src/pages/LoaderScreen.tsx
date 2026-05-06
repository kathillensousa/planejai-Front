import { NavLink } from "react-router-dom";

import logo from "../assets/Logo_planejAI.png";
import Zup from "../assets/ZUP/Zup.gif"
export const LoaderScreen = () => {

    return (
        <div className="bg-[var(--color-black-1)] h-screen w-screen flex items-center justify-center z-0">
            
            <div className="relative flex items-center justify-center">
                <img src={logo} alt="logo" className="absolute bottom-85 left-50 w-35 md:w-38 lg:w-42 h-auto z-3 "/>

                <img
                src={Zup} alt='gif'
                className=" w-70 h-100 flex z-0 rounded-xl"
                />
                

                    <NavLink
                    to="/login"
                    className="absolute left-1/2 -translate-x-1/2 -bottom-15 w-50 py-3 px-4 text-sm  flex items-center justify-center  font-bold bg-[var(--color-success-420)] cursor-pointer rounded-xl shadow-2xl z-5 text-center leading-none"
                    >
                    QUERO CONHECER
                    </NavLink>
                

            </div>

        </div>
    )
}