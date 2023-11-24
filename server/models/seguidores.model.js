const { DataTypes, sequelize } = require('../config/db');

const Seguidor = sequelize.define('Seguidor', {
    id_seguidor: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    id_follower: {
        type: DataTypes.INTEGER,
    },
    id_folled: {
        type: DataTypes.INTEGER,
    }
}, {
    timestamps: false,
    paranoid: false,
    tableName: "Seguidor",
    modelName: "Seguidor",
});


// Sincronizar los modelos con la base de datos (esto creará las tablas si no existen)
Seguidor.sync({ force: false }).then(() => {
    console.log('Tabla de seguidores creada')
})


module.exports = { Seguidor }
