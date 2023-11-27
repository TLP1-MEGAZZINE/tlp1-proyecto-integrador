import Login from "../pages/Login"
import Error404 from '../pages/error404';
import MasInfo from '../pages/Mas-info';
import { Register } from '../pages/Register';
import { Index } from '../pages/Index';
import { PrivateRoutes } from './PrivateRoutes';
import { useEffect, useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';
import { MainRoutes } from './MainRoutes';
import { OtherProfile } from '../pages/OtherProfile';
import { ForgotPass } from '../pages/ForgotPass';
import { Routes } from "react-router-dom";

export const MainPublicRoutes = () => {
    return (
        <>
            <Routes>

                <Route path='/Forgot-pass' element={<ForgotPass />} />
                <Route path='/Login' element={<Login />} />
                <Route path='*' element={<Error404 />} />
                <Route path='/Mas-info' element={<MasInfo />} />
                <Route path='/Register' element={<Register />} />
                <Route path='/index' element={<Index />} />
                <Route path='/Profile/:id_user' element={<OtherProfile />} />

            </Routes>
        </>
    )
}