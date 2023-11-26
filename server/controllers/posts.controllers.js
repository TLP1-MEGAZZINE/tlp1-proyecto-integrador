const { createPost, findAllPosts, findPostbyRubro, deletePost, findPostEmpresa, findPostPostulante } = require("../models/posteos.model")
const { findRubroByIdPostulante } = require("../models/postulantes.model")
const { findRubroByIdEmpleador } = require("../models/empleador.model")

//CREAR UN POSTEO EN LA DB
const ctrlCrearPosteos = async (req, res) => {
    try {

        const data = req.body
        const { filename } = req.file;
        console.log("DATA");
        console.log(data.id_user);

        if (data.id_rol == 1) {
            const usuario = await findRubroByIdPostulante(data.id_user)
            const id_rubro = usuario.id_rubro
            data.id_rubro = id_rubro
        } else {
            const usuario = await findRubroByIdEmpleador(data.id_user)
            const id_rubro = usuario.id_rubro
            data.id_rubro = id_rubro
        }

        const post = await createPost(data, filename);

        if (!post) {
            throw new Error("Error al crear el post")
        } else {
            return res.status(200).json({ message: "¡Post creado exitosamente!" })
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

const ctrlFindPostbyRubro = async (req, res) => {
    try {
        const id_rubro = req.body.id_rubro

        const posts = await findPostbyRubro(id_rubro);

        if (!posts) {
            throw new Error("Error al buscar los posts por rubro")
        }
        return res.status(200).json(posts)
    } catch (error) {
        console.log(error)
        res.status(500).json("Internal Server Error...")
    }
}

const ctrlDeletePost = async (req, res) => {
    try {
        const id_post = req.body.id_post

        const deletedPost = await deletePost(id_post);

        if (deletedPost) {
            return res.status(200).json({ message: "Post eliminado" })
        }

    } catch (error) {
        console.log(error)
        res.status(500).json("Internal Server Error...")
    }
}

const ctrlFindPostEmpresa = async (req, res) => {
    try {
        const postEmpresa = await findPostEmpresa()

        if (!postEmpresa) {
            throw new Error("Error al buscar los posts por rubro")
        }
        return res.status(200).json(postEmpresa)
    } catch (error) {
        console.log(error)
        res.status(500).json("Internal Server Error...")
    }
}

const ctrlFindPostPostulante = async (req, res) => {
    try {
        const postEmpresa = await findPostPostulante()

        if (!postEmpresa) {
            throw new Error("Error al buscar los posts por rubro")
        }
        return res.status(200).json(postEmpresa)
    } catch (error) {
        console.log(error)
        res.status(500).json("Internal Server Error...")
    }
}

module.exports = {
    ctrlCrearPosteos,
    ctrlFindAllPosts,
    ctrlFindPostbyRubro,
    ctrlDeletePost,
    ctrlFindPostEmpresa,
    ctrlFindPostPostulante
}