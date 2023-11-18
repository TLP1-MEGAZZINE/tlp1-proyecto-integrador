import { useEffect, useState } from "react";
import userIcon from "../assets/userIcon.png"
import "../Style.css";
import { fetchFunction } from "../api/apiFetch";
import Header from "../components/Header";
import Footer from "../components/Footer"

export const Profile = () => {
  const id_user = localStorage.getItem("id_user");

  const data = {
    id_user
  }
  const [datos, setDatos] = useState(null); 

  useEffect(() => {
    const obtenerDatos = async () => {
      try {
        // Llamada a la función que devuelve una promesa
        const resultado = await fetchFunction("findUserInfo", "POST", data);

        // Actualizar el estado con los datos obtenidos
        setDatos(resultado);
      } catch (error) {
        console.error("Hubo un error:", error);
      }
    };

    obtenerDatos();
  }, []); 

  return (
    <>
      <Header />

      <div className="colorFondo">
        <div className="container">
          <div className="row py-4">
            
            <div className="col-md-4 col-sm-12">
              <div className="card">
                <img
                  src={userIcon}
                  className="card-img-top img-fluid"
                  width="50px"
                  height="100px"
                  alt="Perfil de usuario"
                />
                <div className="card-body text-center">
                  <h5 className="card-title">Nombre de usuario:
                  <br /> XD</h5>

                  <a href="#" className="btn btn-primary">Editar perfil</a>

                  <h6>Calificación con estrellas:</h6>

                  <div className="rating">
                    <input type="radio" id="star5" name="rating" value="5" />
                    <input type="radio" id="star4" name="rating" value="4" />
                    <input type="radio" id="star3" name="rating" value="3" />
                    <input type="radio" id="star2" name="rating" value="2" />
                    <input type="radio" id="star1" name="rating" value="1" />
                  </div>

                  <p id="selectedRating"></p>

                </div>
              </div>
            </div>

            <div className="col-md-8 col-sm-12">
              <div className="card text-center d-flex flex-column justify-content-center colorFondo">
                <div className="card-body">
                  <h5 className="card-title text-light">Información básica</h5>
                  <div className="table-responsive">
                    <ul className="list-group table">

                      <li className="list-group-item">Nombre y apellido: <br />
                      {datos?.nombre} {datos?.apellido} </li>

                      <li className="list-group-item">DNI: <br />
                      {datos?.dni}</li>

                      <li className="list-group-item">CUIL: <br />
                      {datos?.cuil}</li>

                      <li className="list-group-item">Pais: <br />
                      {datos?.paise.nombre_pais}</li>

                      <li className="list-group-item">Genero: <br />
                      {datos?.genero.genero}</li>

                      <li className="list-group-item">Departamento: <br />
                      {datos?.departamento.nombre_depar}</li>

                      <li className="list-group-item">Localidad: <br />
                      {datos?.localidad.nombre_local}</li>

                      <li className="list-group-item"></li>
                    </ul>
                  </div>
                </div>
                <div className="card-body">
                  <h5 className="card-title text-light">Experiencia Laboral</h5>
                  <div className="table-responsive">
                    <ul className="list-group table">
                      <li className="list-group-item">Descripcion: <br /></li>
                    </ul>
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
