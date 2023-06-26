const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require('../db');


const UsersInfo = sequelize.define('Users_info',  {
    id_info:{
        type: DataTypes.UUID, 
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    nombre:{
        type: DataTypes.STRING,
        allowNull: false
    },
    apellido:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    dni:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
            args: true,
            messge: 'El dni ya esta registrado'
    }
    },
    cuil:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
            args: true,
            messge: 'El cuil ya esta registrado'
    }
    },
    fecha_nacimiento:{
        type: DataTypes.DATE,
        allowNull: false
    },
    barrio:{
        type: DataTypes.STRING,
        allowNull: false
    },
    },{ 
        timestamps: false,
        paranoid: false,
        tableName: "Users_info"
    });
    
    module.exports = UsersInfo;