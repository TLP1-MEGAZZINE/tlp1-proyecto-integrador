import { fetchFileFunction } from "../api/apiFetchFiles"
import { fetchFunction } from "../api/apiFetch"
import { useState, useEffect } from "react"
import { useSweetAlert } from "../hooks/useSweetAlert"

export const ModalFile = ({ titulo, label, botonTxt, route, icon, id }) => {

    const [archivo, setArchivo] = useState({
        id_user: localStorage.getItem("id_user"),
    })

    const handleInput = (e) => {
        setArchivo(archivo => ({ ...archivo, url: e.target.files[0] }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault()

        const response = await fetchFileFunction(route, archivo)

        if (!response.error) {
            useSweetAlert(response, "Se subio el archivo con exito", "success")
                .then(() => {
                    window.location.reload()
                })
        } else {
            useSweetAlert(response, null, "error")
        }
    }

    console.log(archivo);

    return (
        <>
            {/* Button trigger modal*/}
            <div>
                <i className={`${icon} btn btn-primary`} data-bs-toggle="modal"
                    data-bs-target={`#modalFile${id}`}> {botonTxt}</i>
            </div>

            {/* Modal */}
            <div className="modal fade" id={`modalFile${id}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <form encType="multipart/form-data" onSubmit={handleSubmit}>

                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">{titulo}
                                    Seleccione su archivo</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>

                            <div className="modal-body">

                                <label className="form-label">{label}</label>
                                <input type="file" className="form-control" name="url"
                                    onChange={handleInput}
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

        </>
    )
}