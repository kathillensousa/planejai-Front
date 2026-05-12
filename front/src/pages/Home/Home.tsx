import { NavLink} from 'react-router-dom';
import ZupEscondido from "../../assets/ZUP/zup-escondido.png"
import { ButtonMes } from '../../components/Buttons/ButtonMes';

interface IHomePageProps {
    children?: React.ReactNode;
}
export const HomePage = ({children}: IHomePageProps) => {
    
    return (
        <div className="absolute min-h-screen overflow-visible">
            <div className=" z-10 w-90 h-50 -mt-2 bg-[var(--color-gray-150)] rounded-2xl shadow-2xl"> 
            <img
            src={ZupEscondido}
            alt="icon"
            className="absolute right-5  
            -top-16 size-20"
            />

            <p className=" pt-2 ml-2 mr-2 text-[14px] font-bold [text-shadow:2px_2px_6px_rgba(0,0,0,0.3)] ">
                Ei Jovem, deixa o Zup cuidar da sua grana com você!!
            </p>

            <p className=" text-[13px] ml-2 mr-2  font-bold [text-shadow:2px_2px_6px_rgba(0,0,0,0.3)] ">
                Cansado de esquecer onde gastou ou ter que anotar tudo manualmente? 😵‍💫 Com o Zup no WhatsApp, você só manda a mensagem e pronto — ele organiza seus gastos, entradas e te dá uma visão clara da sua grana.

                Você pode falar com o ZUP a qualquer momento apenas clicando no botão ao lado!
            </p>

            <a
            href="https://wa.me/5581992966902?text=Ol%C3%A1%20ZUP%2C%20me%20ajuda%20a%20organizar%20minhas%20finan%C3%A7as%21"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute w-40 h-8 font-bold flex ml-5 p-1 [text-shadow:2px_2px_6px_rgba(0,0,0,0.3)] text-[14px]  bg-[var(--color-success-420)] right-3  rounded-xl  rounded-tl-none text-shadow-lg cursor-pointer transition transform hover:scale-110  -translate-y-1/3 
                                transition-all duration-450 "
            >
                Quero conhecer o ZUP
            </a>
            </div>

        <div className="relative">
            <ButtonMes />
        </div>


        </div>
    )
}