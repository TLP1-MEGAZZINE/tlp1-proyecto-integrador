const { DataTypes, sequelize } = require('../config/db');

const EstadoLaboral = require("./estado_laboral.model")
const NivelEducacion = require("./nivelEduacion.model")
const Rubro = require("./rubro.model")

//CREAR MODELO DE USERS
const Postulante = sequelize.define('postulante', {
    id_postulante: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_user: {
        type: DataTypes.INTEGER,
        references: {
            model: "User",
            key: "id_user"
        },
    },
    id_estado_laboral: {
        type: DataTypes.INTEGER,
        references: {
            model: "estado_laboral",
            key: "id_estado_laboral"
        }
    },
    id_nivel_educacion: {
        type: DataTypes.INTEGER,
        references: {
            model: "nivel_educacion",
            key: "id_nivel_educacion"
        }
    },
    id_rubro: {
        type: DataTypes.INTEGER,
        references: {
            model: "rubro",
            key: "id_rubro"
        }
    },
    otro_rubro: {
        type: DataTypes.STRING,
        allowNull: true
    },
}, {
    timestamps: false,
    paranoid: false,
    tableName: "postulante"
});

Postulante.sync({ force: false }).then(() => {
    console.log('Tabla de postulantes creada')
})

async function createPostulante(id_user, userData) {

    try {

        return await Postulante.create(
            {
                id_user: id_user,
                id_estado_laboral: userData.id_estado_laboral,
                id_nivel_educacion: userData.id_nivel_educacion,
                id_rubro: userData.id_rubro,
                otro_rubro: userData.otro_rubro
            },
        );

    } catch (error) {
        console.log = ("Error al crear el registro de postulantes ", error)
        throw error
    }
}

module.exports = { Postulante, createPostulante }