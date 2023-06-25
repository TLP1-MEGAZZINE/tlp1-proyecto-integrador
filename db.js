// SE TRAE LA LIBRERIA SEQUELIZE OPCION 2 FACIL
const { Sequelize } = require("sequelize");

// Se crea una instancia de la conexión a la base de datos
const sequelize = new Sequelize("job-unite", "root", "", {
    host: "localhost",
    dialect: "mysql",
    port: "3306"
});

// SE PRUEBA LA CONEXION A LA DB
async function testConnection() {
try {
   await sequelize.authenticate()
   console.log("Conexion exitosa!")
} catch (err){
    console.log("Error al conectar a la base de datos", err)
}
};

testConnection();

module.exports = sequelize;


// //SE IMPORTAN LAS CLASES DE LA LIBRERIA OPCION 1
// const { Sequelize, Model, DataTypes } = require('sequelize');

// // const sequelize = new Sequelize('job-unite', 'agustin', 'YES', {
// //     host: 'localhost',
// //     dialect: 'mysql',
// // });

// // Se crea una instancia de la conexión a la base de datos
// const sequelize = new Sequelize(
//     DB_NAME="job-unite",
//     DB_USER="root",
//     DB_PASSWORD='',
//     {
//         host: "localhost", //localhost
//         dialect: "mysql" // 'mysql' | 'mariadb' | 'postgres' | 'mssql'
//     });

//     // Se exportan la conexión a MySQL, Model y DataTypes para poder usarlas en los modelos
// module.exports = {
//     sequelize,
//     DataTypes,
//     Model
// }
