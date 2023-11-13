import { useNavigate } from "react-router-dom";

export default function Footer() {
    const navigate = useNavigate();

    const handleMasInfoClick = () => {
        navigate("/mas-info");
    };

    const handleIndexClick = () => {
        navigate("/index");
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
            </ul>
            <p className="text-center text-light">©Copyright by: @<a href="#" className="text-light">JobUniteContact</a>.</p>
        </footer>
    );
}
