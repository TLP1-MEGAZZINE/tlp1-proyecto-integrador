import { useState, useEffect } from 'react';
import { fetchFunction } from '../api/apiFetch';

export const Files = ({ data }) => {


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
                                    <td>
                                        <button className='btn btn-danger'>eliminar archivo</button>
                                    </td>
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
                                    <td>
                                        <button className='btn btn-danger'>eliminar archivo</button>
                                    </td>
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
                                    <td>
                                        <button className='btn btn-danger'>eliminar archivo</button>
                                    </td>
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
                                    <td>
                                        <button className='btn btn-danger'>eliminar archivo</button>
                                    </td>
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
                                <td>
                                    <button className='btn btn-danger'>eliminar archivo</button>
                                </td>
                            </>
                        ))}
                    </tr>
                </tbody>
            </table>
        </div>

    )
}
