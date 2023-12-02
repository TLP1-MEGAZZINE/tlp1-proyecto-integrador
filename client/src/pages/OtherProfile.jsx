import Header from "../components/Header.component";
import Footer from "../components/Footer.component";
import userIcon from "../assets/userIcon.png"
import { useParams } from "react-router-dom";
import { fetchFunction } from "../api/apiFetch";
import { useEffect, useState } from "react";
import { useBoleean } from "../hooks/useHiddenPass";
import { PosteosUser } from "../components/PosteosUser.component";
import { DescUser } from "../components/DescUser.component";

export const OtherProfile = () => {

    const [info, setInfo] = useState(null);
    const [contacto, setContacto] = useState(null);
    const [pfp, setPfp] = useState(null);
    const [rolInfo, setRolInfo] = useState(null);

    const { id_user } = useParams()

    const data = {
        id_user: id_user
    }

    //INFO DE USUARIO
    useEffect(() => {
        const infoUser = fetchFunction("findUserInfo", "POST", data)
            .then((infoUser) => {
                setInfo(infoUser);
            })
    }, [])

    console.log(info);
    //INFO DE ROL
    useEffect(() => {
        if (info?.User?.id_rol == 1) {
            const rolInformation = fetchFunction("findPostulante", "POST", data)
                .then((rolInformation) => {
                    setRolInfo(rolInformation);
                })
        } else {
            const rolInformation = fetchFunction("findEmpleador", "POST", data)
                .then((rolInformation) => {
                    setRolInfo(rolInformation);
                })
        }
    }, [info])

    //INFO DE CONTACTO
    useEffect(() => {
        const contacto = fetchFunction("findContact", "POST", data)
            .then((contacto) => {
                setContacto(contacto);
            })
    }, [])

    //PFP
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

    //DESCRIPCION
    const [desc, setDesc] = useState(null);

    useEffect(() => {
        const obtenerDatos = async () => {
            const resultado = await fetchFunction("findDesc", "POST", data);
            setDesc(resultado);
        };
        obtenerDatos();
    }, []);

    const { boleean, handleBoleean } = useBoleean()

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
                                    className="card-img-top img-fluid img-thumbnail"
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

                                    <h5 className="card-title">
                                        Rol: <br />
                                        {info?.User?.id_rol == 1 ? "Postulante" : "Empleador"}
                                    </h5>

                                    {info?.User?.id_rol == 1 && (
                                        <>
                                            <h5 className="card-title">Situación Laboral: <br />
                                                {rolInfo?.estado_laboral?.desc_estado_laboral}
                                            </h5>

                                            <h5 className="card-title">Nivel de Educación: <br />
                                                {rolInfo?.nivel_educacion?.desc_nivel_educacion}
                                            </h5>

                                            <h5 className="card-title">Rubro en el que te desempeñas: <br />
                                                {rolInfo?.id_rubro == 11 ? rolInfo?.otro_rubro : rolInfo?.rubro?.desc_rubro}
                                            </h5>

                                        </>
                                    )
                                    }

                                    {info?.User?.id_rol == 2 && (
                                        <>
                                            <h5 className="card-title">Nombre de la Empresa: <br />
                                                {rolInfo?.nombre_empresa}
                                            </h5>

                                            <h5 className="card-title">Locacion de la empresa: <br />
                                                {rolInfo?.domicilio_empresa}
                                            </h5>


                                            <h5 className="card-title">Numero telefonico de la empresa: <br />
                                                {rolInfo?.num_tel_empresa}
                                            </h5>

                                            <h5 className="card-title">Rubro de la empresa: <br />
                                                {rolInfo?.id_rubro == 11 ? rolInfo?.otro_rubro : rolInfo?.rubro?.desc_rubro}
                                            </h5>
                                        </>
                                    )
                                    }

                                    <h6>Calificación con estrellas:</h6>

                                    <div className="p-2">
                                        <i className={`bi ${!boleean.star1 ? "bi-star" : "bi-star-fill"}`} value={boleean.star1} onClick={() => handleBoleean("star1")} />
                                        <i className={`bi ${!boleean.star2 ? "bi-star" : "bi-star-fill"}`} value={boleean.star2} onClick={() => handleBoleean("star2")} />
                                        <i className={`bi ${!boleean.star3 ? "bi-star" : "bi-star-fill"}`} value={boleean.star3} onClick={() => handleBoleean("star3")} />
                                        <i className={`bi ${!boleean.star4 ? "bi-star" : "bi-star-fill"}`} value={boleean.star4} onClick={() => handleBoleean("star4")} />
                                        <i className={`bi ${!boleean.star5 ? "bi-star" : "bi-star-fill"}`} value={boleean.star5} onClick={() => handleBoleean("star5")} />
                                    </div>

                                    <button type="button" onClick={() => handleBoleean("follow")} value={boleean.follow} className={`btn ${!boleean.follow ? "btn-primary" : "btn-success"}`}>
                                        {!boleean.follow ? "Seguir" : "Siguiendo"}</button>

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

                                    {info?.User?.id_rol == 1 ? (
                                        <DescUser data={data} />
                                    ) : <div></div>}

                                </div>

                            </div>
                        </div>

                        {/* POSTEOS Y DESCRIPCION*/}
                        <div className={
                            // `${info?.User?.id_rol == 1 ? "col-md-4 justify-content-center mx-auto": 
                            "col-md-12 justify-content-center mx-auto"} >
                            <div className="my-3 p-3 bg-body rounded shadow-sm">
                                <h5 className="card-title text-dark d-flex justify-content-center">Publicaciones del usuario</h5>
                                <div className="d-flex justify-content-center flex-wrap">

                                    <PosteosUser data={data} />
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
