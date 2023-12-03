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
import { useSweetAlert } from "../hooks/useSweetAlert";
import { useNavigate } from "react-router-dom";

export const PosteosUser = ({ data, deleteBtn }) => {
    const navigate = useNavigate()

    const [posts, setPosts] = useState([]);

    //POSTEOS
    useEffect(() => {
        const posteos = fetchFunction("findUserPost", "POST", data)
            .then((posteos) => {
                setPosts(posteos)
            })
    }, [])

    //ELIMINAR POSTEOS
    const handleDeletePost = (idPost) => {

        const data = {
            id_post: idPost
        }

        console.log("DATAPOST");
        console.log(data);

        const response = fetchFunction("deletePost", "DELETE", data)

        if (response) {
            useSweetAlert(response, "Post Eliminado Correctamente", "success")
                .then(() => window.location.reload(),
                    navigate("/auth/my-profile")
                )
        }
    }

    return (
        <>
            {posts.map((post, id_posts) => (
                <div key={id_posts} className="text-muted pt-3 mx-5">

                    {deleteBtn == true ? (
                        <>

                            <i
                                type="button"
                                className="btn btn-danger bi bi-file-excel"
                                data-bs-toggle="modal" data-bs-target={`#staticBackdrop${id_posts}`}
                            >
                                Eliminar Post
                            </i>

                            {  /* Modal */}
                            <div className="modal fade" id={`staticBackdrop${id_posts}`} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h1 className="modal-title fs-5" id="staticBackdropLabel">¿Estas seguro que deseas eliminar este posteo?</h1>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Cancelar</button>
                                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal"
                                                onClick={() => handleDeletePost(post.id_post)}>Confirmar</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    ) : ""
                    }

                            <div className="d-flex pb-3 mb-0 small lh-sm border-bottom">
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
                                    <img className="img-fluid border rounded border-2 border-primary" src={`http://localhost:5000${post.url}`} crossOrigin="anonymous" height="200" width="300" alt="Img" />
                                )
                            }
                            <br />

                            <span>Rubro: {post?.rubro?.desc_rubro}</span><br />
                            <span>Fecha: {dayjs(post.updatedAt).format('DD/MM/YYYY hh:mm')}</span><br />
                            <span>Localidad: {post?.user_info?.localidad?.nombre_local}</span>

                    </div >

            ))}
        </>
    )
}
