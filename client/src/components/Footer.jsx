import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import { useContext } from "react";

export default function Footer() {
    const navigate = useNavigate();

    const { authState } = useContext(AuthContext);

    const handleMasInfoClick = () => {
        navigate("/mas-info");
    };

    const handleIndexClick = () => {
        navigate("/index");
    };

    const handleHomeClick = () => {
        navigate("/auth/Home");
    };

    return (
        <footer className="text-center colorPrincipal">
            <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                <li className="nav-item"><a href="#" className="nav-link px-2 text-light"
                    onClick={handleIndexClick}
                >Inicio</a></li>

                <li className="nav-item">
                    <a href="#" className="nav-link px-2 text-light" onClick={handleMasInfoClick}>
                        Mas Información
                    </a>
                </li>

                {authState.logged && (
                    <li className="nav-item">
                        <a href="#" className="nav-link px-2 text-light" onClick={handleHomeClick}>
                            Home
                        </a>
                    </li>
                )
                }

            </ul>
            <p className="text-center text-light">©Copyright by: @<a href="#" className="text-light">JobUniteContact</a>.</p>
        </footer>
    );
}
