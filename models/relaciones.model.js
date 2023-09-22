const {User} = require("./users.model")
const {UserInfo} = require("./userInfo.model");
const { Contacto } = require("./contacto.model");
const { Empleador } = require("./empleador.model");
const { Particular } = require("./particular.model");
const { Postulante } = require("./postulantes.model");
const {Post} = require("./posteos.model")
const {Image} = require("./imagenes.model")
const UserRol = require("./userRol.model");
const Rubro = require("./rubro.model");
const Provincia = require("./provincias.models");
const Nacionalidad = require("./paises.model");
const UserGender = require("./genero.model");
const EstadoLaboral = require("./estado_laboral.model");
const NivelEducacion = require("./nivelEduacion.model");

//UNO A UNO
User.belongsTo(UserInfo, { foreignKey: 'id_user' });
UserInfo.hasOne(User, { foreignKey: 'id_user' });

Particular.belongsTo(User, { foreignKey: 'id_user', as: "User" });
User.hasOne(Particular,{foreignKey: 'id_user'})

Contacto.belongsTo(User, { foreignKey: 'id_user', as: "User" });
User.hasOne(Contacto, {foreignKey: 'id_user'})

Empleador.belongsTo(User, { foreignKey: 'id_user', as: "User" });
User.hasOne(Empleador,{foreignKey: 'id_user'})

Postulante.belongsTo(User, { foreignKey: 'id_user', as: "User" });
User.hasOne(Postulante,{foreignKey: 'id_user'})

//UNO A MUCHOS
User.belongsTo(UserRol, { foreignKey: 'id_rol' });
UserRol.hasMany(User, { foreignKey: 'id_rol' });

UserInfo.belongsTo(Nacionalidad, { foreignKey: 'id_pais' });
Nacionalidad.hasMany(UserInfo, { foreignKey: 'id_pais' });

UserInfo.belongsTo(Provincia, { foreignKey: 'id_provincia' });
Provincia.hasMany(UserInfo, { foreignKey: 'id_provincia' });

UserInfo.belongsTo(UserGender, { foreignKey: 'id_genero' });
UserGender.hasMany(UserInfo, { foreignKey: 'id_genero' });



Postulante.belongsTo(Rubro, { foreignKey: 'id_rubro' });
Rubro.hasMany(Postulante, { foreignKey: 'id_rubro' });

Postulante.belongsTo(EstadoLaboral, { foreignKey: 'id_EstadoLaboral' });
EstadoLaboral.hasMany(Postulante, { foreignKey: 'id_EstadoLaboral' });

Postulante.belongsTo(NivelEducacion, { foreignKey: 'id_NivelEducacion' });
NivelEducacion.hasMany(Postulante, { foreignKey: 'id_NivelEducacion' });



Empleador.belongsTo(Rubro, { foreignKey: 'id_rubro' });
Rubro.hasMany(Empleador, { foreignKey: 'id_rubro' });


//CONTENIDO
Post.belongsTo(User, { foreignKey: "id_user" });
User.hasMany(Post, { foreignKey: "id_user" });

Image.belongsTo(User, { foreignKey: "id_user" });
User.hasMany(Image, { foreignKey: "id_user" });
