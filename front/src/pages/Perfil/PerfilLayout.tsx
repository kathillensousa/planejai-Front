import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

export const PerfilUser = () => {
    const navigate = useNavigate();

    const {logOut} = useAuth()

    const handleLogOut = async () => {
        const leave = window.confirm("Você deseja sair da sua conta?")
        if (leave) {
            await logOut()
            navigate('/login')
        } else {
            return;
        }
        
    };
    return (
        <div>
            perfil
            <button className="w-35 h-10 font-black bg-[var(--color-success-450)] ml-10 border border-2 rounded-md shadow-2xl" 
                onClick={handleLogOut}> 
                    Sair da conta
                </button>
        </div>
    )
}