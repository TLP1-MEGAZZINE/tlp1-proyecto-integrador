//FUNCIONES PARA CREAR REGISTROS
const { createUser } = require("../models/users.model")

const { createInfoUser } = require("../models/userInfo.model");

const { createContacto } = require("../models/contacto.model");

const { createParticular } = require("../models/particular.model");

const { createPostulante } = require("../models/postulantes.model");

const { createEmpleador } = require("../models/empleador.model");

//CREAR REGISTRO COMPLETO
async function crearRegistroCompleto(userData) {
    try {

        const user = await createUser(userData);

        if (!user) {
            throw new Error("No se pudo crear el registro de usuario")
        } else {
            const id_user = user.id_user
            const rol = user.id_rol

            // CREAR INFO DE USUARIO EN LA DB

            const info = await createInfoUser(id_user, userData);

            // CREAR REGISTRO DE CONTACTO EN LA DB

            const contacto = await createContacto(id_user, userData);

            // GUARDAR INFO POSTULANTE EN LA DB

            if (rol == 1) {

                //CREAR REGISTRO POSTULANTE

                const postulante = await createPostulante(id_user, userData)

                return { userData, info, contacto, postulante };

            } else if (rol == 2) {
                //CREAR EMPLEADOR

                const empleador = await createEmpleador(id_user, userData)

                return { userData, info, contacto, empleador };


            } else if (rol == 3) {

                //CREAR PARTICULAR

                const particular = await createParticular(id_user)

                return { userData, info, contacto, particular };
            }
        }
    } catch (error) {
        console.log("Error al crear registros", error);
        throw error
    }
};

module.exports = crearRegistroCompleto;