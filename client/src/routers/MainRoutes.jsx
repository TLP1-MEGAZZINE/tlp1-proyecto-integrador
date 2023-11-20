import { Routes, Route } from "react-router-dom"
import { Files } from "../pages/Files"
import { Profile } from "../pages/Profile"
import { Post } from "../pages/Post"
import Messages from "../pages/Messages"
import Inicio from "../pages/Inicio"
import { RegisterInfo } from "../pages/RegisterInfo"


export const MainRoutes = () => {
    return (
        <>
            <Routes>
                <Route path='/register-info' element={<RegisterInfo />} />
                <Route path='/home' element={<Inicio />} />
                <Route path='/files' element={<Files />} />
                <Route path='/my-profile' element={<Profile />} />
                <Route path='/post' element={<Post />} />
                <Route path='/messages' element={<Messages />} />
            </Routes>
        </>
    )
}
