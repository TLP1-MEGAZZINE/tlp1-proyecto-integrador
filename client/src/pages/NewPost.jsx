import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { useForm } from "../hooks/useForms"
import Header from "../components/Header"
import Footer from "../components/Footer"
import logo from "../assets/logo.png";
import "../Style.css";
import { fetchFunction } from "../api/apiFetch";

export const NewPost = () => {

    const navigate = useNavigate()

    const { form, handleInputChange } = useForm({
        id_user: localStorage.getItem("id_user"),
        id_rol: localStorage.getItem("id_rol"),
    })

    const handleSubmit = async (e) => {
        e.preventDefault()

        const resp = await fetchFunction("createPost", "POST", form);

        console.log(resp);

        if (resp.message) {

            Swal.fire({
                title: resp.message,
                text: "Espere un momento...",
                icon: "success",
                showConfirmButton: false,
                timer: 2000
            })

            setTimeout(() => {
                return navigate("/auth/home")
            }, 2000)

        } else {
            Swal.fire({
                title: "Se produjo un error",
                text: resp.message,
                icon: "error",
                showConfirmButton: true,
                confirmButtonText: "Aceptar"
            })
        }
    }

    return (
        <>
            <Header />

            <main className="py-5 colorFondo" >
                <form action="#" onSubmit={handleSubmit}>
                    <div className="d-flex justify-content-center align-items-center">
                        <div className="bg-light p-3 rounded-5" style={{ border: "1px", solid: "#000" }}>
                            { /*Contenido del contenedor */}
                            <div className="d-flex justify-content-center">
                                <img src={logo} alt="login-icon" style={{ height: "5rem" }} />
                            </div>
                            <div className="text-center fs-3 fw-bold">Crear un nuevo post</div>

                            <div className="input-group mt-1">
                                <h3>Titulo:</h3>
                                <div className="input-group">
                                    <input className="form-control" type="text" placeholder="Titulo del post" name="post_title" onChange={handleInputChange}
                                        required />
                                </div>
                            </div>

                            <div className="input-group mt-1">
                                <h3>Contenido:</h3>
                                <div className="input-group">
                                    <input className="form-control" type="text" placeholder="Contenido del post"
                                        name="post_content" onChange={handleInputChange} required />
                                </div>
                            </div>

                            <div className="pt-3 text-center">
                                <button type="submit" className="btn btn-primary text-center">Subir</button>
                            </div>

                        </div>
                    </div>
                </form>
            </main>

            <Footer />
        </>
    )
}