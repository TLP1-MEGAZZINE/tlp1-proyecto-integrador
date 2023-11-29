import Manufactura from "../assets/Manufactura.png";
import Educacion2 from "../assets/Educacion2.png";
import Ventas from "../assets/Ventas.png";
import otro_rubro from "../assets/otro_rubro.png";
import Alimenticio from "../assets/Alimenticio.png";
import tecnologia from "../assets/tecnologia.png";
import Salud from "../assets/Salud.png";
import Administracion from "../assets/Administracion.png";
import Construccion from "../assets/Construccion.png";
import Reparaciones from "../assets/Reparaciones.png";
import Finanzas from "../assets/Finanzas.png";

import dayjs from "dayjs";
import { useState, useEffect } from "react";
import { fetchFunction } from "../api/apiFetch";

export const PosteosUser = ({ data }) => {

    const [posts, setPosts] = useState([]);

    //POSTEOS
    useEffect(() => {
        const posteos = fetchFunction("findUserPost", "POST", data)
            .then((posteos) => {
                setPosts(posteos)
            })
    }, [])

    return (
        <>
            {posts.map((post, id_post) => (
                <div key={id_post} className="text-muted pt-3 mx-5">
                    <p className="pb-3 mb-0 small lh-sm border-bottom ">
                        <div className="d-flex">
                            <div>

                                <strong className="d-block">{post.User.user_name}</strong>
                                <strong className="d-block text-gray-dark">{post.User.user_email}</strong>
                                <strong className="d-block text-gray-dark">{post.post_title}</strong>
                                {post.post_content}
                                
                            </div>
                            <div>
                                {
                                    (() => {
                                        switch (post.id_rubro) {
                                            case 1:
                                                return <img src={Salud} width="50" height="50" className="mx-3" />;
                                            case 2:
                                                return <img src={tecnologia} width="50" height="50" className="mx-3" />;
                                            case 3:
                                                return <img src={Reparaciones} width="50" height="50" className="mx-3" />;
                                            case 4:
                                                return <img src={Finanzas} width="50" height="50" className="mx-3" />;
                                            case 5:
                                                return <img src={Manufactura} width="50" height="50" className="mx-3" />;
                                            case 6:
                                                return <img src={Ventas} width="50" height="50" className="mx-3" />;
                                            case 7:
                                                return <img src={Administracion} width="50" height="50" className="mx-3" />;
                                            case 8:
                                                return <img src={Alimenticio} width="50" height="50" className="mx-3" />;
                                            case 9:
                                                return <img src={Construccion} width="50" height="50" className="mx-3" />;
                                            case 10:
                                                return <img src={Educacion2} width="50" height="50" className="mx-3" />;
                                            default:
                                                return <img src={otro_rubro} width="50" height="50" className="mx-3" />;
                                        }
                                    })()
                                }
                            </div>
                        </div>
                        {
                            post.url == "/uploads/null" ? (
                                ""
                            ) : (
                                <img className="border rounded border-2 border-primary" src={`http://localhost:5000${post.url}`} crossOrigin="anonymous" height="200" width="300" alt="Img" />
                            )
                        }
                        <br />

                        <span>Rubro: {post?.rubro?.desc_rubro}</span><br />
                        <span>Fecha: {dayjs(post.updatedAt).format('DD/MM/YYYY hh:mm')}</span><br />
                        <span>Localidad: {post?.user_info?.localidad?.nombre_local}</span>
                    </p>
                </div>


            ))}
        </>
    )
}
