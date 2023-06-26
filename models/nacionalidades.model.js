const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require('../db');


//CREAR MODELO DE USERS
const Nacionalidades = sequelize.define('Nacionalidad',  {
    id_nacionalidad:{
        type: DataTypes.UUID, 
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    nombre_pais:{
        type: DataTypes.STRING,
    }
    },{ 
        timestamps: false,
        paranoid: false,
        tableName: "Nacionalidad"
    });
    
    module.exports = Nacionalidades;