import { createContext, useContext, useState } from "react";

export const AuthContext = createContext({
    user: null,
    signIn: () => {},
    signOut: () => {} 
})

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null)

    async function signIn(data) {
        try {
            const response = await fetch('https://dummyjson.com/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    username: data.username,
                    password: data.password,
                    expiresInMins: 30
                })
            });

            const userdata = await response.json();

            if (response.ok) {
                setUser(userdata);
                localStorage.setItem('@S09M2:user', JSON.stringify(userdata));
                localStorage.setItem('@S09M2:token', userdata.token);
                return true;
            } else {
                console.error("Erro de login:", userdata);
                return false;
            }
        } catch (error) {
            console.error("Erro na requisição:", error);
            return false;
        }
    }

    function signOut() {
        setUser(null);
        localStorage.removeItem('@S09M2:user');
        localStorage.removeItem('@S09M2:token');
    }

    return <AuthContext.Provider value={{ user, signIn, signOut }}>{children}</AuthContext.Provider>
}

export function useAuth() {
    const contexto = useContext(AuthContext)
    return contexto
}
