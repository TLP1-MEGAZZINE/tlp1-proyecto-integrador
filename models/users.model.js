const { DataTypes } = require("sequelize");
const sequelize = require('../db');


//CREAR MODELO DE USERS
const Users = sequelize.define('Users',  {
    id_user:{
        type: DataTypes.INTEGER, 
        primaryKey: true,
        autoIncrement: true
    },
    user_name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    user_email:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
            args: true,
            messge: 'El email ya existe'
    }
    },
    user_password:{
        type: DataTypes.STRING,
        allowNull: false
    },
    },{ 
        timestamps: false,
        paranoid: false,
        tableName: "Users"
    });
    
    Users.sync();

    module.exports = Users;