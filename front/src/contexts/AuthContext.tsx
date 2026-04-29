import { createContext, useCallback, useContext, useMemo, useState } from "react";

interface IAuthcontextProps {
    email: string | undefined;
    accessToken: string | undefined;
    dataildUser: string | undefined;


    login(email: string, password: string): void;
    logOut(): void;

}

const AuthContext = createContext({} as IAuthcontextProps);  // é um contexto do react, disponibiliza o context.provider

//provider serve para colocar em volta da aplicação

export const AuthProvider = ({children}: React.PropsWithChildren) => {
    const [email, setEmail] = useState<string | undefined>(
        localStorage.getItem("email") || undefined
    );  //<string> para definir  que ess state vai ser do tipo striong

    const [accessToken, setAccessToken] = useState<string | undefined> (
        localStorage.getItem("accessToken") || undefined
    )

    const login = useCallback((email: string, password: string) => {
        console.log(email, password);

        const token = crypto.randomUUID()
        setEmail(email);
        setAccessToken(token)     // isso gera um uuid como string aleatória
        //  o certo deveria chamar o back pra conseguir um token de autenticação
        localStorage.setItem("token", token);
        localStorage.setItem("email", email);
    }, []); // array de dependencias,a função só é reconstruída se colocar alguma coisa dentro do array de dependencias
// quando o email for alterado, essa função vai ser redeclarada aop inves de ser redeclarado todas as vezse que renderizar a interface
    const logOut = useCallback(() => {
        setEmail(undefined);
        setAccessToken(undefined);   
        
        localStorage.removeItem("token");
        localStorage.removeItem("accessToken");
    }, []);

        const dataildUser = useMemo(() =>{
            return`O  email do usuário é ${email}`
    }, [email]); // sempre que o email for alterado, o use memo vaiu armazenar um valor novo

    return (
        <AuthContext.Provider value={{login, logOut, accessToken, email, dataildUser}}>
            {children}

        </AuthContext.Provider>
    );

}
export const useAuthContext = () => {
    return useContext(AuthContext);
} // isso é umm hook personalizado

export const useIsAuthenticated = () => {
    const {accessToken} = useAuthContext(); // se tiver autenticado ele retorna uma string, e se nao tiver, ele retorna undefined

    return !!accessToken; //   O access token é uyma string,se negar ele, ele retorna falso. Se negar o falso, ele retorna true, por isso tem o ! no inicio
    // Para verificar se negaçao de accesstoken é negação, negar o falso retorna true
}
