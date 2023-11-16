import { createContext, useReducer } from "react"
import { authReducer } from "../reducers/authReducer"
import { types } from "../types/type";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {

    const [state, dispatch] = useReducer(authReducer, { logged: false });

    const login = (payload) => {
        dispatch({
            type: types.LOGIN,
            payload: payload
        })
    }

    const logout = () => {
        dispatch({
            type: types.LOGOUT
        })
    }

    return (
        <AuthContext.Provider value={{ state, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
};
