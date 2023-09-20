const { DataTypes, sequelize } = require('../config/db');

const Image = sequelize.define('image', {
    idImage: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    url: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    idUser: {
        type: DataTypes.INTEGER,
        references: {
            model: "User",
            key: "id_user"
        },
    },
}, {
    paranoid: false,
    underscored: true,
    tableName: "Images"
});

Image.sync({ force: false }).then(async () => {
    console.log('Tabla de imagenes creada');
});

//SERVICIO


module.exports = { Image,  };
