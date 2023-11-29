import { useEffect, useState } from "react";
import { fetchFunction } from "../api/apiFetch";

export const DescUser = (data) => {

    const [desc, setDesc] = useState(null);

    useEffect(() => {
        const resultado = fetchFunction("findDesc", "POST", data)
            .then((resultado) => {
                setDesc(resultado)
            })
    }, []);

    return (
        <div className="col-md-8 col-sm-12 mx-auto py-3">
            <div className="card text-center d-flex flex-column justify-content-center colorFondo">
                <div className="card-body">
                    <h5 className="card-title text-light">Descripción del usuario</h5>
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
                                {desc?.experiencias}
                            </li>

                            <li className="list-group-item"></li>
                        </ul>
                    </div>

                </div>
                <div className="card-body">

                    <h5 className="card-title text-light">Más Contenido</h5>

                    <div className="table-responsive">

                        <ul className="list-group table">

                            <li className="list-group-item">Archivos:<br /></li>
                            {desc?.archivos}
                        </ul>
                    </div>

                </div>
            </div>
        </div>)
}