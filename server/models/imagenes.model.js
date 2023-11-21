const { DataTypes, sequelize } = require('../config/db');

//ACOMODAR LA HORA, RESTANDOLE 3 HORAS
sequelize.options.timezone = '-03:00';

const Image = sequelize.define('image', {
    id_image: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    url: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    is_pfp: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    id_user: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
}, {
    paranoid: false,
    tableName: "Images",
    timestamps: true,
});

Image.sync({ force: false }).then(async () => {
    console.log('Tabla de imagenes creada');
});

//SERVICIO
async function subirPfp(filename, data) {
    try {

        const existePfp = await findpfp(data)

        if (existePfp) {
            return await existePfp.update({
                url: `/uploads/${filename}`,
            })
        } else {
            return await Image.create({
                url: `/uploads/${filename}`,
                is_pfp: 1,
                id_user: data.id_user
            })
        }
    } catch (error) {
        console.log("ERROR AL SUBIR ARCHIVO", error)
    }
};


//BUSCAR FOTO DE PERFIL
async function findpfp(data) {
    const pfp = await Image.findOne({
        where: {
            id_user: data.id_user, is_pfp: 1
        }
    })

    console.log("IMAGEN", pfp);
    return pfp

}


module.exports = { Image, subirPfp, findpfp };
