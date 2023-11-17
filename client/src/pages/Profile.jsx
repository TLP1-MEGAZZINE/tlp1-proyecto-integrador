import "../Style.css";

export const Profile = () => {
  return (
    <div className="home colorFondo">
      <div className="container-fluid">
        <div className="container py-4">
          <div className="row">
            <div className="col-md-4 col-sm-12">
              <div className="card colorContenedor">
                <img
                  src="../src/assets/img/icon1.png"
                  className="card-img-top img-fluid"
                  width="50px"
                  height="100px"
                  alt="Perfil de usuario"
                />
                <div className="card-body text-center">
                  <h5 className="card-title">Nombre y Apellido</h5>
                  {rol}
                  <a
                    href="perfil/editar-perfil-usuario"
                    className="btn btn-primary"
                  >
                    Editar perfil del postulante
                  </a>
                  <div className="spacer"></div>
                  <a
                    href="perfil/editar-perfil-empresa"
                    className="btn btn-primary"
                  >
                    Editar perfil de la empresa
                  </a>
                  <div className="spacer"></div>
                  <h6>Calificación con estrellas:</h6>
                  <div className="rating">
                    <input type="radio" id="star5" name="rating" value="5" />
                    <label for="star5"></label>
                    <input type="radio" id="star4" name="rating" value="4" />
                    <label for="star4"></label>
                    <input type="radio" id="star3" name="rating" value="3" />
                    <label for="star3"></label>
                    <input type="radio" id="star2" name="rating" value="2" />
                    <label for="star2"></label>
                    <input type="radio" id="star1" name="rating" value="1" />
                    <label for="star1"></label>
                  </div>
                  <p id="selectedRating"></p>
                </div>
              </div>
            </div>
            <div className="col-md-8 col-sm-12 py-3 colorContenedor">
              <div className="card text-center d-flex flex-column justify-content-center colorFondo">
                <div className="card-body">
                  <h5 className="card-title">Información básica</h5>
                  <div className="table-responsive">
                    <ul className="list-group table">
                      <li className="list-group-item">Nombre y apellido</li>
                      <li className="list-group-item">Tipo de Usuario</li>
                      <li className="list-group-item"></li>
                    </ul>
                  </div>
                </div>
                <div className="card-body">
                  <h5 className="card-title">Experiencia Laboral</h5>
                  <div className="table-responsive">
                    <ul className="list-group table">
                      <li className="list-group-item">Nombre y apellido</li>
                      <li className="list-group-item">Tipo de Usuario</li>
                      <li className="list-group-item"></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
