const { DataTypes, sequelize } = require('../config/db');

//ACOMODAR LA HORA, RESTANDOLE 3 HORAS
sequelize.options.timezone = '-03:00';

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
        allowNull: true,
    },
    idUser: {
        type: DataTypes.INTEGER,
        references: {
            model: "User",
            key: "id_user"
        },
        allowNull: true,
    },
}, {
    paranoid: false,
    underscored: true,
    tableName: "Images",
    timestamps: true,
});

Image.sync({ force: false }).then(async () => {
    console.log('Tabla de imagenes creada');
});

//SERVICIO

async function subirArchivo(filename, description) {
    try {
        return await Image.create({
            url: `/uploads/${filename}`,
            description: description,
            idUser: 1
        }) ?? null
    } catch (error) {
        console.log("ERROR AL SUBIR ARCHIVO", error)
    }
};


module.exports = { Image, subirArchivo };
