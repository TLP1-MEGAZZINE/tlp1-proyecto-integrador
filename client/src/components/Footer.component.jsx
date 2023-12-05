import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import { useContext } from "react";
import { useForm } from "../hooks/useForms";
import { useBoleean } from "../hooks/useHiddenPass";
import { fetchFunction } from "../api/apiFetch"
import { useSweetAlert } from "../hooks/useSweetAlert";

export default function Footer() {

    const { form, handleInputChange, reset } = useForm({
        id_user: localStorage.getItem("id_user"),
    })

    const { boleean, handleBoleean } = useBoleean()

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

    const handleSupport = async (e) => {
        e.preventDefault();

        const resp = await fetchFunction("support", "POST", form);

        console.log(resp);

        if (!resp.error) {
            reset()
            useSweetAlert(resp, "¡El correo fue enviado correctamente!", "success");
        } else {
            useSweetAlert(resp, null, "error");
        }
    }

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
            <p className="text-center text-light">©Copyright by: @<a href="#" className="text-light"
                data-bs-toggle="modal" data-bs-target="#support"
            >JobUniteContact</a>.</p>


            {authState.logged && (
                <div className="modal fade" id="support" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <form action="" onSubmit={handleSupport}>
                                <div className="modal-header">
                                    <h1 className="modal-title fs-5" id="staticBackdropLabel">Ingrese el Correo Electrónico con el que esta registrado y sus dudas, sera respondidas lo antes posible</h1>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body d-flex flex-column">

                                    <label className="form-label">Su nombre de usuario:</label>
                                    <input type="text" className="form-control" name="user_name"
                                        onChange={handleInputChange} value={form[name]}
                                    />

                                    <label className="form-label">Su email registrado:</label>
                                    <input type="email" className="form-control" name="user_email"
                                        onChange={handleInputChange} value={form[name]}
                                    />

                                    <label className="form-label">¿Cual es su pregunta o problema?:</label>
                                    <input type="text" className="form-control" name="text"
                                        onChange={handleInputChange} value={form[name]}
                                    />

                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Cancelar</button>
                                    <button type="submit" className={!boleean.support ? "btn btn-primary" : "btn btn-secondary"} value={boleean.support}
                                        onClick={() => handleBoleean("support")}>
                                        {!boleean.support ? "Confirmar" : "Espere..."}</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>)}

        </footer>
    );
}
