import { useContext } from "react"
import { AuthContext } from "../context/AuthProvider"
import { Navigate } from "react-router-dom";

export const PrivateRoutes = ({ children }) => {

    const { authState } = useContext(AuthContext);


    return (authState.logged)
        ? children
        : (<Navigate to={'/login'} />)
}
