import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { supabase } from "../integrations/supabase/client";


interface IAuthcontextProps { // definindo o formato do contexto e tudo que o app pode acessar
    email:string | undefined;
    accessToken: string | undefined;
    login(email:string, password:string): Promise<string | null>;
    signUp(email:string, password:string): Promise<string | null>;
    logOut(): Promise<void>
}

export const AuthContext = createContext({} as IAuthcontextProps); // isso é um container global, qualquer componenete pode acessa-lo, o props nesse caso força a tipagem

export const AuthProvider = ({children}: React.PropsWithChildren) => {
    
     // definindo os estados
    const [email, setEmail] = useState<string | undefined>();

    const [accessToken, setAccessToken] = useState<string | undefined>();

    useEffect(() => {  // roda so uma vez quando o app carrega
        const getSession = async () => {
            const {data} = await supabase.auth.getSession(); // busca no supabase se tem algm logado

            const session = data.session; /// se existir sessão, o usuário já estava logado

            if(session){  // atualiza o estado com os dados do usuário
                setEmail(session?.user.email);
                setAccessToken(session?.access_token)
            };
        };

        getSession();
    }, [accessToken])  // resumindo, mantem o user logado mesmo após atualizar a página

    // funçao de login

    const login = useCallback(async(email: string, password: string) => {

        const {data, error} = await supabase.auth.signInWithPassword({ // envia pro supa o email e senha
            email,
            password,
        });

        if(error){ // se der erro ao enviar os dados para o supa, o sistema para e exibe a mensagem de erro
            return error.message // para retornar a mensagem de erro
        };

        //se der certo, salva o usuario e salva o token

        const session = data.session;

        setEmail(session?.user.email);
        setAccessToken(session.access_token)

        return null;
        // usar a função de callback assim, evita recriar a função toda vez que renderiza

    },[]) // precisa sempre definir as depencias fa função se nao da erro de argumentos incompletos

    //para logar na conta 

    const signUp = useCallback(async (email:string, password:string) =>{
        const {data, error} = await supabase.auth.signUp({  // chamada para o supa “Supabase, cria um usuário com esse email e senha”
            email,
            password,
        });
        //se retrnar data é pq deu certo e se retornar erro é autoexplicativo

        if(error){
            return error.message
        };

        const session = data.session;  // tradução sessão = usuairio logado + token

        if(session){
            setEmail(session.user.email ?? undefined);  //se o suaro estver logado, salva email e token. o ??undefined evita crro caaso o enaill seja null
            setAccessToken(session.access_token)
        };

        return null; //sucesso

    }, []);// serve para nao recriar a função depois deo refresh

    //para sair da conta
    const logOut = useCallback(async () => {
        await supabase.auth.signOut(); //para remover a sessao do supabase

        setEmail(undefined) // limpa os dados do usuario
        setAccessToken(undefined);
    }, [])// serve para nao recriar a função depois deo refresh

    const detaildUser = useMemo(() =>{  // o use memo criar um valor derivado  e do muda esse valor quando o email muda, isso evita processamentos desnecessários
        return `O email do usuário é ${email}`
    },[email]);
    
    //definindo oque o app pode acessar, o children renderiza tudo que estivr dentro do provider
    return (
        <AuthContext.Provider value ={{login,signUp, logOut, accessToken, email}}>  
            {children}
        </AuthContext.Provider>
    )
}

