const { DataTypes, sequelize } = require('../config/db');

//ACOMODAR LA HORA, RESTANDOLE 3 HORAS
sequelize.options.timezone = '-03:00';

const { User } = require('./users.model');


const Post = sequelize.define('post', {
    id_post: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    post_title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    post_content: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    is_emprise_post: {
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
    },
}, {
    paranoid: false,
    tableName: "post",
    timestamps: true,
});

Post.sync({ force: false }).then(async () => {
    console.log('Tabla de posts creada');
});

//SERVICIO
async function createPost(postData) {
    try {

        let usuarioPost = await User.findOne({
            where: { id_user: postData.id_user },
        })

        if (usuarioPost.id_rol == 2) {
            return await Post.create({
                id_user: postData.id_user,
                post_title: postData.post_title,
                post_content: postData.post_content,
                is_emprise_post: true
            });
        }
        // Crea un post en la DB
        return await Post.create({
            id_user: postData.id_user,
            post_title: postData.post_title,
            post_content: postData.post_content,
            is_emprise_post: false
        });

    } catch (error) {
        console.log('Error al crear el post', error);
        throw error
    }
};

//ELIMINAR POST

//BUSCAR POSTS SEGUN ROL

//BUSCAR POSTS SEGUN RUBRO

//BUSCAR TODOS LOS POSTS
const findAllPosts = async () => {
    try {
        return await Post.findAll({
  include: {
      model: User,
      attributes: ['user_name', 'user_email']
  }
        });
    } catch (error) {
        console.log('Error al buscar todos los posts', error);
        throw error;
    }
};

module.exports = { Post, createPost, findAllPosts };
