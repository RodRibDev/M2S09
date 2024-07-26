import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../pages/login";
import { CadastroPage } from "../pages/cadastro";
import { HomePage } from "../pages/dashboard/home";
import { TemplatePrivateRoute } from "../templates/private-route";

export function AppRoutes() {
    return (
        <Routes>
            {/* MINHAS ROTAS PUBLICAS */}
            <Route path="/" element={<LoginPage />} />
            <Route path="/cadastro" element={<CadastroPage />} />
            {/* MINHAS ROTAS PRIVADAS */}
            <Route path="/dashboard" element={<TemplatePrivateRoute />}>
                <Route path="/dashboard" element={<HomePage />}/>
            </Route>
        </Routes>
    )
} 