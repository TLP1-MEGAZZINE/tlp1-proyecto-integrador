import { useState, useEffect } from 'react';
import { fetchFunction } from '../api/apiFetch';
import { useSweetAlert } from '../hooks/useSweetAlert';
import { ModalFile } from './ModalFile.component';

export const Files = ({ data, botones }) => {


    //OBTENER ARCHIVOS
    const [files, setFiles] = useState([]);

    useEffect(() => {
        const resultado = fetchFunction("findAllFiles", "POST", data)
            .then((resultado) => {
                setFiles(resultado)
            })
    }, [])

    //OBTENER IMAGENES
    const [imgs, setImg] = useState([]);

    useEffect(() => {
        const resultado = fetchFunction("findAllImgs", "POST", data)
            .then((resultado) => {
                setImg(resultado)
            })
    }, [])

    //ELIMINAR IMAGENES
    const handleDeleteImg = (idImg) => {
        const data = {
            id_image: idImg
        }
        console.log("IDIMg");
        console.log(data);

        const response = fetchFunction("deleteImg", "DELETE", data)

        if (!response.error) {
            useSweetAlert(response, "Imagen Eliminada Correctamente", "success")
                .then(() => {
                    window.location.reload()
                })
        } else {
            useSweetAlert(response, null, "error")
        }

    }

    //ELIMINAR ARCHIVOS
    const handleDeleteFile = (idFile) => {
        const data = {
            id_file: idFile
        }
        const response = fetchFunction("deleteFile", "DELETE", data)

        if (!response.error) {
            useSweetAlert(response, "Archivo Eliminado Correctamente", "success")
                .then(() => {
                    window.location.reload()
                })
        } else if (!response) {
            useSweetAlert(response, null, "error")
        }
    }

    return (
        <div className="table-responsive">
            <table className="table">
                <tbody>
                    <tr className='d-flex'>
                        <th><i className="bi bi-file-earmark-pdf-fill">PDF:</i></th>
                        {files.map((file, id_file) => (
                            file.url.endsWith(".pdf") && (
                                <>
                                    <td key={id_file}>
                                        <a href={`http://localhost:5000${file.url}`} target="_blank">
                                            {file.url.substring(9)} ,
                                        </a>
                                    </td>
                                    {botones == true && (<td>
                                        <ModalFile
                                            titulo={"¿Esta seguro de que desea eliminar este archivo?"}
                                            label={"No podras recuperar los archivos que elimines"}
                                            botonTxt={"Eliminar archivo"}
                                            icon={"bi-file-excel"}
                                            id={3}
                                            tipo={"delete"}
                                            children={<button type="button" className="btn btn-danger" data-bs-dismiss="modal"
                                                onClick={() => handleDeleteFile(file.id_file)} >Confirmar</button>}
                                        />
                                    </td >)}
                                </>
                            )
                        ))}
                    </tr>
                    <tr className='d-flex'>
                        <th><i className="bi bi-filetype-docx">DOCX:</i></th>
                        {files.map((file, id_file) => (
                            file.url.endsWith(".docx") && (
                                <>
                                    <td key={id_file}>
                                        <a href={`http://localhost:5000${file.url}`} target="_blank">
                                            {file.url.substring(9)} ,
                                        </a>
                                    </td>
                                    {botones == true && (<td>
                                        <ModalFile
                                            titulo={"¿Esta seguro de que desea eliminar este archivo?"}
                                            label={"No podras recuperar los archivos que elimines"}
                                            botonTxt={"Eliminar archivo"}
                                            icon={"bi-file-excel"}
                                            id={4}
                                            tipo={"delete"}
                                            children={<button type="button" className="btn btn-danger" data-bs-dismiss="modal"
                                                onClick={() => handleDeleteFile(file.id_file)} >Confirmar</button>}
                                        />
                                    </td>)}
                                </>
                            )
                        ))}
                    </tr>
                    <tr className='d-flex'>
                        <th><i className="bi bi-filetype-xlsx">XLSX:</i></th>
                        {files.map((file, id_file) => (
                            file.url.endsWith(".xlsx") && (
                                <>
                                    <td key={id_file}>
                                        <a href={`http://localhost:5000${file.url}`} target="_blank">
                                            {file.url.substring(9)} ,
                                        </a>
                                    </td>
                                    {botones == true && (<td>
                                        <ModalFile
                                            titulo={"¿Esta seguro de que desea eliminar este archivo?"}
                                            label={"No podras recuperar los archivos que elimines"}
                                            botonTxt={"Eliminar archivo"}
                                            icon={"bi-file-excel"}
                                            id={5}
                                            tipo={"delete"}
                                            children={<button type="button" className="btn btn-danger" data-bs-dismiss="modal"
                                                onClick={() => handleDeleteFile(file.id_file)} >Confirmar</button>}
                                        />
                                    </td>)}
                                </>
                            )
                        ))}
                    </tr>
                    <tr className='d-flex'>
                        <th><i className="bi bi-filetype-pptx">PPTX:</i></th>
                        {files.map((file, id_file) => (
                            file.url.endsWith(".pptx") && (
                                <>
                                    <td key={id_file}>
                                        <a href={`http://localhost:5000${file.url}`} target="_blank">
                                            {file.url.substring(9)} ,
                                        </a>
                                    </td>
                                    {botones == true && (<td>
                                        <ModalFile
                                            titulo={"¿Esta seguro de que desea eliminar este archivo?"}
                                            label={"No podras recuperar los archivos que elimines"}
                                            botonTxt={"Eliminar archivo"}
                                            icon={"bi-file-excel"}
                                            id={6}
                                            tipo={"delete"}
                                            children={<button type="button" className="btn btn-danger" data-bs-dismiss="modal"
                                                onClick={() => handleDeleteFile(file.id_file)} >Confirmar</button>}
                                        />
                                    </td>)}
                                </>
                            )
                        ))}
                    </tr>
                    <tr className='d-flex'>
                        <th><i className="bi bi-images">IMG:</i></th>
                        {imgs.map((img, id_image) => (
                            <>
                                <td key={id_image}>
                                    <a href={`http://localhost:5000${img.url}`} target="_blank">
                                        {img.url.substring(9)} ,
                                    </a>
                                </td>
                                {botones == true && (<td>
                                    <ModalFile
                                        titulo={"¿Esta seguro de que desea eliminar este archivo?"}
                                        label={"No podras recuperar los archivos que elimines"}
                                        botonTxt={"Eliminar archivo"}
                                        icon={"bi-file-excel"}
                                        id={7}
                                        tipo={"delete"}
                                        children={<button type="button" className="btn btn-danger" data-bs-dismiss="modal"
                                            onClick={() => handleDeleteImg(img.id_image)} >Confirmar</button>}
                                    />
                                </td>)}
                            </>
                        ))}
                    </tr>
                </tbody>
            </table>
        </div >

    )
}
