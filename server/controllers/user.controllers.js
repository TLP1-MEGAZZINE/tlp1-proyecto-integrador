const jwt = require('jsonwebtoken')
const { findUserByName, findAllUser, deleteUser, actualizarUsuario, destroyUser, } = require("../models/users.model")
const { findUserInfo } = require('../models/userInfo.model')
const { updatePostulante, findPostulante } = require('../models/postulantes.model')
const { updateEmpleador, findEmpleador } = require('../models/empleador.model')


//BUSCAR TODOS LOS USUARIOS
const ctrlFindUsers = async (req, res) => {

    try {
        const users = await findAllUser()

        return res.status(200).json(users)

    } catch (error) {
        console.log(error)
        res.status(500).json("Internal Server Error...")
    }
};

//BUSCAR USUARIO POR NOMBRE
const ctrlFindUserByName = async (req, res) => {
    try {
        const userName = req.body.userName

        const users = await findUserByName(userName)

        if (users) {
            return users
        }
        return res.status(400).send("No se encontro el usuario")

    } catch (error) {
        console.log("Internal Server Error");
        return res.status(500).send("Internal Server Error")
    }
}

//ELIMINAR USUARIOS LOGICAMENTE
const ctrlDeleteUser = async (req, res) => {
    try {
        const id_user = req.body.id_user

        const deletedUser = deleteUser(id_user)

        if (deletedUser) {
            return res.status(200).send("Usuario Eliminado")
        }
    } catch (error) {
        console.log("Internal Server Error");
        return res.status(500).send("Internal Server Error")
    }
}

//BUSCAR INFO DE USUARIOS
const ctrlFindUserInfo = async (req, res) => {
    try {
        const data = req.body

        const userInfo = await findUserInfo(data)

        if (userInfo) {
            return res.status(200).json(userInfo)
        }
    } catch (error) {
        console.log("Error al buscar info de usuario");
        res.status(500).send("Internal Server Error")
    }
}

//BUSCAR EMPLEADOR	
const ctrlFindEmpleador = async (req, res) => {
    try {
        const data = req.body

        const empleador = await findEmpleador(data)

        if (empleador) {
            return res.status(200).json(empleador)
        }
    } catch (error) {
        console.log("Error al buscar empleador");
        res.status(500).send("Internal Server Error")
    }
}

//BUSCAR POSTULANTES	
const ctrlFindPostulante = async (req, res) => {
    try {
        const data = req.body

        const postulante = await findPostulante(data)

        if (postulante) {
            return res.status(200).json(postulante)
        }
    } catch (error) {
        console.log("Error al buscar postulante");
        res.status(500).send("Internal Server Error")
    }
}

//ACTUALIZAR USUARIOS
const ctrlUpdateUser = async (req, res) => {
    try {
        const data = req.body

        const updatedUser = await actualizarUsuario(data)

        if (updatedUser) {
            if (data.id_rol == 1) {

                const postulante = await updatePostulante(data)
                return res.status(200).send({ message: "Usuario Actualizado" })

            } else if (data.id_rol == 2) {
                const postulante = await updateEmpleador(data)

                return res.status(200).send({ message: "Usuario Actualizado" })
            } else {
                return res.status(200).send({ message: "Usuario Actualizado" })
            }
        }

    } catch (error) {
        console.log("Error al actualizar usuario");
        res.status(500).send("Internal Server Error")
    }
}

//DESTRUIR USUARIOS
const ctrlDestroyUser = async (req, res) => {
    try {
        const data = req.body

        const deletedUser = destroyUser(data)
            return res.status(204).json({ message: "Usuario Eliminado" })
    } catch (error) {
        console.log("Internal Server Error");
        return res.status(500).send("Internal Server Error")
    }
}

module.exports = {
    ctrlFindUserByName,
    ctrlFindUsers,
    ctrlUpdateUser,
    ctrlDeleteUser,
    ctrlFindUserInfo,
    ctrlFindPostulante,
    ctrlFindEmpleador,
    ctrlDestroyUser
}