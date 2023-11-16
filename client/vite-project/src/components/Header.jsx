import logo from "../assets/logo.png";
import userIcon from "../assets/userIcon.png"
import React, { useContext } from "react";
import { types } from "../types/type";
import { AuthContext } from "../context/AuthProvider";
import { useNavigate } from "react-router-dom";

function Header() {
    const { state, logout } = useContext(AuthContext); // Obtén el estado del contexto
    const navigate = useNavigate();
    
    const handleLogout = () => {
        Swal.fire({
            title: "Cerrando Sesión",
            text: "Espere un momento...",
            showConfirmButton: false,
            timer: 2000,
        });
        
        setTimeout(() => {
            logout();
            localStorage.removeItem("userData");
            navigate("/index");
        }, 2000);
    };

    return (
        <header >
            <nav className="navbar navbar-expand-lg navbar-light colorPrincipal">
                <img src={logo} alt="logo" width="30" height="30" />
                <a className="navbar-brand text-light" href="#" onClick={() => navigate("/index")}>
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


                        {!state.logged && (
                            <li className="nav-item">
                                <a className="btn btn-primary text-light" aria-current="page" href="login">Iniciar
                                    sesion</a>
                            </li>
                        )}

                        
                        {state.logged && (
                            <>
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <a className="nav-link text-light" aria-current="page" href="#">
                                            Mensajes
                                        </a>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a
                                            className="nav-link dropdown-toggle text-light"
                                            href="#"
                                            id="navbarDropdown"
                                            role="button"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            Notificaciones
                                        </a>
                                        <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDropdown">
                                            <li>
                                                <a className="dropdown-item" href="solicitudes">
                                                    Solicitudes
                                                </a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="novedades">
                                                    Novedades
                                                </a>
                                            </li>
                                            <li>
                                                <hr className="dropdown-divider" />
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="#">
                                                    Seguridad
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>

                                <form className="d-flex">
                                    <input className="form-control me-2" type="search" placeholder="¿Que deseas buscar?"
                                        aria-label="Search" />
                                    <button className="btn btn-outline-light" type="submit">Buscar</button>
                                </form>

                                <div className="dropdown p-4">
                                    <a href="#" className="d-flex align-items-center text-decoration-none dropdown-toggle"
                                        id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                                        <img src={userIcon} alt="pfp" width=" 32" height="32"
                                            className="rounded-circle me-2" />
                                        <strong className="text-light" id="UsuarioNombre">Usuario</strong>
                                    </a>

                                    <ul className="dropdown-menu dropdown-menu-dark text-small shadow"
                                        aria-labelledby="dropdownUser1">
                                        <li><a className="dropdown-item" href="perfil">Perfil</a></li>
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
