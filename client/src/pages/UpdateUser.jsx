import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useForm } from '../hooks/useForms'
import { Selects } from "../components/Selects"
import { useNavigate } from "react-router-dom"
import { fetchFunction } from '../api/apiFetch'
import { useEffect, useState } from 'react'

export const UpdateUser = () => {

    const id_rol = localStorage.getItem("id_rol")
    const id_user = localStorage.getItem("id_user")

    const data = {
        id_user: id_user,
    }

    const navigate = useNavigate()

    const handleCancel = () => {
        navigate("/auth/my-profile")
    }

    const [info, setInfo] = useState(null);
    const [rolesInfo, setRolesInfo] = useState(null);
    const [pass, setPass] = useState(false)

    const handlePass = () => {
        setPass(!pass)
    }

    useEffect(() => {
        const resultado = fetchFunction("findUserById", "POST", data)
            .then((resultado) => {
                console.log("resultado", resultado);
                setInfo(resultado);
            })
    }, []);

    if (id_rol == 1) {
        useEffect(() => {
            const resultado = fetchFunction("findPostulante", "POST", data)
                .then((resultado) => {
                    console.log("resultado", resultado);
                    setRolesInfo(resultado);
                })
        }, []);
    } else if (id_rol == 2) {
        useEffect(() => {
            const resultado = fetchFunction("findEmpleador", "POST", data)
                .then((resultado) => {
                    console.log("resultado", resultado);
                    setRolesInfo(resultado);
                })
        }, []);
    }

    const { form, handleInputChange } = useForm({
        id_user: id_user,
        id_rol: id_rol
    })

    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await fetchFunction("updateUser", "PUT", form)
        console.log("response", response);
        if (response.message) {
            Swal.fire({
                title: response.message,
                text: "Espere un momento...",
                icon: "success",
                showConfirmButton: false,
                timer: 2000
            })
            setTimeout(() => {
                navigate("/auth/my-profile")
            }, 2000)
        }
    }

    return (
        <>
            <Header />

            <main className="p-4 d-flex justify-content-center align-items-center colorFondo">

                <form action="#" name="formulario" onSubmit={handleSubmit}>

                    <div id="carouselExampleDark" className="carousel carousel-dark slide">

                        <div className="carousel-inner rounded-5 py-3">

                            <div className="carousel-item active">

                                <div className="bg-light rounded p-3 row g-4 d-flex align-items-center text-center"
                                    style={{ width: "40rem", border: "1px", solid: "#000" }}>

                                    <h3 className="text-center fw-bold">Información de la Cuenta</h3>

                                    <div>

                                        { /*nombre de usuario*/}

                                        <div className='d-flex justify-content-center'>

                                            <div className="col-md-6 px-1">
                                                <label className="form-label">Nombre de usuario</label>
                                                <input type="text" className="form-control" placeholder="nombre de usuario"
                                                    id="user_name" name="user_name"
                                                    onChange={handleInputChange} value={form[name]}
                                                />
                                                <span className="text-danger fw-bold" ></span>
                                            </div>

                                            {/*email*/}
                                            <div className="col-md-6 px-1">
                                                <label className="form-label">Ingrese su email</label>
                                                <input type="email" className="form-control"
                                                    placeholder={info?.user_email ? info?.user_email : "name@example.com"}
                                                    id="user_email" name="user_email"
                                                    value={form[name]} onChange={handleInputChange}
                                                />
                                                <span className="text-danger fw-bold py-3" ></span>
                                            </div>
                                        </div>


                                        <div className="d-flex justify-content-center">
                                            <div className="col-md-6 px-1">
                                                <label
                                                    className="form-label text-center">Antigua contraseña</label>
                                                <div className="input-group">
                                                    <input type={pass ? "text" : "password"} className="form-control" id="user_password"
                                                        name="user_password" placeholder="**********"
                                                        onChange={handleInputChange} value={form[name]}
                                                    />

                                                    <button type="button" className="btn btn-outline-primary"
                                                        onClick={handlePass} value={pass}
                                                    ><i className={pass ? "bi bi-eye-slash" : "bi bi-eye"}></i></button>
                                                </div>
                                                <span className="text-danger fw-bold" ></span>
                                            </div>

                                            <div className="col-md-6 px-1">
                                                <label className="form-label">Nueva contraseña</label>

                                                <div className="input-group">
                                                    <input type={pass ? "text" : "password"} className="form-control" id="validarPass"
                                                        name="validarPass" placeholder="**********"
                                                        onChange={handleInputChange} value={form[name]}
                                                    />

                                                    <button type="button" className="btn btn-outline-primary"
                                                        onClick={handlePass} value={pass}
                                                    ><i className={pass ? "bi bi-eye-slash" : "bi bi-eye"}></i></button>
                                                </div>
                                                <span className="text-danger fw-bold"></span>
                                            </div>
                                        </div>

                                        {/* Postulante */}
                                        {id_rol == 1 && (
                                            <>
                                                <div className="col-md-12 pb-3">
                                                    <label className="form-label">Situacion Laboral</label>
                                                    <select className="form-select" aria-label="Default select example"
                                                        onChange={handleInputChange} value={form[name]}
                                                        name="id_estado_laboral"
                                                    >
                                                        <option value="" selected disabled>{rolesInfo?.estado_laboral.desc_estado_laboral ?
                                                            rolesInfo?.estado_laboral.desc_estado_laboral : "Estado laboral"}</option>
                                                        <option value="1">Desempleado</option>
                                                        <option value="2">Actualmente trabajando</option>
                                                    </select>
                                                </div>

                                                <div className='d-flex justify-content-center'>
                                                    <div className="col-md-6">
                                                        <label className="form-label">Nivel educativo alcancazado</label>
                                                        <select className="form-select" aria-label="Default select example"
                                                            name="id_nivel_educacion"
                                                            onChange={handleInputChange} value={form[name]}
                                                        >
                                                            <option value="" selected disabled>{rolesInfo?.nivel_educacion.desc_nivel_educacion ?
                                                                rolesInfo?.nivel_educacion.desc_nivel_educacion : "Nivel educativo"}</option>
                                                            <option value="1">Secundario completo</option>
                                                            <option value="2">Secundario incompleto</option>
                                                            <option value="1">Terciario completo</option>
                                                            <option value="3">Terciario incompleto</option>
                                                        </select>
                                                    </div>

                                                    <Selects
                                                        label={"Rubros."}
                                                        placeholder={rolesInfo?.rubro.desc_rubro ? rolesInfo?.rubro.desc_rubro : "Elija el rubro en el que se desempeña"}
                                                        position={"id_rubro"}
                                                        itemName={"desc_rubro"}
                                                        name={"id_rubro"}
                                                        url={'findRubro'}
                                                        value={form[name]} onChange={handleInputChange}
                                                    />
                                                </div>

                                            </>
                                        )}

                                        {/* Empleador */}

                                        {id_rol == 2 && (
                                            <>
                                                <div className='d-flex justify-content-center'>
                                                    <div className="col-md-6 px-1">
                                                        <label className="form-label">Nombre de la empresa</label>
                                                        <input type="text" className="form-control"
                                                            placeholder={rolesInfo?.nombre_empresa ? rolesInfo?.nombre_empresa : "Nombre de la empresa"}
                                                            name="nombre_empresa"
                                                            value={form[name]} onChange={handleInputChange}
                                                        />
                                                        <span className="text-danger fw-bold" id="errorEmpresa"></span>
                                                    </div>

                                                    <div className="col-md-6 px-1">
                                                        <label className="form-label">Locación de la empresa</label>
                                                        <input type="text" className="form-control"
                                                            placeholder={rolesInfo?.domicilio_empresa ? rolesInfo?.domicilio_empresa : "Mz24 Cs45, Barrio XYZ"}
                                                            name="domicilio_empresa"
                                                            value={form[name]} onChange={handleInputChange}
                                                        />
                                                        <span className="text-danger fw-bold" id="errorDomEmpresa"></span>
                                                    </div>

                                                </div>


                                                <div className="d-flex justify-content-center">

                                                    <Selects
                                                        label={"Rubros."}
                                                        placeholder={rolesInfo?.rubro.desc_rubro ? rolesInfo?.rubro.desc_rubro : "Elija el rubro de su empresa"}
                                                        position={"id_rubro"}
                                                        itemName={"desc_rubro"}
                                                        name={"id_rubro"}
                                                        url={'findRubro'}
                                                        value={form[name]}
                                                        onChange={handleInputChange}
                                                    />

                                                    <div className="col-md-6">
                                                        <label className="form-label">Numero de telefono Empresarial</label>
                                                        <div className="input-group">
                                                            <span id="prefijoEmpresa" className="input-group-text">+</span>
                                                            <input type="text" className="form-control" name="num_tel_empresa"
                                                                placeholder={rolesInfo?.num_tel_empresa ? rolesInfo?.num_tel_empresa : "9999999999"}
                                                                value={form[name]} onChange={handleInputChange}
                                                            />
                                                        </div>
                                                        <span className="text-danger fw-bold" id="errorTelEmpresa"></span>
                                                    </div>
                                                </div>

                                            </>
                                        )
                                        }

                                        {form.id_rubro == 11 && (
                                            <div className="col-md-12">
                                                <label className="form-label">Otro rubro</label>
                                                <input type="text" className="form-control"
                                                    placeholder={rolesInfo.otro_rubro ? rolesInfo.otro_rubro : "Escriba el nombre del rubro"}
                                                    name="otro_rubro"
                                                    value={form[name]} onChange={handleInputChange}
                                                />
                                                <span className="text-danger fw-bold" id="errorRubro"></span>
                                            </div>)}

                                        <div className="text-center d-flex justify-content-around py-4">

                                            <button className="btn btn-danger" onClick={handleCancel}>Cancelar <i
                                                className="fas fa-file-alt"></i></button>

                                            <button className="btn btn-primary" type="submit">Actualizar <i
                                                className="fas fa-file-alt"></i></button>

                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                </form>
            </main >
            <Footer />
        </>
    )
}
