import { createContext, useContext, useState } from "react";

export const AuthContext = createContext({
    user: null, // pode ser null ou {}
    signIn: () => {}, // função entrar na aplicação
    signOut: () => {} // função para "remover" o estado do usuario da aplicar 
})

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null)

    function signIn(data) {
        // console.log('console no contexto', data)
        if(data.email !== "fulano@teste.com.br" || data.password !== "123") {
            throw new Error("Email/Senha invalida")
        }
        /// fetch ... 
        
        setUser({
            id: Date.now(),
            first_name: "Fulano de tal",
            email: data.email,
        })
        
    }

    function signOut() {
        setUser(null)
    }

    return <AuthContext.Provider value={{ user, signIn, signOut }}>{children}</AuthContext.Provider>
}

export function useAuth() {
    const contexto = useContext(AuthContext)

    return contexto
}