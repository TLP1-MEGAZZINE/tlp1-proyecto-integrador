import Header from "../components/Header";
import Footer from "../components/Footer";
import userIcon from "../assets/userIcon.png"

export const OtherProfile = () => {
    return (
        <>
            <Header />

            <div className="colorFondo">
                <div className="container-fluid">
                    <div className="row py-4">

                        <div className="col-md-4 col-sm-12">
                            <div className="card">

                                <img
                                    src={userIcon}
                                    className="card-img-top img-fluid"
                                    width="50px"
                                    height="100px"
                                    alt="Perfil de usuario"
                                    crossOrigin="anonymous"
                                />

                                <div className="card-body text-center">
                                    <h5 className="card-title">Nombre de usuario:
                                        <br /></h5>

                                    <h5 className="card-title">Correo: <br />
                                    </h5>

{/* 
                                    {id_rol == 1 && (
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

                                    {id_rol == 2 && (
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
                                    } */}

                                    <h6>Calificación con estrellas:</h6>

                                    <div className="rating">
                                        <i className="bi bi-star-fill" type="radio" name="rating" value="5" />
                                        <i className="bi bi-star-fill" type="radio" name="rating" value="4" />
                                        <i className="bi bi-star-fill" type="radio" name="rating" value="3" />
                                        <i className="bi bi-star-fill" type="radio" name="rating" value="2" />
                                        <i className="bi bi-star" type="radio" name="rating" value="1" />
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="col-md-8 col-sm-12">
                            <div className="card text-center d-flex flex-column justify-content-center colorFondo">
                                <div className="card-body">
                                    <h5 className="card-title text-light">Información del usuario</h5>
                                    <div className="table-responsive">
                                        <ul className="list-group table">

                                            <li className="list-group-item">Nombre y apellido: <br />
                                            </li>

                                            <li className="list-group-item">DNI: <br />
                                            </li>

                                            <li className="list-group-item">CUIL: <br />
                                            </li>

                                            <li className="list-group-item">Genero: <br />
                                            </li>

                                            <li className="list-group-item">Fecha Nacimiento: <br />
                                            </li>

                                            <li className="list-group-item">Pais: <br />
                                            </li>

                                            <li className="list-group-item">Departamento: <br />
                                            </li>

                                            <li className="list-group-item">Localidad: <br />
                                            </li>

                                            <li className="list-group-item"></li>
                                        </ul>
                                    </div>
    
                                </div>
                                <div className="card-body">

                                    <h5 className="card-title text-light">Información de contacto</h5>

                                    <div className="table-responsive">

                                        <ul className="list-group table">

                                            <li className="list-group-item">Número de telefono: <br />
                                              </li>

                                            <li className="list-group-item">Domicilio: <br />
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
