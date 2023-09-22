const { DataTypes, sequelize } = require('../config/db');

//ACOMODAR LA HORA, RESTANDOLE 3 HORAS
sequelize.options.timezone = '-03:00';


const Post = sequelize.define('post', {
    idPost: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    postTittle: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    postContent: {
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
    tableName: "Posts",
    timestamps: true,
});

Post.sync({ force: true }).then(async () => {
    console.log('Tabla de posts creada');
});

//SERVICIO
async function createPost(postData) {
    try {
        // Crea un post en la DB
        return await Post.create({
            idUser: postData.idUser,
            postTittle: postData.postTittle,
            postContent: postData.postContent,
        });

    } catch (error) {
        console.log('Error al crear el post', error);
        throw error
    }
};

//ELIMINAR POST

//BUSCAR POSTS SEGUN ROL

//BUSCAR POSTS SEGUN RUBRO

module.exports = { Post, createPost };
