import Header from "../components/Header"
import Footer from "../components/Footer"
import logo from "../assets/logo.png"
import { useState, useEffect } from "react"
import { useForm } from "../hooks/useForms"
import { fetchFunction } from "../api/apiFetch"

export const Post = () => {

  const { form, handleInputChange } = useForm({
    id_user: localStorage.getItem("id_user"),
    id_rubro: localStorage.getItem("id_rubro"),
    post_title: "",
    post_content: "",
  })

  const handleSubmit = async () => {
    const response = await fetchFunction("updateUserContact", "PUT", form)
    if (!response.ok) {
      const { message } = await response.json();
      return Swal.fire('Error, al crear el posteo', message, 'error',);
    } else {
      console.log("exito");
      Swal.fire({
        title: "Post creado correctamente.",
        text: "Espere un momento...",
        icon: "success",
        showConfirmButton: false
      });
    }
  }

  return (
    <>
      <Header />
      <main className="colorFondo">
        <form action="#" name="formPost" onSubmit={handleSubmit}>
          <div className="d-flex justify-content-center align-items-center">
            <div className="bg-light p-3 rounded-5" style={{ border: "1px", solid: "#000" }}>
              {/* Contenido del contenedor */}
              <div className="d-flex justify-content-center">
                <img src={logo} alt="login-icon" style={{ height: "5rem" }} />
              </div>
              <div className="text-center fs-3 fw-bold">Crear un nuevo post</div>

              <div className="input-group mt-1">
                <h3>Titulo:</h3>
                <div className="input-group">
                  <input className="form-control" type="text" placeholder="Titulo del post" name="post_title"
                    onChange={handleInputChange}
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
