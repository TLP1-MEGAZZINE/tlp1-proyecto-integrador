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


export const AppRoutes = () => {


    return (
        <BrowserRouter>
            {/*RUTAS PUBLICAS*/}
            <Routes>
                <Route path='/Login' element={<Login />} />
                <Route path='*' element={<Error404 />} />
                <Route path='/Mas-info' element={<MasInfo />} />
                <Route path='/Register' element={<Register />} />


                {/*RUTAS PRIVADAS*/}
                <Route path='/Home' element={<Inicio />} />
                <Route path='/Files' element={<Files />} />
                <Route path='/My-profile' element={<Profile />} />
                <Route path='/Post' element={<Post />} />
                <Route path='/Messages' element={<Messages />} />


            </Routes>
        </BrowserRouter>
    )
}