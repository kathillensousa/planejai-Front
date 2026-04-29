import { BrowserRouter, Route, Routes} from "react-router-dom";


import { PlanejAI } from "./pages/PlanejAI/PlanejAI";
import { CapitalLayout } from "./pages/Capital/CapitalLayout"
import { GastosLayout } from "./pages/Gastos/GastosLayout"
import { DividasLayout } from "./pages/Dividas/DividasLayout";
import { PerfilUser } from "./pages/Perfil/PerfilLayout";
import { HomePage } from "./pages/Home/Home";
import { LayoutDefault } from "./Layout/LayoutDefault/LayoutDefault";
import { LoginPage } from "./pages/Login/Login";

function App () {

    return (
            <BrowserRouter>
            <Routes>
                <Route 
                path="/login"
                element={
                    <LoginPage />
                }
                />
                <Route element={<LayoutDefault />}>
                    <Route 
                        path="/"
                        element={
                            <HomePage/>
                            }
                    />

                    <Route 
                        path="/planejai"
                        element={
                            <PlanejAI/>
                            }
                        handle={{title:"Oque é o PlanejAI"}}
                    />

                    <Route 
                        path="/perfil"
                        element={
                            <PerfilUser/>
                        }
                        handle={{title:"Perfil de usuário"}}
                    />


                    <Route 
                        path="/capital"
                        element={
                            <CapitalLayout />
                        }
                        handle={{title:"Controle de Capital"}}
                    />

                    <Route 
                        path="/gastos"
                        element={
                            <GastosLayout/>
                        }
                        handle={{title:"Controle de Gastos"}}
                    />

                    <Route 
                        path="/dividas"
                        element={
                            <DividasLayout/>
                        }
                        handle={{title:"Controle de Divídas"}}
                    />

                    <Route 
                        path="*"
                        element={
                            <HomePage />
                        }
                        handle={{title:"Página inicial - Visão Geral das finanças "}}
                    />
                </Route>
            </Routes>
        </BrowserRouter>
        
    );
};

export default  App;