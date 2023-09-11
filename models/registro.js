//FUNCIONES PARA CREAR REGISTROS
const { createInfoUser } = require("./userInfo.model");

const { createContacto } = require("./contacto.model");

const { createParticular } = require("./particular.model");

const { createPostulante } = require("./postulantes.model");

const { createEmpleador } = require("./empleador.model");

//CREAR REGISTRO COMPLETO
async function crearRegistroCompleto(userData) {
    try {

        let user = await createUser(userData);

        const id_user = user.id_user
        let rol

        // CREAR INFO DE USUARIO EN LA DB

        let info = await createInfoUser({ id_user, userData });

        // CREAR REGISTRO DE CONTACTO EN LA DB

        let contacto = await createContacto({ id_user, userData });

        // GUARDAR INFO POSTULANTE EN LA DB

        rol = info.id_rol
        if (rol == 1) {

            //CREAR REGISTRO POSTULANTE

            let postulante = await createPostulante({ id_user, userData })

            return res.json({ userData, info, contacto, postulante });

        } else if (rol == 2) {
            //CREAR EMPLEADOR

            let empleador = await createEmpleador({ id_user, userData })

            return res.json({ userData, info, contacto, empleador });


        } else if (rol == 3) {

            //CREAR PARTICULAR

            const particular = await createParticular({ id_user, userData })

            return res.json({ userData, info, contacto, particular });
        }
    } catch (error) {
        console.log("Error al crear registros", error);
        throw error
    }
};

module.exports = crearRegistroCompleto;