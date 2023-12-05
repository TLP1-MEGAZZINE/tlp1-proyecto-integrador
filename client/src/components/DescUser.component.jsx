import { useEffect, useState } from "react";
import { fetchFunction } from "../api/apiFetch";
import { useNavigate } from "react-router-dom";
import { useSweetAlert } from "../hooks/useSweetAlert";
import { useForm } from "../hooks/useForms";

export const DescUser = ({ data, children, btns }) => {


    const [errors, setErros] = useState("")

    const { form, handleInputChange, reset } = useForm({
        id_user: data.id_user,
        id_rol: data.id_rol
    })

    const navigate = useNavigate()

    const handleEditarClick = () => {
        navigate("/auth/register-info")
    }

    //OBTENER DESCRIPCION
    const [desc, setDesc] = useState();

    useEffect(() => {
        const resultado = fetchFunction("findDesc", "POST", data)
            .then((resultado) => {
                setDesc(resultado)
            })
    }, [data]);

    //OBTENER INFO DEL USUARIO
    const [datos, setDatos] = useState(null);

    useEffect(() => {
        const resultado = fetchFunction("findUserInfo", "POST", data)
            .then((resultado) => {
                setDatos(resultado)
            })
    }, [])

    //OBTENER INFO DE CONTACTO
    const [contacto, setContacto] = useState(null);

    useEffect(() => {
        const resultado = fetchFunction("findContact", "POST", data)
            .then((resultado) => {
                setContacto(resultado);
            })
    }, []);

    //ACTUALIZAR CONTACTO
    const handleContact = async (e) => {
        e.preventDefault()

        const response = await fetchFunction("updateUserContact", "PUT", form)

        if (response.message) {
            useSweetAlert(response, "Contacto Actualizado", "success")
            setContacto(form)
            reset()
        } else {
            useSweetAlert(response.errors.array, null, "error")
            setErros(response.errors.object)
        }
    }

    console.log("data");
    console.log(data);

    return (
        <>
            <div className="col-md-7 col-sm-12">
                <div className="card text-center d-flex flex-column justify-content-center colorFondo">
                    <div className="card-body">
                        <h5 className="card-title text-light">Información del usuario</h5>
                        <div className="table-responsive">
                            <ul className="list-group table">

                                <li className="list-group-item">Nombre y apellido: <br />
                                    {datos?.nombre} {datos?.apellido} </li>

                                <li className="list-group-item">DNI: <br />
                                    {datos?.dni}</li>

                                <li className="list-group-item">CUIL: <br />
                                    {datos?.cuil}</li>

                                <li className="list-group-item">Genero: <br />
                                    {datos?.genero?.genero}</li>

                                <li className="list-group-item">Fecha Nacimiento: <br />
                                    {datos?.fecha_nacimiento}</li>

                                <li className="list-group-item">Pais: <br />
                                    {datos?.paise?.nombre_pais != "Otros" ? datos?.paise?.nombre_pais : datos?.otro_pais}</li>

                                <li className="list-group-item">Departamento: <br />
                                    {datos?.departamento?.nombre_depar}</li>

                                <li className="list-group-item">Localidad: <br />
                                    {datos?.localidad?.nombre_local}</li>

                                <li className="list-group-item"></li>
                            </ul>
                        </div>

                        {btns == true &&
                            (<div className="d-flex justify-content-end py-2">
                                <i href="#" className="bi bi-pencil btn btn-warning" onClick={handleEditarClick}>Editar</i>
                            </div>)}

                    </div>

                    <div className="card-body">
                        {/*INFO DE CONTACTO */}
                        <h5 className="card-title text-light">Información de contacto</h5>

                        <div className="table-responsive">

                            <ul className="list-group table">

                                <li className="list-group-item">Domicilio: <br />
                                    {contacto?.domicilio}</li>

                                <li className="list-group-item">Número de telefono: <br />
                                    {contacto?.num_tel}</li>

                                <li className="list-group-item">Redes sociales: <br />
                                    <a href={`${contacto?.redes}`} target="_blank">{contacto?.redes}</a>
                                </li>

                            </ul>
                        </div>


                        {btns == true &&
                            (<div className="d-flex justify-content-end py-2">
                                <i href="#" data-bs-toggle="modal" data-bs-target="#editarContacto" className="bi bi-pencil btn btn-warning">Editar</i>
                            </div>)}

                        {/* MODAL */}
                        <div className="modal fade" id="editarContacto" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <form action="" onSubmit={handleContact}>
                                        <div className="modal-header">
                                            <h1 className="modal-title fs-5" id="staticBackdropLabel">Agregue su información de contacto</h1>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body d-flex flex-column">

                                            <label className="form-label">Domicilio</label>
                                            <input type="text" className="form-control" name="domicilio"
                                                onChange={handleInputChange} value={form[name]}
                                            />
                                            <span className="text-danger fw-bold">{errors?.domicilio?.msg}</span>


                                            <label className="form-label">Número de telefono</label>
                                            <input type="number" className="form-control" name="num_tel"
                                                onChange={handleInputChange} value={form[name]}
                                            />
                                            <span className="text-danger fw-bold">{errors?.num_tel?.msg}</span>


                                            <label className="form-label">Redes sociales</label>
                                            <input type="text" className="form-control" name="redes"
                                                onChange={handleInputChange} value={form[name]}
                                            />
                                            <span className="text-danger fw-bold">{errors?.redes?.msg}</span>

                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Cancelar</button>
                                            <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">Confirmar</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                        {/* DESCRIPCION */}

                        {data.id_rol == 1 && (
                            <>
                                <h5 className="card-title text-light pt-4">Descripción del usuario</h5>
                                <div className="table-responsive">
                                    <ul className="list-group table">

                                        <li className="list-group-item">Descripción personal:  <br />
                                            {desc?.descripcion}
                                        </li>

                                        <li className="list-group-item">Mis estudios: <br />
                                            {desc?.estudios}
                                        </li>

                                        <li className="list-group-item">Mis habilidades:  <br />
                                            {desc?.habilidades}
                                        </li>

                                        <li className="list-group-item">Mis intereses:  <br />
                                            {desc?.intereses}
                                        </li>

                                        <li className="list-group-item">Experiencias Profesionales: <br />
                                            {desc?.experiencia}
                                        </li>

                                        <li className="list-group-item"></li>
                                    </ul>
                                </div>

                                {children}
                            </>
                        )
                        }
                    </div>
                </div>
            </div>
        </>
    )
}