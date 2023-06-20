//SE IMPORTAN LAS CLASES DE LA LIBRERIA
const { Sequelize, Model, DataTypes } = require('sequelize');

// const sequelize = new Sequelize('job-unite', 'agustin', 'YES', {
//     host: 'localhost',
//     dialect: 'mysql',
// });

// Se crea una instancia de la conexión a la base de datos
const sequelize = new Sequelize(
    DB_NAME="job-unite",
    DB_USER="root",
    DB_PASSWORD="24879156",
    {
        host: "localhost", //localhost
        dialect: "mysql" // 'mysql' | 'mariadb' | 'postgres' | 'mssql'
    });

    // Se exportan la conexión a MySQL, Model y DataTypes para poder usarlas en los modelos
module.exports = {
    sequelize,
    DataTypes,
    Model
}
