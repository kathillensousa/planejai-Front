import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuthContext } from "../../contexts/AuthContext"




export const LoginPage = () => {


    const login = useAuthContext()
    const [email, setEmail] = useState<string>("")
    

    const [password, setPassword] = useState<string>("")
    const [showPassword, setShowPassword] = useState(false);


    const [accessToken, setAccessToken] = useState<string | undefined> (
        localStorage.getItem("accessToken") || undefined
    )
    const navigate = useNavigate();

    const handleLogin = () => {

        if (!email || !password) {
            alert("Preencha email e senha"); // nao deixa passar enquanto email e sebnha nao foram preenchidos
        return;
    }

        login(email,password)  // o login vai gerar um token de acesso pra liberar entrar no home
        
        navigate('/home')
    }
    return (
        <>
            <div className="h-screen w-screen grid place-items-center bg-[var(--color-transparent-300)]">

                <h1 className="font-black text-[30px] tracking-wide mb-2">LOGIN</h1>

                <div className="w-150 h-150 bg-[var(--color-transparent-400)]border border-5 border-[var(--color-success-500)]  rounded-xl shadow-2xl">

                <div>
                    <h1 className="font-black text-[20px] tracking-wide ml-10 mt-25">EMAIL</h1>
                    <input className="w-100 h-14 bg-[var(--color-transparent-400)] ml-10 border border-2 rounded-md shadow-2xl"
                    value={email}
                    type="text"
                    placeholder="Digite seu e-mail"
                    onChange={e => setEmail(e.target.value)}
                    />
                </div>
                    
                    <div className="relative">

                    <h1 className="font-black text-[20px] tracking-wide ml-10 mt-25">SENHA</h1>
                    <input className="w-100 h-14 bg-[var(--color-transparent-400)] ml-10 border border-2 rounded-md shadow-2xl"
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
                        {showPassword ? "🙈" : "👁️"}
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