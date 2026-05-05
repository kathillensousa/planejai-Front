import {Navigate, Outlet} from "react-router-dom"
import { useAuth } from "../../hooks/useAuth";

export const PrivateRoute = () => {
    const {accessToken} = useAuth();

    if(!accessToken){
        return <Navigate to="/login"/> //caso o usuario nao tenha o token de acesso e tente entrar nas outras oages atraves da rota, ele irá voltar para a page de login
    }
    return <Outlet />; // se ele esiver logado, vai retornar as pages normalmete
    
}