import { useContext, useEffect, useState } from 'react'
import Header from '../components/Header.component'
import Footer from '../components/Footer.component'
import googleLogo from "../assets/logoGoogle.jpg"
import lock from "../assets/lock-solid.png"
import user from "../assets/user-solid.png"
import userIcon from "../assets/userIcon.png"
import '../Style.css'
import { useForm } from '../hooks/useForms'
import { useNavigate } from "react-router-dom"
import { AuthContext } from '../context/AuthProvider'
import { fetchFunction } from '../api/apiFetch'
import { useBoleean } from '../hooks/useHiddenPass'
import { useSweetAlert } from '../hooks/useSweetAlert'

function Login() {

  const { login, authState } = useContext(AuthContext)

  const navigate = useNavigate()

  useEffect(() => {
    if (authState.logged) {
      return navigate("/auth/home")
    }
  }, [authState, navigate])

  const { form, handleInputChange, reset } = useForm({
    user_name: localStorage.getItem("remember_user_name") || "",
    user_password: localStorage.getItem("remember_pass") || ""
  })

  const handleRegisterClick = () => {
    navigate("/register");
  };

  const handleSubmit = async (e) => {
    e.preventDefault()

    const resp = await fetchFunction("login", "POST", form);

    console.log(resp);
    const lastLocation = localStorage.getItem("lastPath")

    if (resp.token) {
      login(resp)
      console.log(resp);
      localStorage.setItem("token", resp.token);
      localStorage.setItem("user_name", resp.user_name);
      localStorage.setItem("id_user", resp.id_user);
      localStorage.setItem("id_rol", resp.id_rol);
      reset()
      useSweetAlert(resp, "Correcto, iniciando sesion.", "success")
        .then(() => {
          return navigate(lastLocation || "/auth/home")
        })

    } else {
      useSweetAlert(resp, null, "error")
    }
  }

  //RESTAURAR PASSWORD
  const handleForgotPass = async (e) => {
    e.preventDefault();

    const resp = await fetchFunction("forgotPassword", "POST", form);

    useSweetAlert(resp, "Procesando datos...", "")

    if (!resp.error) {
      reset()
      useSweetAlert(resp, "¡El correo fue enviado correctamente!", "success");
    } else {
      useSweetAlert(resp, null, "error");
    }
  }

  const { boleean, handleBoleean } = useBoleean()

  const rememberMe = (e) => {
    if (e.target.checked) {
      localStorage.setItem("remember_user_name", form.user_name);
      localStorage.setItem("remember_pass", form.user_password);
    } else {
      localStorage.removeItem("remember_user_name");
      localStorage.removeItem("remember_pass");
    }
  };

  return (
    <>
      <Header />

      <main className="colorFondo">

        <div className="bg-light p-4 rounded-5" >

          <div className="d-flex justify-content-center">
            <img src={userIcon} style={{ height: "6rem" }} />
          </div>

          <form action="#" onSubmit={handleSubmit} >
            <h1 className="text-center fs-3 fw-bold">Login</h1>

            <div className="input-group mt-3">
              <div className="input-group-text bg-primary"><img src={user} style={{ height: "1rem" }} /></div>
              <input className="form-control" type="text" placeholder="Nombre de usuario o correo" id="nombreEmail"
                name="user_name" value={form[name]} // Enlazar el valor al estado
                onChange={handleInputChange} // Manejador de cambio
              />
            </div>

            <div className="input-group mt-2">

              <div className="input-group">

                <div className="input-group-text bg-primary"><img src={lock} style={{ height: "1rem" }} /></div>

                <input className="form-control" type={boleean.button1 ? "text" : "password"}
                  placeholder="Contraseña" id="contraseña" name="user_password" value={form[name]}
                  onChange={handleInputChange} />

                <button type="button" className="btn btn-outline-primary" onClick={() => handleBoleean("button1")}>
                  <i className={boleean.button1 ? "bi bi-eye-slash" : "bi bi-eye"}></i>
                </button>
              </div>

            </div>

            <div className="d-flex justify-content-between mt-3">
              <div className="d-flex align-items-center">
                <input className="form-check-input" type="checkbox" onChange={rememberMe} />
                <span className="ms-2">Recuerdame</span>
              </div>

            </div>
            <div className="mt-3 text-center">
              <button type="submit" className="btn btn-primary text-center">Iniciar sesión</button>
            </div>
          </form>

          {/* MODAL */}
          <div className="d-flex justify-content-center py-2">
            <i href="#" data-bs-toggle="modal" data-bs-target="#forgotPass" className="btn btn-warning">¿Olvido su contraseña?</i>
          </div>

          <div className="modal fade" id="forgotPass" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <form action="" onSubmit={handleForgotPass}>
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="staticBackdropLabel">Ingrese el Correo Electrónico con el que esta registrado y espere...</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body d-flex flex-column">

                    <label className="form-label">Su email al que se enviaran los datos para restaurar su contraseña:</label>
                    <input type="email" className="form-control" name="email"
                      onChange={handleInputChange} value={form[name]}
                    />
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Cancelar</button>
                    <button type="submit" className="btn btn-primary">Confirmar</button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="mt-3 text-center">
            <div>¿No tienes una cuenta?</div>
            <a href="#" onClick={handleRegisterClick}>Registrarse</a>
          </div>

          <div>
            <div className="border-bottom text-center">
              <span className="bg-light">o</span>
            </div>
          </div>

          <div className="btn d-flex align-items-center justify-content-center mt-2">
            <img src={googleLogo} alt="google-icon" width="30" height="20" />
            <div className="fw-semibold text-secondary shadow-sm">Continuar con Google</div>
          </div>

        </div>

      </main >

      <Footer />
    </>
  )
}

export default Login
