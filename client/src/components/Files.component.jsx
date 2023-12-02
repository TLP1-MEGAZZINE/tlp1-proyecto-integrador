import { useState, useEffect } from 'react';
import { fetchFunction } from '../api/apiFetch';

export const Files = ({data}) => {


    //OBTENER ARCHIVOS
    const [files, setFiles] = useState([]);

    useEffect(() => {
        const resultado = fetchFunction("findAllFiles", "POST", data)
            .then((resultado) => {
                setFiles(resultado)
            })
    }, [])

    const [imgs, setImg] = useState([]);

    useEffect(() => {
        const resultado = fetchFunction("findAllImgs", "POST", data)
            .then((resultado) => {
                setImg(resultado)
            })
    }, [])

    console.log(imgs)
    return (
        <div className="table-responsive">
            <table className="table">

                <div className="row text-start">
                    <tbody>
                        <tr>

                            <th><i class="bi bi-file-earmark-pdf-fill">PDF:</i></th>
                            <tr>{/* Contenido para PDF */}</tr>
                        </tr>
                        <tr>
                            <th><i class="bi bi-filetype-docx">DOCX:</i></th>
                            <tr>{/* Contenido para DOCX */}</tr>
                        </tr>
                        <tr>
                            <th><i class="bi bi-filetype-xlsx">XLSX:</i></th>
                            <tr>{/* Contenido para XLSX */}</tr>
                        </tr>
                        <tr>
                            <th><i class="bi bi-filetype-pptx">PPTX:</i></th>
                            <tr>{/* Contenido para PPTX */}</tr>
                        </tr>
                        <tr>
                            <th><i class="bi bi-images">IMG:</i></th>
                            {imgs.map((img, id_image) => (
                                <p key={id_image}>{img.url}</p>
                            ))
                            }
                        </tr>
                    </tbody>
                </div>

            </table>
        </div>)
}
