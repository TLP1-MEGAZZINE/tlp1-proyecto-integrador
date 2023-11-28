import { Routes, Route } from "react-router-dom"
import { Files } from "../pages/Files"
import { Profile } from "../pages/Profile"
import { Post } from "../pages/Post"
import Messages from "../pages/Messages"
import Inicio from "../pages/Inicio"
import { UpdateInfo } from "../pages/UpdateInfo"
import { UpdateUser } from "../pages/UpdateUser"
import { NewPost } from "../pages/NewPost"

export const MainRoutes = () => {
    
    return (
        <>
            <Routes>
                <Route path='/new-post' element={<NewPost />} />
                <Route path='/update-user' element={< UpdateUser />} />
                <Route path='/register-info' element={<UpdateInfo />} />
                <Route path='/home' element={<Inicio />} />
                <Route path='/files' element={<Files />} />
                <Route path='/my-profile' element={<Profile />} />
                <Route path='/post' element={<Post />} />
                <Route path='/messages' element={<Messages />} />
            </Routes>
        </>
    )
}
