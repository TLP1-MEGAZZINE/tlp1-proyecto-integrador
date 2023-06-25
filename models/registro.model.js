const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("job-unite", "root", "", {
    host: "localhost",
    dialect: "mysql",
    port: "3306"
});


async function testConnection() {
try {
   await sequelize.authenticate()
   console.log("Conexion exitosa!")
} catch (err){
    console.log("Error al conectar a la base de datos", err)
}
};

testConnection();