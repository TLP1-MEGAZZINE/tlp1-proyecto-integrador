const Rol = require("./roles.model");
const Rubro = require("./rubro.model");
const Provincia = require("./provincias.models");
const Paises = require("./paises.model");
const Genero = require("./genero.model");
const EstadoLaboral = require("./estado_laboral.model");
const NivelEducacion = require("./nivelEduacion.model");
const Departamento = require("./departamento.model");
const Localidad = require("./localidad.model");
const { User } = require("./users.model")
const { UserInfo } = require("./userInfo.model");
const { Contacto } = require("./contacto.model");
const { Empleador } = require("./empleador.model");
const { Particular } = require("./particular.model");
const { Postulante } = require("./postulantes.model");
const { Post } = require("./posteos.model")
const { Image } = require("./imagenes.model")


// //UNO A UNO

// User.belongsTo(UserInfo, { foreignKey: 'id_user' });
// UserInfo.hasOne(User, { foreignKey: 'id_user' });

// Particular.belongsTo(User, { foreignKey: 'id_user' });
// User.hasOne(Particular, { foreignKey: 'id_user' })

// Contacto.belongsTo(User, { foreignKey: 'id_user' });
// User.hasOne(Contacto, { foreignKey: 'id_user' })

// Empleador.belongsTo(User, { foreignKey: 'id_user' });
// User.hasOne(Empleador, { foreignKey: 'id_user' })

// Postulante.belongsTo(User, { foreignKey: 'id_user' });
// User.hasOne(Postulante, { foreignKey: 'id_user' })

// //UNO A MUCHOS
// User.belongsTo(Rol, { foreignKey: 'id_rol' });
// Rol.hasMany(User, { foreignKey: 'id_rol' });

// UserInfo.belongsTo(Paises, { foreignKey: 'id_pais' });
// Paises.hasMany(UserInfo, { foreignKey: 'id_pais' });

// UserInfo.belongsTo(Provincia, { foreignKey: 'id_provincia' });
// Provincia.hasMany(UserInfo, { foreignKey: 'id_provincia' });

// UserInfo.belongsTo(Genero, { foreignKey: 'id_genero' });
// Genero.hasMany(UserInfo, { foreignKey: 'id_genero' });

// Localidad.belongsTo(Departamento, { foreignKey: 'id_depar' });
// Departamento.hasMany(Localidad, { foreignKey: 'id_depar' });


// Postulante.belongsTo(Rubro, { foreignKey: 'id_rubro' });
// Rubro.hasMany(Postulante, { foreignKey: 'id_rubro' });

// Postulante.belongsTo(EstadoLaboral, { foreignKey: 'id_EstadoLaboral' });
// EstadoLaboral.hasMany(Postulante, { foreignKey: 'id_EstadoLaboral' });

// Postulante.belongsTo(NivelEducacion, { foreignKey: 'id_NivelEducacion' });
// NivelEducacion.hasMany(Postulante, { foreignKey: 'id_NivelEducacion' });

// Empleador.belongsTo(Rubro, { foreignKey: 'id_rubro' });
// Rubro.hasMany(Empleador, { foreignKey: 'id_rubro' });


// //CONTENIDO
// Post.belongsTo(User, { foreignKey: "idUser" });
// User.hasMany(Post, { foreignKey: "idUser" });

// Image.belongsTo(User, { foreignKey: "id_user" });
// User.hasMany(Image, { foreignKey: "id_user" });
