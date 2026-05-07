import { BrowserRouter, Route, Routes} from "react-router-dom";

import { LoginPage } from "./pages/Login/Login";

//rotas privadas
import { PrivateRoute } from "./Authentication/PrivatesRoutes";
import { PlanejAI } from "./pages/PlanejAI/PlanejAI";
import { CapitalLayout } from "./pages/Capital/CapitalLayout"
import { GastosLayout } from "./pages/Gastos/GastosLayout"
import { DividasLayout } from "./pages/Dividas/DividasLayout";
import { PerfilUser } from "./pages/Perfil/PerfilLayout";
import { HomePage } from "./pages/Home/Home";
import { LayoutDefault } from "./Layout/LayoutDefault/LayoutDefault";
import { LoaderScreen } from "./pages/LoaderScreen";
import { CreateAccount } from "./pages/Register/RegistrationForm";
import ModalBody from "./components/modal/ModalBody";
import { ModalErrorLogin } from "./components/modal/ModalErrorLogin";

function App () {

    return (
            <BrowserRouter>
            <Routes>

                <Route 
                path="*"
                element={
                    <LoaderScreen/>
                }
                />

                <Route 
                path="/login"
                element={
                    <LoginPage />
                }
                />
                <Route 
                path="/modal"
                element={
                    <ModalErrorLogin />
                }
                />

                <Route
                path="/createaccount"
                element={<CreateAccount/>}
                />

                
                <Route element={<PrivateRoute/>}> 
                <Route element={<LayoutDefault />}>
                    <Route 
                        path="/home"
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

                    
                </Route>
                </Route>
                
                
            </Routes>
        </BrowserRouter>
        
    );
};

export default  App;