const { DataTypes, sequelize } = require('../config/db');

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
    tableName: "Posts"
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

module.exports = { Post, createPost };
