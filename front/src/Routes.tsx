import { BrowserRouter, Route, Routes} from "react-router-dom";

import { AppLayout } from "./pages/App/AppLayout";
import { PlanejAI } from "./pages/PlanejAI";
import { VisaoGeral } from "./pages/Geral/Geral";
import { CapitalLayout } from "./pages/Capital/CapitalLayout"
import { GastosLayout } from "./pages/Gastos/GastosLayout"
import { DividasLayout } from "./pages/Dividas/DividasLayout";
import { PerfilUser } from "./pages/Perfil/PerfilLayout";

export const AppRoutes = () => {


    return (
        <BrowserRouter>
            <Routes>

                <Route 
                    path="/planejai"
                    element={
                        <AppLayout>
                            <PlanejAI/>
                            </AppLayout>
                        }
                />

                <Route 
                    path="/perfil"
                    element={
                        <AppLayout>
                            <PerfilUser/>
                        </AppLayout>
                    }
                />
                <Route 
                    path="/"
                    element={
                        <AppLayout>
                            <VisaoGeral/>
                            </AppLayout>
                        }
                />

                

                <Route 
                    path="/capital"
                    element={
                        <AppLayout>
                            <CapitalLayout />
                        </AppLayout>
                    }
                />

                <Route 
                    path="/gastos"
                    element={
                        <AppLayout>
                            <GastosLayout/>
                            </AppLayout>
                        }
                />

                <Route 
                    path="/dividas"
                    element={
                        <AppLayout>
                            <DividasLayout/>
                            </AppLayout>
                        }
                />

                <Route 
                    path="*"
                    element={
                        <AppLayout>
                            <VisaoGeral/>
                            </AppLayout>
                        }
                />
            </Routes>
        </BrowserRouter>
    );
};