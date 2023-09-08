const { DataTypes, sequelize } = require('../db');

const EstadoLaboral = require("./estado_laboral.model")
const NivelEducacion = require("./nivelEduacion.model")
const Rubro = require("./rubro.model")

const postulanteActions = {}


//CREAR MODELO DE USERS
postulanteActions.Postulante = sequelize.define('postulante', {
    id_postulante: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_user: {
        type: DataTypes.INTEGER,
        references: {
            model: "Users",
            key: "id_user"
        },
    },
    id_EstadoLaboral: {
        type: DataTypes.INTEGER,
        references: {
            model: "estado_laboral",
            key: "id_EstadoLaboral"
        }
    },
    id_NivelEducacion: {
        type: DataTypes.INTEGER,
        references: {
            model: "nivel_educacion",
            key: "id_NivelEducacion"
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

postulanteActions.Postulante.sync({ force: false }).then(() => {
    console.log('Tabla de postulantes creada')
})

postulanteActions.Postulante.belongsTo(EstadoLaboral, { foreignKey: 'id_EstadoLaboral' });
EstadoLaboral.hasOne(postulanteActions.Postulante, { foreignKey: 'id_EstadoLaboral' });

postulanteActions.Postulante.belongsTo(NivelEducacion, { foreignKey: 'id_NivelEducacion' });
NivelEducacion.hasOne(postulanteActions.Postulante, { foreignKey: 'id_NivelEducacion' });

postulanteActions.Postulante.belongsTo(Rubro, { foreignKey: 'id_rubro' });
Rubro.hasOne(postulanteActions.Postulante, { foreignKey: 'id_rubro' });

postulanteActions.createPostulante = async (body) => {

    return sequelize.transaction(async (transaction) => {

        try {

            const { id_EstadoLaboral,
                id_NivelEducacion,
                id_rubro,
                otro_rubro } = body;

            const postulante = await postulanteActions.Postulante.create(
                {
                    id_user,
                    id_EstadoLaboral,
                    id_NivelEducacion,
                    id_rubro,
                    otro_rubro
                },
                { transaction }
            );

        } catch (error) {
            console.log = ("Error al crear el registro de postulantes ", error.json())
            throw error
        }
    })
}

module.exports = postulanteActions;