import { use, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../../hooks/useAuth"

import ZupOlhoAberto from "../../assets/ZUP/ZupOlhoAberto.png"
import ZupOlhoFechado from "../../assets/ZUP/ZupOlhoAberto.png"




export const LoginPage = () => {

    const {login, accessToken} = useAuth() // use auth retorna um objeto


    const [email, setEmail] = useState<string>("")
    

    const [password, setPassword] = useState<string>("")
    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate();


    const handleLogin = async () => {
        if(!email || !password){
            alert("Email ou senha estao incorretos");
            return;
        };

        const error = await login(email,password)// aguarda a autenticação

        console.log("erro login:", error);

        if (error) {
            console.error(error);
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
        <>
            <div className="h-screen w-screen flex items-center justify-center bg-[var(--color-gray-200)]">

                

                <div className="w-80 h-100 items-center bg-[var(--color-gray-150)] border border-[var(--color-gray-150)]  rounded-3xl shadow-2xl">
                    <h1 className="font-bold text-[30px] flex justify-center">LOGIN</h1>
                <div>
                    <h1 className="font-bold text-[20px] flex ml-5 mt-10 [text-shadow:3px_3px_6px_rgba(0,0,0,0.3)]">EMAIL</h1>
                    <input className="w-50 h-10 bg-[var(--color-gray-200)] ml-5 border rounded-r-2xl  rounded-b-2xl shadow-2xl "
                    value={email}
                    type="text"
                    placeholder="Digite seu e-mail"
                    onChange={e => setEmail(e.target.value)}
                    />
                </div>
                    
                    <div className="relative">

                    <h1 className="font-bold text-[20px] flex ml-5 mt-10 [text-shadow:3px_3px_6px_rgba(0,0,0,0.3)]">SENHA</h1>
                    <input  className="w-50 h-10 bg-[var(--color-gray-200)] ml-5 border rounded-r-2xl  rounded-b-2xl shadow-2xl "
                    value={password}
                    type={showPassword ? "text" : "password"}
                    placeholder="Digite sua senha"
                    onChange={e => setPassword(e.target.value)}
                    />

                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-2 top-1/2 -translate-y-1/2"
                        >
                        {showPassword ? (
                            <img src={ZupOlhoAberto} alt="Esconder senha" className="size-"/>
                        ) : (
                            <img src={ZupOlhoFechado} alt="mostrar senha"/>  
                        )}
                    </button>
                    

                </div>

                <button className="w-35 h-10 font-black bg-[var(--color-success-450)] ml-10 border border-2 rounded-md shadow-2xl" 
                onClick={handleLogin}> 
                    Entrar
                </button>


                </div>

            </div>
        </>
    )
}