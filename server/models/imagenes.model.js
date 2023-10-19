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
    description: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    is_pfp: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    id_user: {
        type: DataTypes.INTEGER,
        // references: {
        //     model: "User",
        //     key: "id_user"
        // },
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

async function subirArchivo(filename, description, id_user) {
    try {

        const existePfp = await findpfp(id_user)
        console.log("existePfp");

        console.log(existePfp);

        if(existePfp){
            return await existePfp.update({
                url: `/uploads/${filename}`,
                is_pfp: 1,
            }) ?? null
        }

        if (description !== "") {

            return await Image.create({
                url: `/uploads/${filename}`,
                description: description,
                id_user: id_user
            }) ?? null
        }else{
            return await Image.create({
                url: `/uploads/${filename}`,
                is_pfp: 1,
                id_user: id_user
            }) ?? null
        }  
    } catch (error) {
        console.log("ERROR AL SUBIR ARCHIVO", error)
    }
};

//BUSCAR FOTO DE PERFIL
async function findpfp(id_user) {
    const pfp = Image.findOne({
        where: {
            id_user: id_user,
            is_pfp: 1
        }
    })
    return pfp
}


module.exports = { Image, subirArchivo, findpfp };
