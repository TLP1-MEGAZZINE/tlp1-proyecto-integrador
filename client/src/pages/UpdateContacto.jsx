import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useForm } from '../hooks/useForms'
import { Selects } from "../components/Selects"
import { useNavigate } from "react-router-dom"
import { fetchFunction } from '../api/apiFetch'
import { useEffect, useState } from 'react'

export const UpdateInfo = () => {

    const id_user = localStorage.getItem("id_user")

    const data = {
        id_user
    }

    const navigate = useNavigate()

    const handleCancel = () => {
        navigate("/auth/my-profile")
    }

    const [info, setInfo] = useState(null);

    useEffect(() => {
        const obtenerDatos = async () => {
            const resultado = await fetchFunction("updateUserContact", "POST", data);
            // Actualizar el estado con los datos obtenidos
            console.log("resultado", resultado);
            setInfo(resultado);
        };

        obtenerDatos();
    }, []);

    console.log("info", info?.nombre);

    const { form, handleInputChange } = useForm({
        id_user: id_user
    })
    console.log("form", form);

    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await fetchFunction("updateUserInfo", "POST", form)
        console.log("response", response);
        if (response.message) {
            Swal.fire({
                title: response.message,
                text: "Espero un momento...",
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

                                    { /*PAGINA 2 INFO PERSONAL*/}

                                    <h3 className="text-center fw-bold">Información de la Cuenta</h3>

                                    <div>

                                        { /*ingrese su nombre*/}
                                        <div className="d-flex justify-content-center">
                                            <div className="col-md-6 px-1">
                                                <label className="form-label">Ingrese su nombre</label>
                                                <input id="nombre" type="text" className="form-control" placeholder="John" name="nombre"
                                                    onChange={handleInputChange} value={form[name]}
                                                />
                                                <span className="text-danger fw-bold"></span>
                                            </div>

                                            {/*ingrese su apellido */}
                                            <div className="col-md-6 px-1 ">
                                                <label className="form-label">Ingrese su apellido</label>
                                                <input id="apellido" type="text" className="form-control" placeholder="Doe" name="apellido"
                                                    onChange={handleInputChange} value={form[name]}
                                                />
                                                <span className="text-danger fw-bold"></span>
                                            </div>
                                        </div>
                                        {/*dni*/}
                                        <div className="d-flex justify-content-center">
                                            <div className="col-md-6 px-1">
                                                <label className="form-label">Ingrese su DNI</label>
                                                <input type="number" className="form-control" id="dni" placeholder="00-000-000" name="dni"
                                                    onChange={handleInputChange} value={form[name]}
                                                />
                                                <span className="text-danger fw-bold" ></span>
                                            </div>
                                            {/*cuil*/}
                                            <div className="col-md-6 px-1">
                                                <label className="form-label">Ingrese su CUIL</label>
                                                <input id="cuil" type="number" className="form-control" placeholder="00-00-000-000-0" name="cuil"
                                                    onChange={handleInputChange} value={form[name]}
                                                />
                                                <span className="text-danger fw-bold"></span>
                                            </div>
                                        </div>

                                        <div className="d-flex justify-content-center">
                                            <div className="col-md-6 px-1">
                                                <label className="form-label">Fecha de nacimiento</label>
                                                <input id="fechaNacimiento" type="date" className="form-control" name="fechaNacimientoe"
                                                    onChange={handleInputChange} value={form[name]}

                                                />
                                                <span className="text-danger fw-bold"></span>

                                            </div>

                                            <div className="col-md-6 px-1">
                                                <label className="form-label">Genero</label>
                                                <select type="text" className="form-control" aria-label="Default select example"
                                                    name="id_genero" onChange={handleInputChange} value={form[name]}
                                                >
                                                    <option selected disabled>Sexo</option>
                                                    <option value="1">Masculino</option>
                                                    <option value="2">Femenino</option>
                                                    <option value="3">Sin especificar</option>
                                                </select>
                                                <span className="text-danger fw-bold"></span>
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
                                        <span className="text-danger fw-bold"></span>

                                        {form.id_pais == 11 && (
                                            <div className="col-md-12">
                                                <label className="form-label">Ingrese su pais de procedencia</label>
                                                <input type="text" name="otro_pais" className="form-control" placeholder="Nombre del Pais"
                                                    value={form[name]}
                                                    onChange={handleInputChange}
                                                />
                                                <span className="text-danger fw-bold"></span>
                                            </div>)}

                                        <div className="d-flex justify-content-center">
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
                                        </div>
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
            </main>
            <Footer />
        </>
    )
}



<div className="carousel-item-active">

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

       

        <div className="text-center d-flex justify-content-around">
            <button className="btn btn-secondary botonAtras" id="botonAtras"
                data-bs-target="#carouselExampleDark" data-bs-slide="prev"><i
                    className="fas fa-chevron-left"></i> Anterior</button>
            <button className="btn btn-primary" id="btnRegistrarse" type="submit">Registrarse <i
                className="fas fa-file-alt"></i></button>
        </div>

    </div>

</div>