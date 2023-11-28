import dayjs from "dayjs";
import { fetchFunction } from "../api/apiFetch";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Posteos = ({ selectedRubro, selectedLocal }) => {
    const navigate = useNavigate();
    const [posts, setPosts] = useState([]);

    const handleProfile = (id_user) => {
        navigate(`/profile/${id_user}`);
    };

    useEffect(() => {
        const resultado = fetchFunction("findAllPosts", "GET")
            .then((resultado) => {
                setPosts(resultado);
            });
    }, []);

    const postMatchesFilters = () => {

        console.log("selectedRubro", selectedRubro);
        console.log("selectedLocal", selectedLocal);

        return posts.filter((post) => {
            const rubroMatch = post?.id_rubro == selectedRubro;
            const localidadMatch = post?.user_info?.localidad?.id_local == selectedLocal;

            // Nueva condición
            if (selectedRubro == 0 && selectedLocal != 0) {
                return localidadMatch;
            } else if (selectedRubro != 0 && selectedLocal == 0) {
                return rubroMatch;
            }

            return rubroMatch || localidadMatch;
        });
    };

    const filteredPosts = postMatchesFilters();


    return (
        <>
            {filteredPosts.map((post, id_post) => (
                <div key={id_post} className="text-muted pt-3 mx-5">
                    <div className="d-flex">
                        <svg className="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32"
                            xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32"
                            preserveAspectRatio="xMidYMid slice" focusable="false">
                            <title>Placeholder</title>
                            <rect width="100%" height="100%" fill="#007bff"></rect><text x="50%" y="50%" fill="#007bff"
                                dy=".3em">32x32</text>
                        </svg>
                        <p className="pb-3 mb-0 small lh-sm border-bottom ">
                            <a href="#" className="text-decoration-none">
                                <strong className="d-block"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleProfile(post.User.id_user);
                                    }}
                                >{post.User.user_name}</strong>
                            </a>
                            <strong className="d-block text-gray-dark">{post.User.user_email}</strong>
                            <strong className="d-block text-gray-dark">{post.post_title}</strong>
                            {post.post_content} <br />
                            {
                                post.url == "/uploads/null" ? (
                                    ""
                                ) : (
                                    <img src={`http://localhost:5000${post.url}`} crossOrigin="anonymous" height="200" width="300" alt="Img" />
                                )
                            }
                            <br />
                            <span>Rubro: {post?.rubro?.desc_rubro}</span><br />
                            <span>Fecha: {dayjs(post.updatedAt).format('DD/MM/YYYY hh:mm')}</span><br />
                            <span>Localidad: {post?.user_info?.localidad?.nombre_local}</span>
                        </p>
                    </div>
                </div>
            ))}
        </>
    )
}
