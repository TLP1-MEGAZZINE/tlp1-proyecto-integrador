import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useForm } from '../hooks/useForms'


export const RegisterInfo = () => {

    const { form, handleInputChange } = useForm({})

    return (
        <>
            <Header />

            <main className="p-4 d-flex justify-content-center align-items-center colorFondo">

                <form action="#" name="formulario">

                    <div id="carouselExampleDark" className="carousel carousel-dark slide">

                        <div className="carousel-inner rounded-5 py-3">

                            <div className="carousel-item active" id="pagina1">

                                <div className="bg-light rounded p-3 row g-4 d-flex align-items-center text-center"
                                    style={{ width: "40rem", border: "1px", solid: "#000" }}>

                                    <h3 className="text-center fw-bold">Datos de Usuario</h3>

                                    <div className="col-md-12">
                                        <label className="form-label">Nombre de usuario</label>
                                        <input type="text" className="form-control" placeholder="nombre de usuario"
                                            id="user_name" name="user_name"
                                            onChange={handleInputChange} value={form[name]}
                                        />
                                        <span className="text-danger fw-bold" id="errorUserName"></span>
                                    </div>

                                    <div className="col-md-6">
                                        <label className="form-label">Ingrese su email</label>
                                        <input type="email" className="form-control" placeholder="name@example.com"
                                            id="user_email" name="user_email"
                                            value={form[name]} onChange={handleInputChange}
                                        />
                                        <span className="text-danger fw-bold py-3" id="errorEmail"></span>
                                    </div>

                                    <div className="col-md-6">
                                        <label className="form-label text">Repetir email</label>
                                        <div className="input-group">
                                            <input type="email" className="form-control" id="validarEmail" name="validarEmail"
                                                placeholder="name@example.com"
                                                onChange={handleInputChange} value={form[name]}
                                            />
                                        </div>
                                        <span className="text-danger fw-bold" id="errorEmail2"></span>
                                    </div>

                                    <div className="d-flex">
                                        <div className="col-md-6 px-1">
                                            <label
                                                className="form-label text-center">Contraseña</label>
                                            <div className="input-group">
                                                <input type="password" className="form-control" id="user_password"
                                                    name="user_password" placeholder="**********"
                                                    onChange={handleInputChange} value={form[name]}
                                                />

                                                <button type="button" className="btn btn-outline-primary"
                                                ><i
                                                    className="bi bi-eye"></i></button>
                                            </div>
                                            <span className="text-danger fw-bold" id="errorPass"></span>
                                        </div>

                                        <div className="col-md-6 px-1">
                                            <label className="form-label">Repetir contraseña</label>

                                            <div className="input-group">
                                                <input type="password" className="form-control" id="validarPass"
                                                    name="validarPass" placeholder="**********"
                                                    onChange={handleInputChange} value={form[name]}
                                                />

                                                <button type="button" className="btn btn-outline-primary"
                                                ><i
                                                    className="bi bi-eye"></i></button>
                                            </div>
                                            <span className="text-danger fw-bold" id="errorPass2"></span>
                                        </div>
                                    </div>

                                    <div className="col-md-12">
                                        <label className="form-label">Seleccione su rol</label>
                                        <select name="id_rol" className="form-select"
                                            value={form[name]}
                                            onChange={handleInputChange}
                                        >
                                            <option selected disabled>Roles</option>
                                            <option value="1">Postulante</option>
                                            <option value="2">Empleador</option>
                                            <option value="3">Particular</option>
                                        </select>
                                    </div>

                                    <div> { /*PAGINA 2 INFO PERSONAL*/}

                                        <div className="carousel-item" id="pagina2">

                                            <div className="bg-white rounded p-3 row g-4 d-flex align-items-center justify-content-center text-center"
                                                style={{ width: "40rem", border: "1px", solid: "#000" }}>

                                                <h3 className="text-center fw-bold">DATOS PERSONALES</h3>

                                                { /*ingrese su nombre*/}
                                                <div className="d-flex justify-content-center">
                                                    <div className="col-md-6 px-1">
                                                        <label className="form-label">Ingrese su nombre</label>
                                                        <input id="nombre" type="text" className="form-control" placeholder="John" name="nombre"
                                                            onChange={handleInputChange} value={form[name]}
                                                        />
                                                        <span className="text-danger fw-bold" id="errorNombre"></span>
                                                    </div>
                                                    {/*ingrese su apellido */}
                                                    <div className="col-md-6 px-1 ">
                                                        <label className="form-label">Ingrese su apellido</label>
                                                        <input id="apellido" type="text" className="form-control" placeholder="Doe" name="apellido"
                                                            onChange={handleInputChange} value={form[name]}
                                                        />
                                                        <span className="text-danger fw-bold" id="errorApellido"></span>
                                                    </div>
                                                </div>
                                                {/*dni*/}
                                                <div className="d-flex justify-content-center">
                                                    <div className="col-md-6 px-1">
                                                        <label className="form-label">Ingrese su DNI</label>
                                                        <input type="text" className="form-control" id="dni" placeholder="00-000-000" name="dni"
                                                            onChange={handleInputChange} value={form[name]}
                                                        />
                                                        <span className="text-danger fw-bold" id="errorDni"></span>
                                                    </div>
                                                    {/*cuil*/}
                                                    <div className="col-md-6 px-1">
                                                        <label className="form-label">Ingrese su CUIL</label>
                                                        <input id="cuil" type="text" className="form-control" placeholder="00-00-000-000-0" name="cuil"
                                                            onChange={handleInputChange} value={form[name]}
                                                        />
                                                        <span className="text-danger fw-bold" id="errorCuil"></span>
                                                    </div>
                                                </div>

                                                <div className="d-flex justify-content-center">
                                                    <div className="col-md-6 px-1">
                                                        <label className="form-label">Fecha de nacimiento</label>
                                                        <input id="fechaNacimiento" type="date" className="form-control" name="fechaNacimientoe"
                                                            onChange={handleInputChange} value={form[name]}

                                                        />
                                                    </div>

                                                    <div className="col-md-6 px-1">
                                                        <label className="form-label">Genero</label>
                                                        <select id="genero" type="text" className="form-control" aria-label="Default select example"
                                                            name="genero" onChange={handleInputChange} value={form[name]}
                                                        >
                                                            <option selected disabled>Sexo</option>
                                                            <option value="1">Masculino</option>
                                                            <option value="2">Femenino</option>
                                                            <option value="3">Sin especificar</option>
                                                        </select>

                                                    </div>
                                                </div>

                                                <div className="d-flex justify-content-center">

                                                    <Selects
                                                        label={"Nacionalidad"}
                                                        placeholder={"Paises"}
                                                        position={"id_pais"}
                                                        itemName={"nombre_pais"}
                                                        name={"id_pais"}
                                                        url={'http://localhost:5000/findPaises'}
                                                        value={form[name]}
                                                        onChange={handleInputChange}
                                                    />

                                                    {form.id_pais == 1 && (

                                                        <Selects
                                                            label={"Provincia."}
                                                            placeholder={"Provincias."}
                                                            position={"id_provincia"}
                                                            itemName={"nombre_provincia"}
                                                            url={'http://localhost:5000/findProvinces'}
                                                            name={"id_provincia"}
                                                            value={form[name]}
                                                            onChange={handleInputChange}
                                                        />
                                                    )}

                                                </div>

                                                {form.id_pais == 11 && (
                                                    <div className="col-md-12">
                                                        <label className="form-label">Ingrese su pais de procedencia</label>
                                                        <input type="text" id="inputOtroPais" name="inputOtroPais" className="form-control" placeholder="Nombre del Pais"
                                                            value={form[name]}
                                                            onChange={handleInputChange}
                                                        />
                                                        <span className="text-danger fw-bold" id="errorPais"></span>
                                                    </div>)}

                                                <div className="text-center d-flex justify-content-around">
                                                    <button className="btn btn-secondary botonAtras" data-bs-target="#carouselExampleDark"
                                                        data-bs-slide="prev"><i className="fas fa-chevron-left"></i> Anterior</button>

                                                    <button className="btn btn-primary botonAdelante" data-bs-target="#carouselExampleDark"
                                                        data-bs-slide="next">Siguiente <i className="fas fa-chevron-right"></i></button>
                                                </div>

                                            </div>

                                        </div>
                                        {/* PAGINA 3 CONTACTO Y ROL */}

                                        <div className="carousel-item" id="pagina3">

                                            <div className="bg-white rounded row g-4 p-3 d-flex align-items-center text-center"
                                                style={{ width: "40rem", border: "1px", solid: "#000" }}>

                                                <h3 className="text-center fw-bold">INFORMACIÓN DE CONTACTO Y ROL</h3>

                                                <div className="col-md-6">
                                                    <label className="form-label">Domicilio</label>
                                                    <input id="domicilio" type="text" className="form-control"
                                                        placeholder="Mz24 Cs45, Barrio XYZ" name="domicilio"
                                                        value={form[name]}
                                                        onChange={handleInputChange}
                                                    />
                                                    <span className="text-danger fw-bold" id="errorDomicilio"></span>
                                                </div>

                                                <div className="col-md-6">
                                                    <label className="form-label">Numero de telefono</label>
                                                    <div className="input-group">
                                                        <span className="input-group-text" id="prefijoTel">+</span>
                                                        <input type="text" className="form-control" id="numTelefono" name="numTelefono"
                                                            value={form[name]}
                                                            onChange={handleInputChange}
                                                        />
                                                    </div>
                                                    <span className="text-danger fw-bold" id="errorTelefono"></span>
                                                </div>

                                                <Selects
                                                    label={"Departamento en el que se encuentre."}
                                                    placeholder={"Departamentos."}
                                                    position={"id_depar"}
                                                    name={"id_depar"}
                                                    itemName={"nombre_depar"}
                                                    url={'http://localhost:5000/findDepar'}
                                                    value={form[name]}
                                                    onChange={handleInputChange}
                                                />

                                                <Selects
                                                    label={"Localidad en la que se encuentre."}
                                                    placeholder={"Localidades."}
                                                    position={"id_local"}
                                                    name={"id_local"}
                                                    itemName={"nombre_local"}
                                                    url={'http://localhost:5000/findLocal'}
                                                    value={form[name]}
                                                    onChange={handleInputChange}
                                                />

                                                <div className="col-md-12">
                                                    <label className="form-label">Seleccione su rol</label>
                                                    <select id="opcionRol" name="opcionRol" className="form-select"
                                                        value={form[name]}
                                                        onChange={handleInputChange}
                                                    >
                                                        <option id="select" selected disabled>Roles</option>
                                                        <option value="1">Postulante</option>
                                                        <option value="2">Empleador</option>
                                                        <option value="3">Particular</option>
                                                    </select>
                                                </div>

                                                {/* Empleador */}

                                                {form.opcionRol == 2 && (
                                                    <>
                                                        <div className="col-md-6">
                                                            <label className="form-label">Nombre de la empresa</label>
                                                            <input type="text" id="nombreEmpresa" className="form-control" placeholder="Nombre de la empresa"
                                                                name="nombreEmpresa"
                                                                value={form[name]} onChange={handleInputChange}
                                                            />
                                                            <span className="text-danger fw-bold" id="errorEmpresa"></span>
                                                        </div>

                                                        <Selects
                                                            label={"Rubros."}
                                                            placeholder={"Elija el rubro de su empresa"}
                                                            position={"id_rubro"}
                                                            itemName={"desc_rubro"}
                                                            name={"id_rubro"}
                                                            url={'http://localhost:5000/findRubro'}
                                                            value={form[name]}
                                                            onChange={handleInputChange}
                                                        />

                                                        <div className="col-md-6">
                                                            <label className="form-label">Locación de la empresa</label>
                                                            <input type="text" className="form-control" id="domicilioEmpresa"
                                                                placeholder="Mz24 Cs45, Barrio XYZ" name="domicilioEmpresa"
                                                                value={form[name]} onChange={handleInputChange}
                                                            />
                                                            <span className="text-danger fw-bold" id="errorDomEmpresa"></span>
                                                        </div>

                                                        <div className="col-md-6">
                                                            <label className="form-label">Numero de telefono Empresarial</label>
                                                            <div className="input-group">
                                                                <span id="prefijoEmpresa" className="input-group-text">+</span>
                                                                <input id="telEmpresa" type="text" className="form-control" name="telEmpresa"
                                                                    value={form[name]} onChange={handleInputChange}
                                                                />
                                                            </div>
                                                            <span className="text-danger fw-bold" id="errorTelEmpresa"></span>
                                                        </div>
                                                    </>
                                                )
                                                }
                                                {/* Postulante */}
                                                {form.opcionRol == 1 && (
                                                    <>
                                                        <div className="col-md-12 pb-3">
                                                            <label className="form-label">Nivel educativo alcancazado</label>
                                                            <select id="estado_laboral" className="form-select" aria-label="Default select example"
                                                                onChange={handleInputChange} value={form[name]}
                                                                name="estado_laboral"
                                                            >
                                                                <option value="" selected disabled>Estado laboral</option>
                                                                <option value="1">Desempleado</option>
                                                                <option value="2">Actualmente trabajando</option>
                                                            </select>
                                                        </div>

                                                        <div className="col-md-6">
                                                            <label className="form-label">Nivel educativo alcancazado</label>
                                                            <select className="form-select" id="nivel_educacion" aria-label="Default select example"
                                                                name="nivel_educacion"
                                                                onChange={handleInputChange} value={form[name]}
                                                            >
                                                                <option value="" selected disabled>Nivel educativo</option>
                                                                <option value="1">Secundario completo</option>
                                                                <option value="2">Secundario incompleto</option>
                                                                <option value="1">Terciario completo</option>
                                                                <option value="3">Terciario incompleto</option>
                                                            </select>
                                                        </div>

                                                        <Selects
                                                            label={"Rubros."}
                                                            placeholder={"Rubro en el que se desempeña"}
                                                            position={"id_rubro"}
                                                            itemName={"desc_rubro"}
                                                            name={"id_rubro"}
                                                            url={'http://localhost:5000/findRubro'}
                                                            value={form[name]} onChange={handleInputChange}
                                                        />
                                                    </>
                                                )}
                                                {form.id_rubro == 11 && (
                                                    <div className="col-md-12">
                                                        <label className="form-label">Otro rubro</label>
                                                        <input type="text" id="inputOtroRubro" className="form-control"
                                                            placeholder="Escriba el nombre del rubro" name="inputOtroRubro"
                                                            value={form[name]} onChange={handleInputChange}
                                                        />
                                                        <span className="text-danger fw-bold" id="errorRubro"></span>
                                                    </div>)}

                                                <div className="text-center d-flex justify-content-around">
                                                    <button className="btn btn-secondary botonAtras" id="botonAtras"
                                                        data-bs-target="#carouselExampleDark" data-bs-slide="prev"><i
                                                            className="fas fa-chevron-left"></i> Anterior</button>
                                                    <button className="btn btn-primary" id="btnRegistrarse" type="submit">Registrarse <i
                                                        className="fas fa-file-alt"></i></button>
                                                </div>

                                            </div>

                                        </div>

                                    </div>

                                    <div className="progress">
                                        <div className="progress-bar" role="progressbar" style={{ width: "0%" }} aria-valuenow="0"
                                            aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </main>
            <Footer />
        </>
    )
}
