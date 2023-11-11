import { createContext, useReducer } from "react"
import { authReducer } from "../reducers/authReducer"

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {

    const [state, dispatch] = useReducer(authReducer, { logged: false });

    return (
        <AuthContext.Provider value={{ state, dispatch }}>
            {children}
        </AuthContext.Provider>
    )
};
