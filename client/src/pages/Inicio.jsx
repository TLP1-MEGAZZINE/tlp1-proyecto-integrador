import { useState } from "react";
import Footer from "../components/Footer.component";
import Header from "../components/Header.component";
import { Users } from "../components/Users.component";
import { Posteos } from "../components/Posteos.component";
import { useNavigate } from "react-router-dom";
import { Selects } from "../components/Selects.component";

function Inicio() {

    const navigate = useNavigate();

    const [selectedRubro, setSelectedRubro] = useState(0);
    const [selectedLocal, setSelectedLocal] = useState(0);
    const [rangoEdad, setRangoEdad] = useState(0)

    // Mover la definición de posts a este ámbito
    const [posts, setPosts] = useState([]);

    //RUBROS
    const handleSelectRubroChange = (event) => {
        setSelectedRubro(parseInt(event.target.value));

        const filterPost = posts.filter(
            post => post.id_rubro === parseInt(event.target.value)
        );
    };

    //LOCALIDADES
    const handleSelectLocalChange = (event) => {
        setSelectedLocal(event.target.value);

        const filterPost = posts.filter(
            post => post?.user_info?.localidad?.id_local === parseInt(event.target.value)
        );
    };
    //EDADES
    const handleEdadesChange = (event) => {
        setRangoEdad(event.target.value);

        const filterPost = posts.filter(
            post => post?.user_info?.fecha_nacimiento === parseInt(event.target.value)
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
                    <div className="row py-3">

                        <div className="col-2">

                            <Selects
                                label={null}
                                placeholder={"Filtrar Rubros"}
                                position={"id_rubro"}
                                itemName={"desc_rubro"}
                                name={"id_rubro"}
                                url={'findRubro'}
                                value={selectedRubro}
                                onChange={handleSelectRubroChange}
                                required={true}
                            />
                        </div>

                        <div className="col-2">
                            <select onChange={handleEdadesChange}
                                value={rangoEdad} className="form-select" aria-label="Default select example">
                                <option value="0" >Filtro Edades</option>
                                <option value="1">17-25</option>
                                <option value="2">25-35</option>
                                <option value="3">35-45</option>
                                <option value="4">+45</option>

                            </select>
                        </div>

                        <div className="col-2">
                            <Selects
                                label={null}
                                placeholder={"Filtrar localidad"}
                                position={"id_local"}
                                itemName={"nombre_local"}
                                name={"id_local"}
                                url={'findLocal'}
                                value={selectedLocal}
                                onChange={handleSelectLocalChange}
                                required={true}
                            />
                        </div>

                        <div className="col-6 text-end">
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
                                    <Posteos selectedRubro={0} />
                                )
                                    :
                                    <Posteos selectedRubro={selectedRubro} />
                            }

                            {
                                selectedLocal == 0 ? (
                                    <Posteos selectedLocal={0} />
                                )
                                    :
                                    <Posteos selectedLocal={selectedLocal} />
                            }

                            <small className="d-block text-end mt-3">
                                <a href="#">Todas las novedades</a>
                            </small>
                        </div>
                    </section>

                    <section className="col-4">
                        <div className="my-3 p-3 bg-body rounded shadow-sm">
                            <h6 className="border-bottom pb-2 mb-0">Usuarios Sugeridos</h6>

                            <Users />

                            <small className="d-block text-end mt-3">
                                <a href="#">Ver todas los usuarios</a>
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