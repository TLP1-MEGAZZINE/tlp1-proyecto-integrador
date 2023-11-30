import { useEffect, useState, useContext } from "react";
import userIcon from "../assets/userIcon.png"
import "../Style.css";
import { fetchFunction } from "../api/apiFetch";
import Header from "../components/Header.component";
import Footer from "../components/Footer.component"
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import { useForm } from "../hooks/useForms";
import { fetchFileFunction } from "../api/apiFetchFiles";
import { PosteosUser } from "../components/PosteosUser.component";
import { DescUser } from "../components/DescUser.component";
import { useSweetAlert } from "../hooks/useSweetAlert";

export const Profile = () => {

  const [errors, setErros] = useState("")

  const { logout } = useContext(AuthContext);

  const navigate = useNavigate()

  const handleEditarClick = () => {
    navigate("/auth/register-info")
  }

  const handleUpdateClick = () => {
    navigate("/auth/update-user")
  }

  const handleDescClick = () => {
    navigate("/auth/update-description")
  }

  const id_user = localStorage.getItem("id_user");
  const user_name = localStorage.getItem("user_name");
  const id_rol = localStorage.getItem("id_rol");

  const data = {
    id_user: id_user,
    id_rol
  }

  const { form, handleInputChange, reset } = useForm({
    id_user: data.id_user,
    id_rol: data.id_rol
  })

  //OBTENER INFO DEL USUARIO
  const [datos, setDatos] = useState(null);

  useEffect(() => {
   const resultado = fetchFunction("findUserInfo", "POST", data)
      .then((resultado) => {
        setDatos(resultado)
      })
  }, [])

  //OBTENER INFO SEGUN ROL
  const [tipoRol, setTipoRol] = useState(null);

  if (id_rol == 1) {
    useEffect(() => {
      const resultado = fetchFunction("findPostulante", "POST", data)
        .then((resultado) => {
          setTipoRol(resultado);
        })
    }, []);

  } else if (id_rol == 2) {
    useEffect(() => {
      const resultado = fetchFunction("findEmpleador", "POST", data)
        .then((resultado) => {
          setTipoRol(resultado)
        })
    }, []);
  }

  //OBTENER INFO DE CONTACTO
  const [contacto, setContacto] = useState(null);

  useEffect(() => {
    const resultado = fetchFunction("findContact", "POST", data)
      .then((resultado) => {
        setContacto(resultado);
      })
  }, []);

  //SUBIR FOTO DE PERFIL
  const [pfp, setPfp] = useState({
    id_user: data.id_user,
  })

  const handlePfpInput = (e) => {
    setPfp(pfp => ({ ...pfp, url: e.target.files[0] }));
  };

  const handlePfpSubmit = async (e) => {
    e.preventDefault()

    const response = await fetchFileFunction("pfp", pfp)

    if (response) {
      useSweetAlert(response, "Se subio la imagen con exito", "success")
        .then(() => {
          window.location.reload()
        })
    } else {
      useSweetAlert(response, null, "error")
    }
  }

  //BUSCAR FOTO DE PERFIL
  const [foto, setFoto] = useState(null);
  useEffect(() => {
    const obtenerDatos = async () => {
      try {
        const resultado = await fetchFunction("findPfp", "POST", data);
        if (!resultado.message) {
          setFoto(resultado);
        } else {
          setFoto(userIcon);
          console.log("FOTO", foto);
        }
      } catch (error) {
        console.log("Hubo un error:", error);
      }
    };
    obtenerDatos();
  }, []);

  //ELIMINAR PERFIL
  const handleDelete = () => {
    const response = fetchFunction("destroyUser", "DELETE", data)

    if (response) {
      useSweetAlert(response, "Usuario Eliminado Correctamente", "success")
      setTimeout(() => {
        localStorage.removeItem("token");
        localStorage.removeItem("user_name");
        localStorage.removeItem("id_user");
        localStorage.removeItem("id_rol");
        logout()
        navigate("/index")
      }, 2000);
    }
  }

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

  const [posts, setPosts] = useState([]);
  //POSTEOS
  useEffect(() => {
    const posts = fetchFunction("findUserPost", "POST", data)
      .then((posts) => {
        setPosts(posts);
      })
  }, [])

  return (
    <>
      <Header />

      <div className="colorFondo">
        <div className="container-fluid">
          <div className="row py-4">

            <div className="col-md-4 col-sm-12">
              <div className="card">
                <div>
                  <i className="bi bi-images btn btn-primary" data-bs-toggle="modal"
                    data-bs-target="#editarPfp"> Editar foto de perfil</i>
                </div>

                {/* MODAL */}
                <div className="modal fade" id="editarPfp" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                  <div className="modal-dialog">
                    <form encType="multipart/form-data" onSubmit={handlePfpSubmit}>
                      <div className="modal-content">


                        <div className="modal-header">
                          <h1 className="modal-title fs-5" id="staticBackdropLabel">Elija su foto de perfil</h1>
                          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>

                        <div className="modal-body">

                          <label className="form-label">Imagen</label>
                          <input type="file" className="form-control" name="url"
                            onChange={handlePfpInput}
                          />

                        </div>
                        <div className="modal-footer">
                          <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Cancelar</button>
                          <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">Confirmar</button>
                        </div>


                      </div>
                    </form>
                  </div>
                </div>

                <img
                  src={foto == userIcon ? foto : `${"http://localhost:5000/"}${foto}`}
                  className="card-img-top img-fluid img-thumbnail"
                  width="50px"
                  height="100px"
                  alt="Perfil de usuario"
                  crossOrigin="anonymous"
                />

                <div className="card-body text-center">
                  <h5 className="card-title">Nombre de usuario:
                    <br />{datos?.User?.user_name}</h5>

                  <h5 className="card-title">Correo: <br />
                    {datos?.User?.user_email}</h5>

                  <h5 className="card-title">
                    Rol: <br />
                    {id_rol == 1 ? "Postulante" : "Empleador"}
                  </h5>


                  {id_rol == 1 && (
                    <>
                      <h5 className="card-title">Situación Laboral: <br />
                        {tipoRol?.estado_laboral?.desc_estado_laboral}</h5>

                      <h5 className="card-title">Nivel de Educación: <br />
                        {tipoRol?.nivel_educacion?.desc_nivel_educacion}</h5>

                      <h5 className="card-title">Rubro en el que te desempeñas: <br />
                        {tipoRol?.id_rubro == 11 ? tipoRol?.otro_rubro : tipoRol?.rubro?.desc_rubro}
                      </h5>

                    </>
                  )
                  }

                  {id_rol == 2 && (
                    <>
                      <h5 className="card-title">Nombre de la Empresa: <br />
                        {tipoRol?.nombre_empresa}</h5>

                      <h5 className="card-title">Locacion de la empresa: <br />
                        {tipoRol?.domicilio_empresa}</h5>


                      <h5 className="card-title">Numero telefonico de la empresa: <br />
                        {tipoRol?.num_tel_empresa}</h5>

                      <h5 className="card-title">Rubro de la empresa: <br />
                        {tipoRol?.id_rubro == 11 ? tipoRol.otro_rubro : tipoRol?.rubro?.desc_rubro}</h5>

                    </>
                  )
                  }

                  <i href="#" className="bi bi-pencil btn btn-primary" onClick={handleUpdateClick}>  Editar perfil</i>

                  <h6>Calificación con estrellas:</h6>

                  <div className="rating">
                    <i className="bi bi-star-fill" type="radio" name="rating" value="5" />
                    <i className="bi bi-star-fill" type="radio" name="rating" value="4" />
                    <i className="bi bi-star-fill" type="radio" name="rating" value="3" />
                    <i className="bi bi-star-fill" type="radio" name="rating" value="2" />
                    <i className="bi bi-star" type="radio" name="rating" value="1" />
                  </div>

                  {/*Button trigger modal */}
                  <i type="button" className="btn btn-danger bi bi-file-excel" data-bs-toggle="modal" data-bs-target="#staticBackdrop">  Eliminar Cuenta
                  </i>

                  {  /* Modal */}
                  <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h1 className="modal-title fs-5" id="staticBackdropLabel">¿Estas seguro que deseas eliminar tu cuenta?</h1>
                          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                          ¡Si eliminas tu cuenta no podras recuperarla!
                        </div>
                        <div className="modal-footer">
                          <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Cancelar</button>
                          <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={handleDelete}>Confirmar</button>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/*INFO DE USUARIO */}
            <div className="col-md-8 col-sm-12">
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
                  <div className="d-flex justify-content-end py-2">
                    <i href="#" className="bi bi-pencil btn btn-warning" onClick={handleEditarClick}>Editar</i>
                  </div>
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

                    </ul>
                  </div>
                  <div className="d-flex justify-content-end py-2">
                    <i href="#" data-bs-toggle="modal" data-bs-target="#editarContacto" className="bi bi-pencil btn btn-warning">Editar</i>
                  </div>

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

                          </div>
                          <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Cancelar</button>
                            <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">Confirmar</button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>

                </div>

              </div>
            </div>

          </div>
          <div className="row">
            {/* POSTEOS Y DESCRIPCION*/}
            <div className="col-md-4 justify-content-center mx-auto">
              <div className="my-3 p-3 bg-body rounded shadow-sm">
                <div className="d-flex justify-content-center flex-wrap">
                  <h5 className="card-title text-dark">Mis públicaciones</h5>

                  <PosteosUser data={data} />

                </div>
              </div>
            </div>

            {id_rol == 1 ? (
              <>
                <DescUser data={data} />
                <div className="d-flex justify-content-end align-items-start">
                  <i href="#" className="bi bi-pencil btn btn-warning" onClick={handleDescClick}>Editar</i>
                </div>
              </>
            ) :
              <div></div>}
          </div>

        </div>
      </div >

      <Footer />
    </>
  );
};
