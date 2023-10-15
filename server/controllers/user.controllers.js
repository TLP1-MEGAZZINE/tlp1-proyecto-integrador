const { findUserByName, findAllUser, deleteUser, actualizarUsuario } = require("../models/users.model")

//BUSQUEDAS
const ctrlFindUsers = async (req, res) => {

    try {
        const users = await findAllUser()

        return res.status(200).json(users)

    } catch (error) {
        console.log(error)
        res.status(500).json("Internal Server Error...")
    }
};

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

//ELIMINAR USUARIOS
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

//ACTUALIZAR USUARIOS
const ctrlUpdateUser = async (req, res) => {
    try {
        const newData = req.body

        const updatedUser = await actualizarUsuario( newData)

        if (updatedUser) {
            return res.status(200).send("Usuario Actualizado")
        }

    } catch (error) {
        console.log("Error al actualizar usuario");
        res.status(500).send("Internal Server Error")
    }
}

module.exports = {
    ctrlFindUserByName,
    ctrlFindUsers,
    ctrlUpdateUser,
    ctrlDeleteUser
}