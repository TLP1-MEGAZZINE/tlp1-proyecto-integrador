//IMPORTACIONES
const { subirPfp, findpfp } = require('../models/imagenes.model');

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
                res.status(201).json(`Imagen subida con éxito. Nombre del archivo: ${filename}`);
            }
        }
    } catch (error) {
        console.error('Error al subir la imagen:', error);
        res.status(500).json({ message: 'Error al subir la imagen.' });
    }
};

const ctrlFindPfp = async (req, res) => {
    try {
        const data = req.body

        const pfp = await findpfp(data);
        if (pfp) {
            return res.status(200).send(pfp.url)
        }
        return res.status(400).send("No se encontro la foto de perfil")

    } catch (error) {
        console.log("No se pudo encontrar la pfp", error);
        return res.status(500).send("Internal Server Error")
    }
}

module.exports = { ctrlUploadPfp, ctrlFindPfp };
