const { DataTypes, sequelize } = require('../db');

const Rubro = require("./rubro.model")


//CREAR MODELO DE USERS
const Empleador = sequelize.define('empleador', {
    id_empleador: {
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
    num_telEmpresa: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    domicilioEmpresa: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    nombre_empresa: {
        type: DataTypes.STRING,
        allowNull: false
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
    tableName: "empleador"
});

Empleador.belongsTo(Rubro, { foreignKey: 'id_rubro' });
Rubro.hasOne(Empleador, { foreignKey: 'id_rubro' });

Empleador.sync({ force: false }).then(() => {
    console.log('Tabla de empleador creada')
})



module.exports = Empleador;