const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require('../db');

const nro_cel = sequelize.define('nro_cel',  {
    id_cel:{
        type: DataTypes.UUID, 
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    num_cel:{
        type: DataTypes.STRING,
        allowNull: false
    }
    },{ 
        timestamps: false,
        paranoid: false,
        tableName: "nro_cel"
    });
    
    module.exports = nro_cel;