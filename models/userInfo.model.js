// const { request } = require('express');
const { DataTypes, sequelize } = require('../db');

const UserRol = require("./userRol.model")
const Nacionalidad = require("./nacionalidades.model");
const UserGender = require('./genero.model');
const Provincia = require("./provincias.models")

const userInfoActions = {}

userInfoActions.UserInfo = sequelize.define('User_info', {
    id_info: {
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
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    apellido: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    dni: {
        type: DataTypes.INTEGER,
        allowNull: false,
        // unique: {
        //     args: true,
        //     messge: 'El dni ya esta registrado'
        // }
    },
    cuil: {
        type: DataTypes.INTEGER,
        allowNull: false,
        // unique: {
        //     args: true,
        //     messge: 'El cuil ya esta registrado'
        // }
    },
    fecha_nacimiento: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    id_genero: {
        type: DataTypes.INTEGER,
        references: {
            model: "genero",
            key: "id_genero"
        }
    },
    id_rol: {
        type: DataTypes.INTEGER,
        references: {
            model: "User_rol",
            key: "id_rol"
        },
    },
    id_pais: {
        type: DataTypes.INTEGER,
        references: {
            model: "nacionalidad",
            key: "id_pais"
        },
    },
    id_provincia: {
        type: DataTypes.INTEGER,
        references: {
            model: "Provincia",
            key: "id_provincia"
        },
    },
    otro_pais: {
        type: DataTypes.STRING,
        allowNull: true,
    },
}, {
    timestamps: false,
    paranoid: false,
    tableName: "Users_info"
});

//SI NO FUNCIONA CAMBIAR EL FALSE A TRUE
userInfoActions.UserInfo.sync({ force: false }).then(() => {
    console.log('Tabla de info usuario creada')

    userInfoActions.UserInfo.belongsTo(UserRol, { foreignKey: 'id_rol' });
    UserRol.hasOne(userInfoActions.UserInfo, { foreignKey: 'id_rol' });

    userInfoActions.UserInfo.belongsTo(Nacionalidad, { foreignKey: 'id_pais' });
    Nacionalidad.hasOne(userInfoActions.UserInfo, { foreignKey: 'id_pais' });

    userInfoActions.UserInfo.belongsTo(UserGender, { foreignKey: 'id_genero' });
    UserGender.hasOne(userInfoActions.UserInfo, { foreignKey: 'id_genero' });

    userInfoActions.UserInfo.belongsTo(Provincia, { foreignKey: 'id_provincia' });
    Provincia.hasOne(userInfoActions.UserInfo, { foreignKey: 'id_provincia' });

})

userInfoActions.createInfoUser = async (body) => {

    return sequelize.transaction(async (transaction) => {

        try {
            const {
                id_user,
                nombre,
                apellido,
                dni,
                cuil,
                fecha_nacimiento,
                id_genero,
                
                id_rol,
                id_pais,
                otro_pais,
                id_provincia
            } = body

            const info = await userInfoActions.UserInfo.create({
                id_user,
                nombre,
                apellido,
                dni,
                cuil,
                fecha_nacimiento,
                id_genero,
                id_rol,
                id_pais,
                otro_pais,
                id_provincia
            },
                { transaction }
            );

        } catch (error) {
            console.log("Error al crear registro de user_info", error);
            throw error
        }
    })
}

module.exports = userInfoActions;