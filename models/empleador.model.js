const { DataTypes, sequelize } = require('../db');

const Rubro = require("./rubro.model")

const ctrlEmpleador = {}


//CREAR MODELO DE USERS
ctrlEmpleador.Empleador = sequelize.define('empleador', {
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

ctrlEmpleador.Empleador.belongsTo(Rubro, { foreignKey: 'id_rubro' });
Rubro.hasOne(ctrlEmpleador.Empleador, { foreignKey: 'id_rubro' });

ctrlEmpleador.Empleador.sync({ force: false }).then(() => {
    console.log('Tabla de empleador creada')
})


ctrlEmpleador.createEmpleador = async (body) => {

    return sequelize.transaction(async (transaction) => {

        try {

            const { num_telEmpresa,
                domicilioEmpresa,
                nombre_empresa,
                id_rubro,
                otro_rubro
            } = body;

            const empleador = await ctrlEmpleador.Empleador.create(
                {
                    id_user,
                    num_telEmpresa,
                    domicilioEmpresa,
                    nombre_empresa,
                    id_rubro,
                    otro_rubro
                },
                { transaction }
            );

        } catch (error) {
            console.log("Error al crear registro de empleador", error.json())
            throw error
        }
    })
}

module.exports = ctrlEmpleador;