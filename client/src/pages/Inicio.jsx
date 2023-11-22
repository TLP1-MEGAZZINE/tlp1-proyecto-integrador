import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Users } from "../components/Users";
import { Posteos } from "../components/Posteos";
import{ useNavigate } from "react-router-dom";


function Inicio() {

    const navigate = useNavigate();

    const [selectedRubro, setSelectedRubro] = useState(0);

    // Mover la definición de posts a este ámbito
    const [posts, setPosts] = useState([]);

    const handleSelectChange = (event) => {
        setSelectedRubro(event.target.value);

        const filterPost = posts.filter(
            post => post.id_rubro === parseInt(event.target.value)
        );
    };

const handleNewPost = () => {
    navigate("/auth/new-post")
}

    return (
        <>
            <Header />

            <div className="container-fluid">


                <article className="row">
                    <div className="row">

                            <div className="col-2">
                                
                                <select onChange={handleSelectChange}
                                    value={selectedRubro} className="form-select" aria-label="Default select example" required>
                                    <option value="0" >Filtro Rubros</option>
                                    <option value="1">Salud</option>
                                    <option value="2">Tecnologia/Informatica</option>
                                    <option value="3">Educación</option>
                                    <option value="4">Finanzas</option>
                                    <option value="5">Manufactura</option>
                                    <option value="6">Ventas</option>
                                    <option value="7">Administración</option>
                                    <option value="8">Alimenticio</option>
                                    <option value="9">Construcción</option>
                                    <option value="10">Docente</option>
                                    <option value="11">Otros</option>
                                </select>

                                <button className="btn btn-primary" onClick={handleNewPost}>Nuevo posteo</button>
                        </div>

                    </div>
                    <div className="row">

                    </div>
                    <section className="col-8">
                        <div className="my-3 p-3 bg-body rounded shadow-sm">
                            <h6 className="border-bottom pb-2 mb-0">Nuevas Ofertas</h6>

                            {
                                selectedRubro == 0 ? (
                                    <Posteos selectedRubro={""} />
                                )
                                    :
                                    <Posteos selectedRubro={selectedRubro} />
                            }

                            <small className="d-block text-end mt-3">
                                <a href="novedades">Todas las novedades</a>
                            </small>
                        </div>
                    </section>

                    <section className="col-4">
                        <div className="my-3 p-3 bg-body rounded shadow-sm">
                            <h6 className="border-bottom pb-2 mb-0">Usuarios Sugeridos</h6>

                            <Users />

                            <small className="d-block text-end mt-3">
                                <a href="solicitudes">Ver todas las solicitudes</a>
                            </small>
                        </div>

                    </section>

                </article>
            </div>

            <Footer />
        </>
    )
}


export default Inicio