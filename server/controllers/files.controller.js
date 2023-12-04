//IMPORTACIONES
const { subirPfp, findpfp, subirImg, findAllImgs, deleteImg } = require('../models/imagenes.model');
const { createFile, findFiles, deleteFile } = require("../models/files.model")

//CARGAR IMAGENES
const ctrlUploadPfp = async (req, res) => {
    try {
        if (req.file) {
            const data = req.body;

            const { filename } = req.file;

            // Guardar la información de la imagen en la base de datos
            const newImage = subirPfp(filename, data);

            if (!newImage) {
                res.status(500).json({ message: 'Error al subir la imagen.' });
            } else {
                res.status(201).json({ message: "Imagen subida con éxito." });
            }
        }
    } catch (error) {
        console.error('Error al subir la imagen:', error);
        res.status(500).json({ message: 'Error al subir la imagen.' });
    }
};

//BUSCAR FOTO DE PERFIL
const ctrlFindPfp = async (req, res) => {
    try {
        const data = req.body

        const pfp = await findpfp(data);
        if (pfp) {
            return res.status(200).json(pfp.url)
        }
        return res.status(400).json({ message: "No se encontro la foto de perfil" })

    } catch (error) {
        console.log("No se pudo encontrar la pfp", error);
        return res.status(500).send("Internal Server Error")
    }
}

//BUSCAR TODAS LAS IMAGENES NO PFP
const ctrlfindAllImgs = async (req, res) => {
    try {
        const data = req.body

        const pfp = await findAllImgs(data);
        if (pfp) {
            return res.status(200).json(pfp)
        }
        return res.status(400).json({ message: "No se encontraron imagenes" })

    } catch (error) {
        return res.status(500).send("Internal Server Error")
    }
}

//ELIMINAR IMAGEN
const ctrlDeleteImg = async (req, res) => {
    try {
        const data = req.body

        const deletedFile = await deleteImg(data)

        if (deletedFile) {
            res.status(201).json({ message: "Imagen eliminado con exito." });
        } else {
            res.status(500).json({ message: 'Error al eliminar el archivo.', error: "Error" });
        }

    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar el archivo.' });
    }

}

//SUBIR ARCHIVO
const ctrlCreateFile = async (req, res) => {
    try {

        if (req.file) {
            const file = { filename, mimetype } = req.file;
            const data = req.body;
            if (file.filename.endsWith('.pdf') || file.filename.endsWith('.docx')
                || file.filename.endsWith('.xlsx') || file.filename.endsWith('.pptx')) {

                console.log(file);

                const archivos = await createFile(data, file.filename);

                if (archivos) {
                    return res.status(201).json({ message: "Archivo subido con exito." });
                } else {
                    res.status(500).json({ message: 'Error al subir el archivo.', error: "Error" });
                }
            } else if (file.mimetype.startsWith('image/')) {

                const img = subirImg(file.filename, data);

                if (!img) {
                    res.status(500).json({ message: 'Error al subir la imagen.' });
                } else {
                    res.status(201).json({ message: "Imagen subida con éxito." });
                }
            } else {
                res.status(500).json({ message: 'Error formato del archivo no es aceptado.', error: "Error" });
            }
        }
    } catch (error) {
        console.error('Error al subir el archivo:', error);
        res.status(500).json({ message: 'Error al subir el archivo.' });
    }
};

//BUSCAR ARCHIVOS
const ctrlFindAllFiles = async (req, res) => {
    try {

        const data = req.body

        const archivos = await findFiles(data)

        if (archivos) {
            return res.status(201).json(archivos);
        } else {
            res.status(500).json({ message: 'Error al encontrar los archivos.' });
        }
    } catch (error) {
        console.error('Error al subir el archivo:', error);
        res.status(500).json({ message: 'Error al subir el archivo.' });
    }
};

//ELIMINAR ARCHIVOS
const ctrlDeleteFile = async (req, res) => {
    try {
        const data = req.body

        const deletedFile = await deleteFile(data)

        if (deletedFile) {
            res.status(201).json({ message: "Archivo eliminado con exito." });
        } else {
            res.status(500).json({ message: 'Error al eliminar el archivo.', error: "Error" });
        }

    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar el archivo.' });
    }

}


module.exports = {
    ctrlUploadPfp, ctrlFindPfp, ctrlfindAllImgs, ctrlDeleteImg,
    ctrlCreateFile, ctrlFindAllFiles, ctrlDeleteFile
};
