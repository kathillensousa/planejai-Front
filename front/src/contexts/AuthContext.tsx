import { createContext, useCallback, useEffect, useMemo, useState } from "react";
import { supabase } from "../integrations/supabase/client";

interface IAuthcontextProps { // definindo o formato do contexto e tudo que o app pode acessar
    email:string | undefined;
    user: string | undefined;
    accessToken: string | undefined;
    loading: boolean;
    login(email:string, password:string): Promise<string | null>;
    signUp(email:string, password:string): Promise<string | null>;
    logOut(): Promise<void>
}

export const AuthContext = createContext({} as IAuthcontextProps); // isso é um container global, qualquer componenete pode acessa-lo, o props nesse caso força a tipagem

export const AuthProvider = ({children}: React.PropsWithChildren) => {
    
     // definindo os estados
    const [user, setUser] = useState<any>(null)
    const [email, setEmail] = useState<string | undefined>();
    const [accessToken, setAccessToken] = useState<string | undefined>();
    const [loading, setLoading] = useState(true)


    // reusmo do useEffect 
    /*
    Fica “escutando” o Supabase
    Atualiza seu estado automaticamente
    Mantém login sincronizado
    Resolve bugs de: 
    refresh
    logout
    login piscando
    rota protegida falhando
    */

    useEffect(() => {  // executa uma vez
        const {data: listener} = supabase.auth.onAuthStateChange( // escuta as mudanças de autenticção : "upa, me avisa sempre que o estado de login mudar"
            (event: string, session: any) =>{  // callback roda sempre que algo muda, login user accessToken, sempre que mudar, ele roda o event(tipo de mudança) seesion(dados de usuário)
                //console.log("Auth change:", event); log para degub, ele mostra oque mudou no auth

                if(session){  // se existe seção, usuário logado e salva essas informações do usuario para manter as informações dele salvas msmo depois do refresh
                    setUser(session?.user) // salva o usuário completo
                    setEmail(session?.user.email);      //diferença entre usar a ? e nao usar, serve como if(session existir){ pega user} else{ retorna undefined sem quebrar}
                    setAccessToken(session?.access_token)
                } else { // se nao existe seção, retorna usuário deslogado 
                    setUser(null); // remnove o usuário
                    setEmail(undefined); // limpa email
                    setAccessToken(undefined); // remove token
                }
                setLoading(false)  // O LOADING RETORNA FALSO ATE QUE O GETSESSION VALIDE QUE O USUARIO ESTA COM OS DADOS CORRETOS
                // é como dizer já sei se o usuario esta logado ou nao
            }
        );

        return () =>{ // cleanup
            /*
            Quando o componente desmontar:
            remove o listener
            evita memory leak
            evita múltiplos listeners rodando ao mesmo tempo
             */
            listener.subscription.unsubscribe()
        };
    }, [])  // array vázio = retorna só uma vez
    // funçao de login

    //para logar na conta
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

        return null; // RETORNA NULO ENQUANDTO O USUARIO AINDA NAO ESTA LOGADO
        // usar a função de callback assim, evita recriar a função toda vez que renderiza

    },[]) // precisa sempre definir as depencias fa função se nao da erro de argumentos incompletos


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

        setUser(null)
        setEmail(undefined) // limpa os dados do usuario
        setAccessToken(undefined);
    }, [])// serve para nao recriar a função depois deo refresh

    const detaildUser = useMemo(() =>{  // o use memo criar um valor derivado  e do muda esse valor quando o email muda, isso evita processamentos desnecessários
        return `O email do usuário é ${email}`
    },[email]);
    
    //definindo oque o app pode acessar, o children renderiza tudo que estivr dentro do provider
    return (
        <AuthContext.Provider value ={{login, loading, signUp, logOut, accessToken, email, user}}>  
            {children}
        </AuthContext.Provider>
    )
}

