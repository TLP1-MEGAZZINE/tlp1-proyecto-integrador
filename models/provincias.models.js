const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require('../db');

const Provincia = sequelize.define('Provincia',  {
    id_provincia:{
        type: DataTypes.UUID, 
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    nombre_provincia:{
        type: DataTypes.STRING,
    }
    },{ 
        timestamps: false,
        paranoid: false,
        tableName: "Provincia"
    });
    
    module.exports = Provincia;