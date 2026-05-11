import { NavLink} from 'react-router-dom';
import ZupEscondido from "../../assets/ZUP/zup-escondido.png"

interface IHomePageProps {
    children?: React.ReactNode;
}
export const HomePage = ({children}: IHomePageProps) => {
    
    return (
        <div className="absolute">
            <div className="z-10 w-90 h-50 mt-3 bg-[var(--color-gray-150)] rounded-2xl shadow-2xl"> 
            <img
            src={ZupEscondido}
            alt="icon"
            className="absolute right-5  
            -top-10 size-20"
            />
            <p className=" pt-2 ml-2 mr-2 text-[14px] font-bold [text-shadow:2px_2px_6px_rgba(0,0,0,0.3)] ">
                Ei Jovem, deixa o Zup cuidar da sua grana com você!!
            </p>
            <p className=" text-[13px] ml-2 mr-2  font-bold [text-shadow:2px_2px_6px_rgba(0,0,0,0.3)] ">
                Cansado de esquecer onde gastou ou ter que anotar tudo manualmente? 😵‍💫  Com o Zup no WhatsApp, você só manda a mensagem e pronto — ele organiza seus gastos, entradas e te dá uma visão clara da sua grana.

Você pode falar com o ZUP a qualquer momento apenas clicando no botão ao lado!
            </p>
            <button className="absolute w-35 h-10 font-bold flex ml-5 [text-shadow:2px_2px_6px_rgba(0,0,0,0.3)] text-[14px]  bg-[var(--color-success-420)] right-3 bottom-2  rounded-xl  rounded-tl-none text-shadow-lg cursor-pointer">
                Quero conhecer o ZUP
            </button>
            
            </div>
        </div>
    )
}