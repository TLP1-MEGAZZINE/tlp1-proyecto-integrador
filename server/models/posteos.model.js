const { DataTypes, sequelize } = require('../config/db');
const { Localidad } = require('./localidad.model');
const { Rubro } = require('./rubro.model');
const { UserInfo } = require('./userInfo.model');

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
        type: DataTypes.STRING(1000),
        allowNull: false,

    },
    url: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    is_emprise_post: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    id_user: {
        type: DataTypes.INTEGER,
    },
    id_rubro: {
        type: DataTypes.INTEGER
    },
    id_info: {
        type: DataTypes.INTEGER
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
async function createPost(data, filename) {
    try {
        console.log(data);

        let usuarioPost = await User.findOne({
            where: { id_user: data.id_user },
        })

        let infoId = await UserInfo.findOne({
            where: { id_user: data.id_user },
        })

        if (usuarioPost.id_rol == 2) {
            return await Post.create({
                id_user: data.id_user,
                post_title: data.post_title,
                post_content: data.post_content,
                is_emprise_post: true,
                id_rubro: data.id_rubro,
                id_info: infoId.id_info,
                url: `/uploads/${filename}`
            });
        }
        // Crea un post en la DB
        return await Post.create({
            id_user: data.id_user,
            post_title: data.post_title,
            post_content: data.post_content,
            is_emprise_post: false,
            id_rubro: data.id_rubro,
            id_info: infoId.id_info,
            url: `/uploads/${filename}`
        });

    } catch (error) {
        console.log('Error al crear el post', error);
        throw error
    }
};

//ELIMINAR POST
const deletePost = async (id_post) => {
    try {
        return await Post.destroy({
            where: { id_post: id_post }
        });
    } catch (error) {
        console.log('Error al eliminar el post', error);
        throw error;
    }
}

//BUSCAR TODOS LOS POSTS
const findAllPosts = async () => {
    try {
        const posts = await Post.findAll({
            include: [
                {
                    model: User,
                    attributes: ['id_user', 'user_name', 'user_email'],
                },
                {
                    model: Rubro,
                    attributes: ['desc_rubro'],
                },
                {
                    model: UserInfo,
                    attributes: ['fecha_nacimiento'], include: [
                        {
                            model: Localidad,
                            attributes: ['nombre_local'],
                        }
                    ]
                }
            ],
        });

        return posts;

    } catch (error) {
        console.log('Error al buscar todos los posts', error);
        throw error;
    }
};


//BUSCAR POSTS SEGUN RUBRO
const findPostbyRubro = async (id_rubro) => {
    try {
        return await Post.findAll({
            where: { id_rubro: id_rubro },
            include: [
                {
                    model: User,
                    attributes: ['user_name', 'user_email']
                },
                {
                    model: Rubro,
                    attributes: ['desc_rubro']
                }
            ]
        });
    } catch (error) {
        console.log('Error al buscar los posts por rubro', error);
        throw error;
    }
}

//BUSCAR POSTS DE EMPRESA
const findPostEmpresa = async () => {
    try {
        return await Post.findAll({
            where: {
                is_emprise_post: true
            },
            include: [
                {
                    model: User,
                    attributes: ['user_name', 'user_email']
                },
                {
                    model: Rubro,
                    attributes: ['desc_rubro']
                }
            ]
        })
    } catch (error) {
        console.log('Error al buscar los posts por rol', error);
        throw error
    }
}

//BUSCAR POSTS DE POSPULANTE 
const findPostPostulante = async () => {
    try {
        return await Post.findAll({
            where: {
                is_emprise_post: false
            },
            include: [
                {
                    model: User,
                    attributes: ['user_name', 'user_email']
                },
                {
                    model: Rubro,
                    attributes: ['desc_rubro']
                }
            ]
        })
    } catch (error) {
        console.log('Error al buscar los posts por rol', error);
        throw error
    }
}

module.exports = { Post, createPost, findAllPosts, findPostbyRubro, deletePost, findPostEmpresa, findPostPostulante };

