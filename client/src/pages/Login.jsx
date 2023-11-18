import { useContext, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import googleLogo from "../assets/logoGoogle.jpg"
import lock from "../assets/lock-solid.png"
import user from "../assets/user-solid.png"
import userIcon from "../assets/userIcon.png"
import '../Style.css'
import { useForm } from '../hooks/useForms'
import { useNavigate } from "react-router-dom"
import { AuthContext } from '../context/AuthProvider'
import { fetchFunction } from '../api/apiFetch'

function Login() {

  const { login } = useContext(AuthContext)

  const navigate = useNavigate()

  const { form, handleInputChange } = useForm({
    user_name: "",
    user_password: "",
  })

  const handleRegisterClick = () => {
    navigate("/register");
  };

  const handleSubmit = async (e) => {
    e.preventDefault()

    const resp = await fetchFunction("login", "POST", form);

    console.log(resp);

    if (resp) {

      localStorage.setItem("token", JSON.stringify(resp.token));
      localStorage.setItem("user_name", JSON.stringify(resp.user_name));
      localStorage.setItem("id_user", JSON.stringify(resp.id_user));
      localStorage.setItem("id_rol", JSON.stringify(resp.id_rol));

      Swal.fire({
        title: "Correcto, iniciando sesion.",
        text: "Espero un momento...",
        icon: "success",
        showConfirmButton: false,
        timer: 2000
      })

      setTimeout(() => {
        login(resp)
        navigate("/auth/home")
      }, 2000)
    }
  }

  //OCULTAR LA CONTRASEÑA
  const [ocultarPassword, setOcultarPassword] = useState(false);

  const functionOcultarContraseña = () => {
    setOcultarPassword((passwordVisible) => !passwordVisible)
  }

  return (
    <>
      <Header />

      <main className="colorFondo">

        <form action="#" onSubmit={handleSubmit} className='p-4'>

          <div className="bg-light p-4 rounded-5" >

            <div className="d-flex justify-content-center">
              <img src={userIcon} style={{ height: "6rem" }} />
            </div>

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

                <input className="form-control" type={ocultarPassword ? "text" : "password"}
                  placeholder="Contraseña" id="contraseña" name="user_password" value={form[name]}
                  onChange={handleInputChange} />

                <button type="button" className="btn btn-outline-primary" onClick={functionOcultarContraseña}>
                  <i className={ocultarPassword ? "bi bi-eye-slash" : "bi bi-eye"}></i>
                </button>
              </div>

            </div>

            <div className="d-flex justify-content-between mt-3">
              <div className="d-flex align-items-center">
                <input className="form-check-input" type="checkbox" />
                <span className="ms-2">Recuerdame</span>
              </div>
              <p className="mb-0 text-decoration-underline text-dark ms-2">¿Olvidó su contraseña?</p>
            </div>

            <div className="mt-3 text-center">
              <button type="submit" className="btn btn-primary text-center">Iniciar sesión</button>
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

        </form>


      </main >

      <Footer />
    </>
  )
}

export default Login
