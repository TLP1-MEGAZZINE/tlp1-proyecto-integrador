const { text } = require("express");
const { enviarEmail, support } = require("../helpers/nodemailer")
const { findUserById } = require("../models/users.model")

const ctrlSupportContact = async (req, res) => {
    try {

        const data = req.body

        const existeUser = await findUserById(data);

        if (existeUser && existeUser.user_email == data.user_email && existeUser.user_name == data.user_name) {

            const response = await support(existeUser.user_email, data.text, existeUser.user_name);

            if (response) {
                res.status(200).json({ message: 'El mensaje fue enviado, nos pondremos en contacto con usted lo antes posible. Por favor espere la respuesta...' });
            }

        } else {
            res.status(404).json({ message: 'Hubo un error al enviar el correo.', error: "error" });
        }

    } catch (error) {
        console.log(error);

        res.status(500).json({ message: 'Hubo un error al enviar el correo', error: error });
    }
}

module.exports = {
    ctrlSupportContact
}