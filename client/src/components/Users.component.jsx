import { useEffect, useState } from "react"
import { fetchFunction } from "../api/apiFetch";
import { useNavigate } from "react-router-dom";
import { useBoleean } from "../hooks/useHiddenPass";

export const Users = () => {

    const id_user = localStorage.getItem("id_user");

    const navigate = useNavigate();

    const [users, setUsers] = useState([]);

    const { boleean, handleBoleean } = useBoleean();

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
                    .filter(user => user.rol.rol_name != "particular" && user.id_user != id_user)
                    .map((user, id_user) => (

                        <div key={id_user} className="d-flex pb-3 mb-0 small m-2 container-fluid border-bottom overflow-x-auto">

                            <img className="rounded-circle" width={40} height={40} src={`https://ui-avatars.com/api/?background=random&name=${user.user_name}`} alt="pfp" />

                            <div className="d-flex flex-column px-2 small flex-wrap">
                                <div className="">
                                    <a className="text-gray-dark text-decoration-none"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            handleProfile(user.id_user);
                                        }}>
                                        <strong>{user.user_name}</strong>
                                    </a>

                                    <a href="#"
                                        className="px-2" onClick={() => handleBoleean(`button${user.id_user}`)}>
                                        {boleean[`button${user.id_user}`] ? "Siguiendo" : "Seguir"}
                                    </a>
                                </div>

                                <span className="d-block">{user.user_email || user.user_email.slice(0, user.user_email.length / 2) + "..."}</span>

                                <strong className="text-gray-dark">{user.rol.rol_name}</strong>
                            </div>

                        </div>

                    ))
            }
        </>
    )
}
