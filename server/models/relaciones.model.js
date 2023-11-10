const Rol = require("./roles.model");
const { Rubro } = require("./rubro.model");
const {Provincia} = require("./provincias.models");
const { Paises } = require("./paises.model");
const Genero = require("./genero.model");
const EstadoLaboral = require("./estado_laboral.model");
const NivelEducacion = require("./nivelEduacion.model");
const { Departamento } = require("./departamento.model");
const { Localidad } = require("./localidad.model");
const { User } = require("./users.model")
const { UserInfo } = require("./userInfo.model");
const { Contacto } = require("./contacto.model");
const { Empleador } = require("./empleador.model");
const { Particular } = require("./particular.model");
const { Postulante } = require("./postulantes.model");
const { Post } = require("./posteos.model")
const { Image } = require("./imagenes.model")


// //UNO A UNO

// UserInfo.hasOne(User);
UserInfo.belongsTo(User, { foreignKey: 'id_user' });

User.hasOne(Particular)
Particular.belongsTo(User, { foreignKey: 'id_user' });

User.hasOne(Contacto)
Contacto.belongsTo(User, { foreignKey: 'id_user' });

User.hasOne(Empleador, { foreignKey: 'id_user' });
Empleador.belongsTo(User, { foreignKey: 'id_user' });

User.hasOne(Postulante, { foreignKey: 'id_user' });
Postulante.belongsTo(User, { foreignKey: 'id_user' });

// //UNO A MUCHOS
Rol.hasMany(User, { foreignKey: 'id_rol' });
User.belongsTo(Rol, { foreignKey: 'id_rol' });

Paises.hasMany(UserInfo, { foreignKey: 'id_pais' });
UserInfo.belongsTo(Paises, { foreignKey: 'id_pais' });

Provincia.hasMany(UserInfo, { foreignKey: 'id_provincia' });
UserInfo.belongsTo(Provincia, { foreignKey: 'id_provincia' });

Departamento.hasMany(UserInfo, { foreignKey: 'id_depar' });
UserInfo.belongsTo(Departamento, { foreignKey: 'id_depar' });

Localidad.hasMany(UserInfo, { foreignKey: 'id_local' });
UserInfo.belongsTo(Localidad, { foreignKey: 'id_local' });

Genero.hasMany(UserInfo, { foreignKey: 'id_genero' });
UserInfo.belongsTo(Genero, { foreignKey: 'id_genero' });

Departamento.hasMany(Localidad, { foreignKey: 'id_depar' });
Localidad.belongsTo(Departamento, { foreignKey: 'id_depar' });


Rubro.hasMany(Postulante, { foreignKey: 'id_rubro' });
Postulante.belongsTo(Rubro, { foreignKey: 'id_rubro' });

EstadoLaboral.hasMany(Postulante, { foreignKey: 'id_estado_laboral' });
Postulante.belongsTo(EstadoLaboral, { foreignKey: 'id_estado_laboral' });

NivelEducacion.hasMany(Postulante, { foreignKey: 'id_nivel_educacion' });
Postulante.belongsTo(NivelEducacion, { foreignKey: 'id_nivel_educacion' });

Rubro.hasMany(Empleador, { foreignKey: 'id_rubro' });
Empleador.belongsTo(Rubro, { foreignKey: 'id_rubro' });


// //CONTENIDO
User.hasMany(Post, { foreignKey: "id_user" });
Post.belongsTo(User, { foreignKey: "id_user" });

Rubro.hasMany(Post, { foreignKey: "id_rubro" });
Post.belongsTo(Rubro, { foreignKey: "id_rubro" });

Image.belongsTo(User, { foreignKey: "id_user" });
User.hasMany(Image, { foreignKey: "id_user" });