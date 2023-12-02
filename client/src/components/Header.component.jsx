import logo from "../assets/logo.png";
import userIcon from "../assets/userIcon.png"
import search from "../assets/search.svg";
import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { useNavigate } from "react-router-dom";
import { fetchFunction } from "../api/apiFetch";
import { useState, useEffect } from "react";
import { useForm } from "../hooks/useForms"
import { useSweetAlert } from "../hooks/useSweetAlert"

function Header() {

    const changeYourPass = localStorage.getItem("changeYourPass");

    const { form, reset, handleInputChange } = useForm({})

    const data = {
        id_user: localStorage.getItem("id_user"),
    }

    const { authState, logout } = useContext(AuthContext); // Obtén el estado del contexto
    const navigate = useNavigate();

    const username = localStorage.getItem("user_name");

    const handleMessageClick = () => {
        navigate("/auth/messages");
    }

    const handleProfileClick = () => {
        navigate("/auth/my-profile");
    }

    const handleLogout = () => {
        Swal.fire({
            title: "Cerrando Sesión",
            text: "Espere un momento...",
            showConfirmButton: false,
            timer: 2000,
        });

        setTimeout(() => {
            logout();
            localStorage.removeItem("token");
            localStorage.removeItem("user_name");
            localStorage.removeItem("id_user");
            localStorage.removeItem("id_rol");

            navigate("/index");
        }, 2000);
    };

    //BUSCAR FOTO DE PERFIL
    const [foto, setFoto] = useState(null);

    useEffect(() => {
        const obtenerDatos = async () => {
            try {
                const resultado = await fetchFunction("findPfp", "POST", data);
                if (!resultado.message) {
                    setFoto(resultado);
                } else {
                    setFoto(userIcon);
                    console.log("FOTO", foto);
                }
            } catch (error) {
                console.log("Hubo un error:", error);
            }
        };
        obtenerDatos();
    }, []);


    //BUSCAR USUARIO POR NOMBRE
    const [listUsers, setListUsers] = useState([]);
    const handleName = async (e) => {
        e.preventDefault();
        const resp = await fetchFunction("findByName", "POST", form);
        setListUsers(resp);
    }

    //NAVEGAR A LOS PERFILES
    const [selectedUserId, setSelectedUserId] = useState(null);
    const handleSearch = (e) => {
        const selectedId = e.target.value;
        setSelectedUserId(selectedId);
        navigate(`/profile/${selectedId}`);
        window.location.reload()
    };

    return (
        <header >
            <nav className="navbar navbar-expand-lg navbar-light colorPrincipal">
                <img src={logo} alt="logo" width="30" height="30" />
                <a className="navbar-brand text-light" href="#" onClick={() => navigate("/auth/home" || "/index")}>
                    Job <span className="unite">Unite</span>
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">

                    {!authState.logged && (
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="btn btn-primary text-light" aria-current="page" href="login">Iniciar
                                    sesion
                                </a>
                            </li>
                        </ul>
                    )}

                    {authState.logged && (
                        <>
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 pe-2">
                                <li className="nav-item">
                                    <a className="nav-link text-light" aria-current="page" href="#" onClick={handleMessageClick}>
                                        Mensajes
                                        <i className="bi bi-envelope-fill mx-2"></i>
                                    </a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle text-light" href="#" id="navbarDropdown"
                                        role="button" data-bs-toggle="dropdown" aria-expanded="false"
                                    >
                                        Notificaciones
                                        <i className={changeYourPass == "true" ? "bi bi-bell-fill text-warning mx-2" : "bi bi-bell-fill mx-2"}></i>
                                    </a>

                                    <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDropdown">
                                        <li>
                                            <a className="dropdown-item" href="solicitudes">
                                                Solicitudes
                                            </a>
                                        </li>
                                        {changeYourPass == "true" ? (<li>
                                            <p className="dropdown-item text-danger" href="#">
                                                Su contraseña a sido restaurada, por favor cambiela por su seguridad.
                                            </p>
                                        </li>) : ""}

                                    </ul>
                                </li>
                            </ul>

                            <div>
                                <form className="d-flex" action="#" onSubmit={handleName}>
                                    <input className="form-control me-2" type="search" placeholder="¿A quien vas a buscar?" name="user_name"
                                        aria-label="text" value={form[name]} onChange={handleInputChange} />
                                    <button className="btn btn-outline-light d-flex border border-2" type="submit">
                                        <img src={search} className="mx-1" />Buscar</button>
                                </form>
                                {listUsers.length > 0 && (
                                    <select className="form-select mt-2" onChange={handleSearch}>
                                        <option disabled selected>Resultados</option>
                                        {listUsers.map((user, id_user) => (
                                            <option value={user.id_user} key={id_user}
                                            >{user.user_name}</option>
                                        ))}
                                    </select>
                                )}
                            </div>

                            <div className="dropdown p-4">
                                <a href="#" className="d-flex align-items-center text-decoration-none dropdown-toggle"
                                    id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                                    <img src={foto == userIcon ? foto : `${"http://localhost:5000/"}${foto}`}
                                        crossOrigin="anonymous" alt="pfp" width=" 32" height="32"
                                        className="rounded-circle me-2" />
                                    <strong className="text-light" id="UsuarioNombre">{username}</strong>
                                </a>

                                <ul className="dropdown-menu dropdown-menu-dark text-small shadow"
                                    aria-labelledby="dropdownUser1">
                                    <li><a className="dropdown-item" href="#" onClick={handleProfileClick}>Perfil</a></li>
                                    <li><a className="dropdown-item" href="#">Ajustes</a></li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li><button className="dropdown-item" id="cerrarSesion" type="submit"
                                        onClick={handleLogout}
                                        href="index">Cerrar sesion</button></li>
                                </ul>
                            </div>
                        </>
                    )}
                </div>
            </nav>
        </header >
    );
}

export default Header;
