const { DataTypes, sequelize } = require('../db');
const { userActions, Users } = require("./users.model")

const contactoActions = {}

// const ModelContact = sequelize.define()

// Definir el modelo para la tabla contacto
contactoActions.Contacto = sequelize.define('Contacto', {
    id_contacto: {
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
    num_tel: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    domicilio: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    timestamps: false,
    paranoid: false,
    tableName: "Contacto"
});


// Sincronizar los modelos con la base de datos (esto creará las tablas si no existen)
contactoActions.Contacto.sync({ force: false }).then(() => {
    console.log('Tabla de contactos creada')
})

contactoActions.Contacto.belongsTo(Users, { foreignKey: 'id_user', as: "Users" });


contactoActions.createContacto = async (body) => {

    return sequelize.transaction(async (transaction) => {

        try {

            const { num_tel, domicilio } = body;

            const contacto = await contactoActions.Contacto.create(
                {
                    id_user,
                    num_tel,
                    domicilio,
                },
                { transaction }
            );

        } catch (error) {
            console.log("Error al crear registro de contacto", error)
            throw error
        }
    })
}

module.exports = contactoActions;