import { NavLink } from "react-router-dom";
import gif from "../assets/init_young_man.gif";

export const LoaderScreen = () => {
    return (
        <div className="bg-[var(--color-gray-100)] h-screen w-screen flex items-center justify-center">

            <div className="relative flex items-center justify-center">

                <img 
                    src={gif} 
                    alt="gif"  
                    className="w-72"
                />

                <img 
                    src="/logo_planejAI.png" 
                    alt="icon"
                    className="w-60 absolute -right-40 -top-40 "
                />

                    <NavLink
                    to="login"
                    className="absolute left-1/2 -translate-x-1/2 -bottom-20 w-38 h-10  flex items-center justify-center bg-[var(--color-success-430)] border  border-transparent rounded-xl font-black text-[var(--color-black-300)] shadow-2xl bg-blend-soft-light"
                    >
                        Entrar
                    </NavLink>
                

            </div>

        </div>
    )
}