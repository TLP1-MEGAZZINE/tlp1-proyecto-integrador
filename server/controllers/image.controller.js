//IMPORTACIONES
const { subirPfp, findpfp } = require('../models/imagenes.model');
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

//SUBIR ARCHIVO
const ctrlCreateFile = async (req, res) => {
    try {
        if (req.file) {
            const data = req.body;

            const { filename } = req.file;

            const archivos = await createFile(data, filename)

            if (archivos) {
                return res.status(201).json({ message: "Archivo subido con exito." });
            } else {
                res.status(500).json({ message: 'Error al subir el archivo.' });
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
deleteFile

module.exports = {
    ctrlUploadPfp, ctrlFindPfp,
    ctrlCreateFile, ctrlFindAllFiles
};
