import Header from "../components/Header";
import Footer from "../components/Footer";
import userIcon from "../assets/userIcon.png"
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { fetchFunction } from "../api/apiFetch";
import { useEffect, useState } from "react";

export const OtherProfile = () => {

    const [info, setInfo] = useState(null);
    const [contacto, setContacto] = useState(null);
    const [pfp, setPfp] = useState(null);

    const { id_user } = useParams()

    const data = {
        id_user: id_user
    }

    useEffect(() => {
        const infoUser = fetchFunction("findUserInfo", "POST", data)
            .then((infoUser) => {
                setInfo(infoUser);
            })
    }, [])

    useEffect(() => {
        const contacto = fetchFunction("findContact", "POST", data)
            .then((contacto) => {
                setContacto(contacto);
            })
    })

    useEffect(() => {
        const pfp = fetchFunction("findPfp", "POST", data)
            .then((pfp) => {
                if (!pfp.message) {
                    setPfp(pfp);
                } else {
                    setPfp(userIcon);
                    console.log("FOTO", foto);
                }
            })
    }, []);

    return (
        <>
            <Header />

            <div className="colorFondo">
                <div className="container-fluid">
                    <div className="row py-4">

                        <div className="col-md-4 col-sm-12">
                            <div className="card">

                                <img
                                    src={pfp == userIcon ? pfp : `${"http://localhost:5000/"}${pfp}`}
                                    className="card-img-top img-fluid"
                                    width="50px"
                                    height="100px"
                                    alt="Perfil de usuario"
                                    crossOrigin="anonymous"
                                />

                                <div className="card-body text-center">
                                    <h5 className="card-title">Nombre de usuario: {info?.User?.user_name}
                                        <br /></h5>

                                    <h5 className="card-title">Correo: {info?.User?.user_email}<br />
                                    </h5>


                                    {info?.id_rol == 1 && (
                                        <>
                                            <h5 className="card-title">Estado Laboral: <br />
                                            </h5>

                                            <h5 className="card-title">Nivel de Educación: <br />
                                            </h5>

                                            <h5 className="card-title">Rubro en el que te desempeñas: <br />
                                            </h5>

                                        </>
                                    )
                                    }

                                    {info?.id_rol == 2 && (
                                        <>
                                            <h5 className="card-title">Nombre de la Empresa: <br />
                                            </h5>

                                            <h5 className="card-title">Locacion de la empresa: <br />
                                            </h5>


                                            <h5 className="card-title">Numero telefonico de la empresa: <br />
                                            </h5>

                                            <h5 className="card-title">Rubro de la empresa: <br />
                                            </h5>
                                        </>
                                    )
                                    }

                                    <h6>Calificación con estrellas:</h6>

                                    <div className="rating">
                                        <i className="bi bi-star-fill" type="radio" name="rating" value="5" />
                                        <i className="bi bi-star-fill" type="radio" name="rating" value="4" />
                                        <i className="bi bi-star-fill" type="radio" name="rating" value="3" />
                                        <i className="bi bi-star-fill" type="radio" name="rating" value="2" />
                                        <i className="bi bi-star" type="radio" name="rating" value="1" />
                                    </div>

                                    <button className="btn btn-primary">Seguir</button>

                                </div>
                            </div>
                        </div>

                        <div className="col-md-8 col-sm-12">
                            <div className="card text-center d-flex flex-column justify-content-center colorFondo">
                                <div className="card-body">
                                    <h5 className="card-title text-light">Información del usuario</h5>
                                    <div className="table-responsive">
                                        <ul className="list-group table">

                                            <li className="list-group-item">Nombre y apellido: <br />{info?.nombre} {info?.apellido}
                                            </li>

                                            <li className="list-group-item">DNI:  <br />{info?.dni}
                                            </li>

                                            <li className="list-group-item">CUIL:  <br />{info?.cuil}
                                            </li>

                                            <li className="list-group-item">Genero: <br /> {info?.genero?.genero}
                                            </li>

                                            <li className="list-group-item">Fecha Nacimiento: <br /> {info?.fecha_nacimiento}
                                            </li>

                                            <li className="list-group-item">Pais:  <br />{info?.paise?.nombre_pais}
                                            </li>

                                            <li className="list-group-item">Departamento:  <br />{info?.departamento?.nombre_depar}
                                            </li>

                                            <li className="list-group-item">Localidad: <br /> {info?.localidad?.nombre_local}
                                            </li>

                                            <li className="list-group-item"></li>
                                        </ul>
                                    </div>

                                </div>
                                <div className="card-body">

                                    <h5 className="card-title text-light">Información de contacto</h5>

                                    <div className="table-responsive">

                                        <ul className="list-group table">

                                            <li className="list-group-item">Número de telefono:<br />
                                                {contacto?.num_tel}
                                            </li>

                                            <li className="list-group-item">Domicilio: <br />
                                                {contacto?.domicilio}
                                            </li>

                                        </ul>
                                    </div>

                                </div>

                            </div>
                        </div>

                    </div>

                </div>
            </div >

            <Footer />
        </>
    );
}
