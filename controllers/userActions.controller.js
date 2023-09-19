//IMPORTACIONES
const { createPost } = require("../models/posteos.model")

const ctrlUserActions = {}

ctrlUserActions.crearPosteos = async (req, res) => {
    try {
        const postData = req.body

        const post = await createPost(postData);

        if (!post) {
            throw new Error("Error al crear el post")
        } else {
            return res.status(200).json({ message: "Post creado-controller" })
        }
    } catch (error) {
        console.log(error)
        res.status(500).json("Internal Server Error...")
    }
};


module.exports = ctrlUserActions;
