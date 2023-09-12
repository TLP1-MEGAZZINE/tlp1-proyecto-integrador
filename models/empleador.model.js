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
            model: "User",
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


async function createEmpleador(id_user, userData) {

    try {
        return await Empleador.create(
            {
                id_user: id_user,
                num_telEmpresa: userData.num_telEmpresa,
                domicilioEmpresa: userData.domicilioEmpresa,
                nombre_empresa: userData.nombre_empresa,
                id_rubro: userData.id_rubro,
                otro_rubro: userData.otro_rubro
            },
        );


    } catch (error) {
        console.log("Error al crear registro de empleador", error)
        throw error
    }
};

module.exports = { Empleador, createEmpleador }