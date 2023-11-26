import { useEffect, useState } from "react"
import { fetchFunction } from "../api/apiFetch";
import { useNavigate } from "react-router-dom";
export const Users = () => {

    const id_user = localStorage.getItem("id_user");

    const navigate = useNavigate();

    const [users, setUsers] = useState([]);
    const [follow, setFollow] = useState({});

    const followClink = () => {
        setFollow(!follow);
    }

    useEffect(() => {
        const obtenerDatos = async () => {
            try {
                const resultado = await fetchFunction("findAll", "GET");
                setUsers(resultado);
            } catch (error) {
                console.log("Hubo un error:", error);
            }
        };
        obtenerDatos();
    }, []);

    const handleProfile = (id_user) => {
        navigate(`/profile/${id_user}`)
    };

    return (
        <>
            {
                users
                    .filter(user => user.rol.rol_name != "particular" && user.id_user === id_user)
                    .map((user, id_user) => (

                        <div key={id_user} className="d-flex text-muted pt-3 ps-2">
                            <svg className="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32"
                                xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32"
                                preserveAspectRatio="xMidYMid slice" focusable="false">
                                <title>Placeholder</title>
                                <rect width="100%" height="100%" fill="#007bff"></rect><text x="50%" y="50%" fill="#007bff"
                                    dy=".3em">32x32</text>
                            </svg>

                            <div className="pb-3 mb-0 small lh-sm border-bottom w-100">

                                <div className="pb-3 mb-0 small lh-sm border-bottom w-100">
                                    <div className="d-flex justify-content-between">
                                        <a className="text-gray-dark text-decoration-none"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                handleProfile(user.id_user);
                                            }}>
                                            <strong>{user.user_name}</strong>
                                        </a>

                                        <a href="#" onClick={followClink}>{follow == true ? "Siguiendo" : "Seguir"}</a>
                                    </div>
                                    <span className="d-block">{user.user_email}</span>
                                    <strong className="text-gray-dark">{user.rol.rol_name}</strong>

                                </div>
                            </div>
                        </div>
                    ))
            }
        </>
    )
}
