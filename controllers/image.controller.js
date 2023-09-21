const { subirArchivo } = require('../models/imagenes.model');

// Función para manejar la carga de imágenes
const uploadImage = async (req, res) => {
    try {
        if (req.file) {
            const {filename} = req.file;
            const {description} = req.body;

            // Guardar la información de la imagen en la base de datos
            const newImage = subirArchivo(filename, description);

            if(!newImage){
                res.status(400).json("Bad request")
            }else{
                res.send(`Imagen subida con éxito. Nombre del archivo: ${filename}`);
            }
        } else {
            res.send('No se pudo cargar la imagen.');
        }
    } catch (error) {
        console.error('Error al subir la imagen:', error);
        res.status(500).send('Error al subir la imagen.');
    }
};

module.exports = {
    uploadImage
};
