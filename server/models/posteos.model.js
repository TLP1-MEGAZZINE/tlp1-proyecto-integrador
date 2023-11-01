const { DataTypes, sequelize } = require('../config/db');
const Localidad = require('./localidad.model');
const Rubro = require('./rubro.model');
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
    id_rubro: {
        type: DataTypes.INTEGER
    }
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
                is_emprise_post: true,
                id_rubro: postData.id_rubro
            });
        }
        // Crea un post en la DB
        return await Post.create({
            id_user: postData.id_user,
            post_title: postData.post_title,
            post_content: postData.post_content,
            is_emprise_post: false,
            id_rubro: postData.id_rubro
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
                    attributes: ['user_name', 'user_email'],
                },
                {
                    model: Rubro,
                },
            ],
        });
        
        // Obtener los IDs de usuario de los posts
        const userIds = posts.map(post => post.id_user);
        
        // Consulta los registros de user_info para los usuarios
        const userInfos = await UserInfo.findAll({
            where: {
                id_user: userIds,
            },
            include:[
                {
                    model:Localidad,
                    attributes:["nombre_local"]
                }
            ]            
        });
        
        const postsWithUserInfo = posts.map(post => {
            const userInfo = userInfos.find(info => info.id_user === post.id_user);

            if (userInfo) {
                return {
                    ...post.get(),
                    id_local: userInfo.localidad.nombre_local, // Reemplaza "field1" con el nombre real del campo
                    id_depar: userInfo.id_depar, // Reemplaza "field2" con el nombre real del campo
                    // Agrega más campos según sea necesario
                };
            } else {
                return post;
            }
        });
        
        // Ahora postsWithUserInfo contiene la información de usuario agregada a los objetos de posts
        return postsWithUserInfo;
        
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
