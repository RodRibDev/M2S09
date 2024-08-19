import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../pages/login";
import { CadastroPage } from "../pages/cadastro";
import { HomePage } from "../pages/dashboard/home";
import { TemplatePrivateRoute } from "../templates/private-route";
import { CadastroPage2 } from "../pages/cadastro/index02";

export function AppRoutes() {
    return (
        <Routes>
            
            <Route path="/" element={<LoginPage />} />
            <Route path="/cadastro" element={<CadastroPage />} />
            <Route path="/cadastro2" element={<CadastroPage2 />} />
            
            <Route path="/dashboard" element={<TemplatePrivateRoute />}>
                <Route path="/dashboard" element={<HomePage />}/>
            </Route>
        </Routes>
    )
} 