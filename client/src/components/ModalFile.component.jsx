import { fetchFileFunction } from "../api/apiFetchFiles"
import { fetchFunction } from "../api/apiFetch"
import { useState } from "react"
import { useSweetAlert } from "../hooks/useSweetAlert"

export const ModalFile = ({ titulo, label, botonTxt, route, icon, id, tipo, children }) => {

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
        } else if (!response) {
            useSweetAlert(response, null, "error")
        }
    }

    return (
        <>
            {/* Button trigger modal*/}
            <div>
                {tipo === "upload" && (
                    <i className={`${icon} btn btn-primary`} data-bs-toggle="modal"
                        data-bs-target={`#modalFile${id}`}> {botonTxt}</i>
                )}

                {tipo === "delete" && (
                    <i className={`${icon} btn btn-danger`} data-bs-toggle="modal"
                        data-bs-target={`#modalFile${id}`}> {botonTxt}</i>
                )}



            </div>

            {/* Modal */}
            <div className="modal fade" id={`modalFile${id}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <form encType="multipart/form-data" onSubmit={handleSubmit}>

                        <div className="modal-content">

                            <div className="modal-header">
                                {tipo === "upload" && (
                                    <>
                                        <h1 className="modal-title fs-5" id="exampleModalLabel">{titulo}</h1>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>

                                    </>
                                )}

                                {tipo === "delete" && (
                                    <h1 className="modal-title fs-5" id="exampleModalLabel">{titulo}</h1>
                                )}

                            </div>

                            <div className="modal-body">

                                {tipo === "upload" && (
                                    <>
                                        <label className="form-label">{label}</label>
                                        <input type="file" className="form-control" name="url"
                                            onChange={handleInput}
                                        />
                                    </>
                                )}

                                {tipo === "delete" && (
                                    <>
                                        <label className="form-label">{label}</label>
                                    </>
                                )}

                            </div>
                            <div className="modal-footer">
                                {tipo === "upload" && (
                                    <>
                                        <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Cancelar</button>
                                        <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">Confirmar</button>
                                    </>)}

                                {tipo === "delete" && (
                                    <>
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                                        {children}
                                    </>)}
                            </div>
                        </div>
                    </form>
                </div >
            </div >

        </>
    )
}