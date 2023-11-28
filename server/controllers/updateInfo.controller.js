const { updateInfoUser } = require("../models/userInfo.model");
const { updateUserContact } = require("../models/contacto.model");
const { enviarEmail } = require("../helpers/nodemailer")
const { findUserByEmail } = require("../models/users.model")
const { restorePassword } = require("../models/users.model")

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

const ctrlForgotPassword = async (req, res) => {
    try {
        const { email } = req.body

        const existeEmail = await findUserByEmail(email);

        if (existeEmail) {

            const newPass = `RestoredPassword${Date.now()}`;

            const restoredPassword = await restorePassword(existeEmail.id_user, newPass)

            if (restoredPassword) {
                const response = await enviarEmail(email, newPass);

                if (response) {

                    res.status(200).json({ message: 'El codigo fue enviado, puede demorar un momento. Por favor espere...' });
                }
            }

        } else {
            res.status(404).json({ message: 'Usted no esta registrado.' });
        }

    } catch (error) {
        console.log(error);

        res.status(500).json({ message: 'Error al recibir datos, verifique su correo' });
    }
}

module.exports = {
    ctrlUpdateUserInfo, ctrlUpdateUserContact, ctrlForgotPassword
}