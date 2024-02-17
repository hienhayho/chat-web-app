import { createContext, useState, useContext } from "react";

// @ts-ignore
export const AuthContext = createContext();

export const useAuthContext = () => {
    return useContext(AuthContext);
}

export const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [authUser, setAuthUser] = useState(JSON.parse(localStorage.getItem("chat-user")!) || null);
    return (
        <AuthContext.Provider value={[authUser, setAuthUser]}>
            {children}
        </AuthContext.Provider>
    )
}