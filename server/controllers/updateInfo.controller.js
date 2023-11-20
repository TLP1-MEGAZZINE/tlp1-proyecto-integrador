const { updateInfoUser } = require("../models/userInfo.model");
const { updateUserContact } = require("../models/contacto.model");

const ctrlUpdateUserInfo = async (req, res) => {
    try {
        const data = req.body

        const updatedUser = await updateInfoUser(data)

        if (updatedUser) {
            return res.status(200).json({ message: "Usuario Actualizado Correctamente" })
        }

    } catch (error) {
        console.log("Error al actualizar usuario");
        res.status(500).send("Internal Server Error")
    }
}

const ctrlUpdateUserContact = async (req, res) => {
    try {
        const data = req.body

        const updatedUser = await updateUserContact(data)

        if (updatedUser) {
            return res.status(200).json({ message: "Contacto Actualizado Correctamente" })
        }

    } catch (error) {
        console.log("Error al actualizar contacto");
        res.status(500).send("Internal Server Error")
    }
}

module.exports = {
    ctrlUpdateUserInfo, ctrlUpdateUserContact
}