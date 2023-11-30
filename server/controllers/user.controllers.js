const { findUserByName, findAllUser, deleteUser, actualizarUsuario, destroyUser, findUserById } = require("../models/users.model")
const { findUserInfo } = require('../models/userInfo.model')
const { updatePostulante, findPostulante } = require('../models/postulantes.model')
const { updateEmpleador, findEmpleador } = require('../models/empleador.model')
const { findContact } = require('../models/contacto.model.js')
const { createDesc, updateDesc, findDesc } = require('../models/descripcion.model.js')

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

const ctrlFindUserById = async (req, res) => {
    try {
        const data = req.body

        const user = await findUserById(data)
        if (user) {
            return res.status(200).json(user)
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json("Internal Server Error")
    }
}

//BUSCAR USUARIO POR NOMBRE
const ctrlFindUserByName = async (req, res) => {
    try {
        const data = req.body

        console.log(data);

        const user = await findUserByName(data)

        if (user) {
            return res.status(200).json(user.id_user)
        } else {

            return res.status(400).json({ message: "No se encontro el usuario" })
        }
    } catch (error) {
        console.log("Internal Server Error");
        return res.status(500).send("Internal Server Error")
    }
}

//BUSCAR CONTACTO DE USUARIO
const ctrlFindContact = async (req, res) => {
    try {


        const data = req.body

        const contact = await findContact(data)

        if (contact) {
            return res.status(200).json(contact)
        }
    } catch (error) {
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

//BUSCAR UN POSTULANTE
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

        console.log("DATA");
        console.log(data);

        const updatedUser = await actualizarUsuario(data)

        if (updatedUser) {
            if (data.id_rol == 1) {
                const postulante = await updatePostulante(data)
                return res.status(200).json({ message: "Usuario Actualizado" })

            } else if (data.id_rol == 2) {
                const postulante = await updateEmpleador(data)
                return res.status(200).json({ message: "Usuario Actualizado" })
            }
        } else {
            return res.status(400).json({ message: "Las credenciales antiguas son incorrectas", error: true })
        }

    } catch (error) {
        console.log("Error al actualizar usuario");
        res.status(500).send("Internal Server Error")
    }
}

//DESTRUIR USUARIOS
const ctrlDestroyUser = async (req, res) => {
    try {
        const data = req.body;
        // Espera a que se complete la operación asíncrona
        await destroyUser(data);

        return res.status(204).json({ message: "Usuario Eliminado" });
    } catch (error) {
        console.log("Internal Server Error", error);
        return res.status(500).send("Internal Server Error");
    }
};

//CREAR DESCRIPCION
const ctrlCreateDesc = async (req, res) => {
    try {
        const data = req.body;
        console.log("DATA");
        console.log(data);

        const desc = await createDesc(data);
        if (desc) {
            return res.status(200).json({ message: "Descripcion creada correctamente" });
        }
    } catch (error) {
        return res.status(500).send("Internal Server Error");
    }
};

//CREAR DESCRIPCION
const ctrlUpdateDesc = async (req, res) => {
    try {
        let filename = null
        const data = req.body;
        console.log("DATA");
        console.log(data);

        // Espera a que se complete la operación asíncrona
        const desc = await updateDesc(data);
        if (desc) {
            return res.status(200).json({ message: "Descripcion actualizada correctamente" });
        }
    } catch (error) {
        return res.status(500).send("Internal Server Error");
    }
};

//BUSCAR DESCRIPCION
const ctrlFindDesc = async (req, res) => {
    try {
        const data = req.body;

        const desc = await findDesc(data);

        console.log("DESC");
        console.log(desc);
        if (desc) {
            return res.status(200).json(desc);
        } else {
            return res.status(404).json({ message: "No existe descripcion de usuario" });
        }
    } catch (error) {
        return res.status(500).json("Internal Server Error");
    }
};

module.exports = {
    ctrlFindUserByName,
    ctrlFindUsers,
    ctrlUpdateUser,
    ctrlDeleteUser,
    ctrlFindUserInfo,
    ctrlFindPostulante,
    ctrlFindEmpleador,
    ctrlDestroyUser,
    ctrlFindContact,
    ctrlFindUserById,
    ctrlCreateDesc,
    ctrlUpdateDesc,
    ctrlFindDesc
}