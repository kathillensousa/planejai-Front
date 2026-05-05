import { useContext } from "react"; // puxa informações do context, que sao os dados de login do usuario
import { AuthContext } from "../contexts/AuthContext"; // é o contexto  que vem do provider. emaiol, accessTOlen,lopgin e logOut


// esse é o hook principal

export const useAuth = () => { // é o cria um hook.Ao inves de chamar o useontext tpda hora passando cmo arg os dados de login, é so chamrar p useAuth todas as vezes que for necessáriobuscar os dados do cliente
    
    return useContext(AuthContext);
};

//hook auxilixar 

export const  useIsAuthenticated = () => {  // hook auxilixar para verificar se o usuario esta logado
    const {accessToken} = useAuth(); // pega o token do usuario
    return !!accessToken; //converte para boleano if "123" true(logado) else "undefined" false(deslogado)
}  