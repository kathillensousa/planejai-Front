import { useEffect, useState } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import { useAuth } from "../../hooks/useAuth"

import ZupOlhoAberto from "../../assets/ZUP/ZupOlhoAberto.png"
import ZupOlhoFechado from "../../assets/ZUP/ZupOlhoFechado.png"
import ZupSentado from "../../assets/ZUP/ZupSentado.png"

import azulVerde from "../../assets/background-icons/azulVerde.png"
import azulVerdeBaixo from "../../assets/background-icons/azulVerdeBaixo.png"
import logo from "../../assets/Logo_planejAI.png";
import { ModalErrorLogin } from "../../components/modal/ModalErrorLogin"

export const LoginPage = () => {

    const {login, accessToken} = useAuth() // use auth retorna um objeto


    const [email, setEmail] = useState<string>("")
    

    const [password, setPassword] = useState<string>("")
    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate();

    const [showErrorModal, setShowErrorModal] = useState(false);

    const handleLogin = async () => {
        if(!email || !password){
            setShowErrorModal(true)
            return;
        };

        const error = await login(email,password)// aguarda a autenticação

        console.log("erro login:", error);

        if (error) {
            console.error(error);
            setShowErrorModal(true);
            return error;
        }   
        //navigate('/home') // força a navegação antes do estado global atualizar, faaz retornar o acesso do usuario como false, e o private route roda com o valor antigo
    };

    useEffect(() =>{
        if(accessToken){
            navigate('/home');
        };
    }, [accessToken])

    return (
        <div>
            <img src={azulVerde} alt="bgIcon" className="absolute z-0 top-0 left-0  size-35"/>
            <img src={azulVerdeBaixo} alt="bgIcon" className="absolute z-0 bottom-0 right-0 size-35"/>

            <img src={logo} alt="logo" className="absolute z-0 top-3 right-5 w-25 h-20"/>

            <div className="h-screen w-screen flex items-center justify-center bg-[var(--color-gray-200)] z-2">

                <div className="relative w-80 h-100 items-center bg-[var(--color-gray-150)] rounded-3xl shadow-[0_10px_25px_rgba(0,0,0,0.25)] z-2">
                    
                    <img
                    src={ZupSentado} alt='png'
                    className="absolute z-5 right-47 bottom-89 size-35"
                    />

                    <h1 className="font-bold text-[30px] flex justify-center text-shadow-lg">LOGIN</h1>

                <div>
                    <h1 className="font-bold text-[20px] flex ml-5 mt-10 [text-shadow:3px_3px_6px_rgba(0,0,0,0.3)]">EMAIL</h1>
                    <input className="w-50 h-10 bg-[var(--color-gray-200)] ml-5 border rounded-r-2xl  rounded-b-2xl shadow-2xl pl-3 "
                    value={email}
                    type="text"
                    placeholder="Digite seu e-mail"
                    onChange={e => setEmail(e.target.value)}
                    />
                </div>
                    
                    <div className="relative">

                    <h1 className="font-bold text-[20px] flex ml-5 mt-10 [text-shadow:3px_3px_6px_rgba(0,0,0,0.3)]">SENHA</h1>
                    
                    
                        <input  className="w-50 h-10 bg-[var(--color-gray-200)] ml-5 border rounded-r-2xl  rounded-b-2xl shadow-2xl pl-3 "
                        value={password}
                        type={showPassword ? "text" : "password"}
                        placeholder="Digite sua senha"
                        onChange={e => setPassword(e.target.value)}
                        />

                        <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-5 top-1/2 -translate-y-1/2 "
                        >
                        <img
                            src={showPassword ? ZupOlhoFechado : ZupOlhoAberto }
                            alt="toggle senha"
                            className="size-15 mt-6 cursor-pointe shadow- shadow-2xl"
                        />
                        </button>

                </div>

                <button className="w-35 h-10 font-bold bg-[var(--color-success-420)] mt-10 cursor-pointer rounded-md shadow-2xl mx-auto block shadow-[0_10px_25px_rgba(0,0,0,0.25)]"
                onClick={handleLogin}> 
                    ENTRAR
                </button>

                </div>

                <div>
                    <p className="absolute inset-x-0 bottom-20 text-center font-bold"> Ainda não tem uma conta?</p>

                    <NavLink 
                    to='/createaccount'
                    className="w-35 py-3 px-5 text-sm font-bold bg-[var(--color-success-420)] cursor-pointer rounded-md shadow-2xl absolute left-1/2 -translate-x-1/2 bottom-7 shadow-[0_10px_25px_rgba(0,0,0,0.25)]"
                    > 
                    CRIAR CONTA
                </NavLink>
                </div>

            </div>
            {showErrorModal && (
            <ModalErrorLogin
            onClose={() => setShowErrorModal(false)} />
            )}

        </div>
    )
}