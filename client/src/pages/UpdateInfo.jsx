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
            const resultado = await fetchFunction("findUserInfo", "POST", data);
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
        const response = await fetchFunction("updateUserInfo", "PUT", form)
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

                                    { /*PAGINA 2 INFO PERSONAL*/}

                                    <h3 className="text-center fw-bold">Información de usuario</h3>

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
                                                <input type="date" className="form-control" name="fecha_nacimiento"
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
                                                url={'findPaises'}
                                                value={form[name]}
                                                onChange={handleInputChange}
                                            />


                                            {form.id_pais == 1 && (

                                                <Selects
                                                    label={"Provincia."}
                                                    placeholder={"Provincias."}
                                                    position={"id_provincia"}
                                                    itemName={"nombre_provincia"}
                                                    url={'findProvinces'}
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
                                                url={'findDepar'}
                                                value={form[name]}
                                                onChange={handleInputChange}
                                            />

                                            <Selects
                                                label={"Localidad en la que se encuentre."}
                                                placeholder={"Localidades."}
                                                position={"id_local"}
                                                name={"id_local"}
                                                itemName={"nombre_local"}
                                                url={'findLocal'}
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
