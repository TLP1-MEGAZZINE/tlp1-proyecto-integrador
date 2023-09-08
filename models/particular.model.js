const { DataTypes, sequelize } = require('../db');
const { Users } = require("./users.model")

const ctrlParticular = {}

// Definir el modelo para la tabla Particular
ctrlParticular.Particular = sequelize.define('Particular', {
    id_Particular: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    id_user: {
        type: DataTypes.INTEGER,
        references: {
            model: "Users",
            key: "id_user"
        },
    },
}, {
    timestamps: false,
    paranoid: false,
    tableName: "Particular"
});


// Sincronizar los modelos con la base de datos (esto creará las tablas si no existen)
ctrlParticular.Particular.sync({ force: false }).then(() => {
    console.log('Tabla de particulares creada')
})

ctrlParticular.Particular.belongsTo(Users, { foreignKey: 'id_user', as: "Users" });



ctrlParticular.createParticular = async (body) => {

    return sequelize.transaction(async (transaction) => {

        try {
            const particular = await ctrlParticular.Particular.create(
                {
                    id_user
                },
                { transaction }
            );
        } catch (error) {
            console.log = ("Error al crear el registro de particulares ", error.json())
            throw error
        }
    })
}

module.exports = ctrlParticular;