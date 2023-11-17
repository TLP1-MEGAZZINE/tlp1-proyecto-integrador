import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Inicio from '../pages/Inicio';
import Login from "../pages/Login"
import Error404 from '../pages/error404';
import MasInfo from '../pages/Mas-info';
import { Files } from "../pages/Files"
import { Register } from '../pages/Register';
import { Profile } from "../pages/Profile"
import { Post } from '../pages/Post';
import Messages from '../pages/Messages';
import { Index } from '../pages/Index';
import { PrivateRoutes } from './PrivateRoutes';
import { useEffect, useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';
import { MainRoutes } from './MainRoutes';

export const AppRoutes = () => {

    const { login, logout } = useContext(AuthContext)

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('userData'));

        if (user) {
            login(user)
        } else {
            logout()
            localStorage.removeItem('userData');
        }
    }, [])

    return (
        <BrowserRouter>
            {/*RUTAS PUBLICAS*/}
            <Routes>
                <Route path='/Login' element={<Login />} />
                <Route path='*' element={<Error404 />} />
                <Route path='/Mas-info' element={<MasInfo />} />
                <Route path='/Register' element={<Register />} />
                <Route path='/index' element={<Index />} />

                {/*RUTAS PRIVADAS*/}

                <Route path='auth/*' element={
                    <PrivateRoutes>
                        <MainRoutes />
                    </PrivateRoutes>
                } />

            </Routes>
        </BrowserRouter>
    )
}