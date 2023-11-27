import { useContext, useEffect, useState } from 'react'
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
import { useBoleean } from '../hooks/useHiddenPass'
import { useSweetAlert } from '../hooks/useSweetAlert'
import { useCount } from '../hooks/useCount'

export function ForgotPass() {
    const navigate = useNavigate()

    const { authState } = useContext(AuthContext)

    useEffect(() => {
        console.log(authState);

        if (authState.token) {
            navigate("/auth/home")
        }
    }, [])

    const { form, handleInputChange } = useForm({})


    const { boleean, handleBoleean } = useBoleean()

    const timeout = useCount(900, null)

    const handleCancelarClick = () => {
        navigate("/index");
    };

    const handleForgotPass = () => {
        navigate("/Forgot-pass");
    }


    const handleSubmit = async (e) => {

    }

    return (
        <>
            <Header />

            <main className="colorFondo">

                <form action="#" onSubmit={handleSubmit} className='p-4'>

                    <div className="bg-light p-4 rounded-5 text-center" >

                        <div className="d-flex justify-content-center">
                            <img src={userIcon} style={{ height: "6rem" }} />
                        </div>

                        <h1 className="text-center fs-3 fw-bold">Modifique su contraseña</h1>
                        <p>{timeout}: Segundos (15 minutos aproximadamente) <br />
                            para que caduque su token de verificación.</p>

                        {/*CONTRASEÑA */}
                        <h6>Ingrese su nueva contraseña</h6>
                        <div className="input-group">

                            <div className="input-group-text bg-primary"><img src={lock} style={{ height: "1rem" }} /></div>

                            <input className="form-control" type={boleean.button1 ? "text" : "password"}
                                placeholder="Contraseña" name="user_password" value={form[name]}
                                onChange={handleInputChange} />

                            <button type="button" className="btn btn-outline-primary" onClick={() => handleBoleean("button1")}>
                                <i className={boleean.button1 ? "bi bi-eye-slash" : "bi bi-eye"}></i>
                            </button>
                        </div>

                        {/*CONFIRMA CONTRASEÑA */}
                        <h6>Confirme su nueva contraseña</h6>
                        <div className="input-group mt-2">

                            <div className="input-group">

                                <div className="input-group-text bg-primary"><img src={lock} style={{ height: "1rem" }} /></div>

                                <input className="form-control" type={boleean.button2 ? "text" : "password"}
                                    placeholder="Contraseña" name="validarPass" value={form[name]}
                                    onChange={handleInputChange} />

                                <button type="button" className="btn btn-outline-primary" onClick={() => handleBoleean("button2")}>
                                    <i className={boleean.button2 ? "bi bi-eye-slash" : "bi bi-eye"}></i>
                                </button>
                            </div>

                        </div>



                        <div className="d-flex justify-content-between mt-3">

                            <div className="mt-3 text-center">
                                <button type="submit" className="btn btn-primary text-center">Continuar</button>
                            </div>
                            <div className="mt-3 text-center">
                                <button type="submit" className="btn btn-danger text-center"
                                    onClick={handleCancelarClick}>Cancelar</button>
                            </div>

                        </div>
                    </div>
                </form>
            </main >

            <Footer />
        </>
    )
}
