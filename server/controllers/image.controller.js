//IMPORTACIONES

const { subirArchivo, findpfp } = require('../models/imagenes.model');


//CARGAR IMAGENES
const ctrlUploadImage = async (req, res) => {
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

const ctrlFindPfp = async (req, res) =>{
    try {
        const id_user = req.session.user.id_user
        console.log(id_user);
        const pfp = await findpfp(id_user);
        if(pfp){
            return pfp
        }
        return res.status(400).send("No se encontro la foto de perfil")
    } catch (error) {
        console.log("No se pudo encontrar la pfp", error);
        return res.status(500).send("Internal Server Error")
    }
}

module.exports = {ctrlUploadImage, ctrlFindPfp };
