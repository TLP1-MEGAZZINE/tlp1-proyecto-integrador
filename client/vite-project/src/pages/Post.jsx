import Header2 from "../components/Header2"
import Footer from "../components/Footer"
import logo from "../assets/logo.png"
import { useState, useEffect } from "react"

export const Post = () => {

  const [postData, setPostData] = useState({
    id_user: 1,
    id_rubro: 10,
    post_title: "",
    post_content: "",
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setPostData({
      ...postData,
      [name]: value
    })
  }

  const fetchPost = async (postData) => {
    try {
      const respuesta = await fetch('http://localhost:5000/createPost', {

        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(postData)
      });
      if (!respuesta.ok) {
        const { message } = await respuesta.json();
        return Swal.fire('Error, al crear el posteo', message, 'error',);
      } else {
        console.log("exito");
        Swal.fire({
          title: "Post creado correctamente.",
          text: "Espero un momento...",
          icon: "success",
          showConfirmButton: false
        });
      }
    } catch (error) {
      console.error('Error al enviar la solicitud:', error);
    }
  }

  const handleForm = (e) => {
    e.preventDefault()
    console.log(postData);

    fetchPost(postData)
  }
  return (
    <>
      <Header2 />
      <main className="colorFondo">
        <form action="#" name="formPost" onSubmit={handleForm}>
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
