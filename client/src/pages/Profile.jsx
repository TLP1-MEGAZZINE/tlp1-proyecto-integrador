import { useEffect, useState } from "react";
import userIcon from "../assets/userIcon.png"
import "../Style.css";
import { fetchFunction } from "../api/apiFetch";
import Header from "../components/Header";
import Footer from "../components/Footer"
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

export const Profile = () => {

  const { logout } = useContext(AuthContext);
  const navigate = useNavigate()

  const id_user = localStorage.getItem("id_user");
  const user_name = localStorage.getItem("user_name");
  const id_rol = localStorage.getItem("id_rol");

  const data = {
    id_user,
    id_rol
  }
  const [datos, setDatos] = useState(null);

  const [tipoRol, setTipoRol] = useState(null);

  useEffect(() => {
    const obtenerDatos = async () => {
      try {
        const resultado = await fetchFunction("findUserInfo", "POST", data);
        // Actualizar el estado con los datos obtenidos
        setDatos(resultado);
      } catch (error) {
        console.error("Hubo un error:", error);
      }
    };

    obtenerDatos();
  }, []);

  if (id_rol == 1) {
    useEffect(() => {
      const obtenerDatos = async () => {
        try {
          const resultado = await fetchFunction("findPostulante", "POST", data);
          // Actualizar el estado con los datos obtenidos
          setTipoRol(resultado);
        } catch (error) {
          console.error("Hubo un error:", error);
        }
      };

      obtenerDatos();
    }, []);
  } else if (id_rol == 2) {
    useEffect(() => {
      const obtenerDatos = async () => {
        try {
          const resultado = await fetchFunction("findEmpleador", "POST", data);
          // Actualizar el estado con los datos obtenidos
          setTipoRol(resultado);
        } catch (error) {
          console.error("Hubo un error:", error);
        }
      };
      obtenerDatos();
    }, []);
  }

  const handleDelete = () => {
    const response = fetchFunction("destroyUser", "DELETE", data)

    if (response) {
      Swal.fire({
        title: "Usuario Eliminado Correctamente",
        text: "Espero un momento...",
        icon: "success",
        showConfirmButton: false,
        timer: 2000
      })

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

  const handleEditarClick = () => {
    navigate("/auth/register-info")
  }

  const handleUpdateClick = () => {
    navigate("/auth/update-user")
  }

  return (
    <>
      <Header />

      <div className="colorFondo">
        <div className="container">
          <div className="row py-4">

            <div className="col-md-4 col-sm-12">
              <div className="card">
                <div>
                  <i className="bi bi-pencil btn btn-primary"> Editar foto de perfil</i>
                </div>

                <img
                  src={userIcon}
                  className="card-img-top img-fluid"
                  width="50px"
                  height="100px"
                  alt="Perfil de usuario"
                />

                <div className="card-body text-center">
                  <h5 className="card-title">Nombre de usuario:
                    <br />{user_name}</h5>

                  <h5 className="card-title">Correo: <br />
                    {datos?.User.user_email}</h5>


                  {id_rol == 1 && (
                    <>
                      <h5 className="card-title">Estado Laboral: <br />
                        {tipoRol?.estado_laboral.desc_estado_laboral}</h5>

                      <h5 className="card-title">Nivel de Educación: <br />
                        {tipoRol?.nivel_educacion.desc_nivel_educacion}</h5>

                      <h5 className="card-title">Rubro en el que te desempeñas: <br />
                        {tipoRol?.id_rubro == 11 ? tipoRol.otro_rubro : tipoRol?.rubro.desc_rubro}</h5>

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
                        {tipoRol?.id_rubro == 11 ? tipoRol.otro_rubro : tipoRol?.rubro.desc_rubro}</h5>

                    </>
                  )
                  }


                  <button href="#" className="btn btn-primary" onClick={handleUpdateClick}>Editar perfil</button>

                  <h6>Calificación con estrellas:</h6>

                  <div className="rating">
                    <input type="radio" id="star5" name="rating" value="5" />
                    <input type="radio" id="star4" name="rating" value="4" />
                    <input type="radio" id="star3" name="rating" value="3" />
                    <input type="radio" id="star2" name="rating" value="2" />
                    <input type="radio" id="star1" name="rating" value="1" />
                  </div>

                  <button href="#" className="btn btn-danger" onClick={handleDelete}>Eliminar perfil</button>

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
                        {datos?.nombre} {datos?.apellido} </li>

                      <li className="list-group-item">DNI: <br />
                        {datos?.dni}</li>

                      <li className="list-group-item">CUIL: <br />
                        {datos?.cuil}</li>

                      <li className="list-group-item">Genero: <br />
                        {datos?.genero?.genero}</li>

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

                  <h5 className="card-title text-light">Información de contacto</h5>

                  <div className="table-responsive">

                    <ul className="list-group table">

                      <li className="list-group-item">Número de telefono: <br /></li>

                      <li className="list-group-item">Domicilio: <br /></li>

                    </ul>
                  </div>
                  <div className="d-flex justify-content-end py-2">
                    <i href="#" className="bi bi-pencil btn btn-warning" onClick={handleEditarClick}>Editar</i>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </div>

      <Footer />
    </>
  );
};
