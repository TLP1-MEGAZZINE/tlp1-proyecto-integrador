const { DataTypes, sequelize } = require('../db');

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

Postulante.sync({ force: false }).then(() => {
    console.log('Tabla de postulantes creada')
})

Postulante.belongsTo(EstadoLaboral, { foreignKey: 'id_EstadoLaboral' });
EstadoLaboral.hasOne(Postulante, { foreignKey: 'id_EstadoLaboral' });

Postulante.belongsTo(NivelEducacion, { foreignKey: 'id_NivelEducacion' });
NivelEducacion.hasOne(Postulante, { foreignKey: 'id_NivelEducacion' });

Postulante.belongsTo(Rubro, { foreignKey: 'id_rubro' });
Rubro.hasOne(Postulante, { foreignKey: 'id_rubro' });


module.exports = Postulante;