const { createPost, findAllPosts } = require("../models/posteos.model")
//CREAR UN POSTEO EN LA DB
const ctrlCrearPosteos = async (req, res) => {
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

const ctrlFindAllPosts = async (req, res) => {
    try {
        const posts = await findAllPosts();
        if (!posts) {
            throw new Error("Error al buscar todos los posts")
        } else {
            return res.status(200).json(posts)
        }
    } catch (error) {
        console.log(error)
        res.status(500).json("Internal Server Error...")
    }
}

module.exports = {
    ctrlCrearPosteos,
    ctrlFindAllPosts
}