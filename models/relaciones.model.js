const {User} = require("./users.model")
const {UserInfo} = require("./userInfo.model");
const { Contacto } = require("./contacto.model");
const { Empleador } = require("./empleador.model");
const { Particular } = require("./particular.model");
const { Postulante } = require("./postulantes.model");
const {Post} = require("./posteos.model")
const UserRol = require("./userRol.model");
const Rubro = require("./rubro.model");
const Provincia = require("./provincias.models");
const Nacionalidad = require("./paises.model");
const UserGender = require("./genero.model");
const EstadoLaboral = require("./estado_laboral.model");
const NivelEducacion = require("./nivelEduacion.model");

User.belongsTo(UserRol, { foreignKey: 'id_rol' });
UserRol.hasOne(User, { foreignKey: 'id_rol' });

Postulante.belongsTo(EstadoLaboral, { foreignKey: 'id_EstadoLaboral' });
EstadoLaboral.hasOne(Postulante, { foreignKey: 'id_EstadoLaboral' });

Postulante.belongsTo(NivelEducacion, { foreignKey: 'id_NivelEducacion' });
NivelEducacion.hasOne(Postulante, { foreignKey: 'id_NivelEducacion' });

Postulante.belongsTo(Rubro, { foreignKey: 'id_rubro' });
Rubro.hasOne(Postulante, { foreignKey: 'id_rubro' });

UserInfo.belongsTo(Nacionalidad, { foreignKey: 'id_pais' });
Nacionalidad.hasOne(UserInfo, { foreignKey: 'id_pais' });

UserInfo.belongsTo(UserGender, { foreignKey: 'id_genero' });
UserGender.hasOne(UserInfo, { foreignKey: 'id_genero' });

UserInfo.belongsTo(Provincia, { foreignKey: 'id_provincia' });
Provincia.hasOne(UserInfo, { foreignKey: 'id_provincia' });

Particular.belongsTo(User, { foreignKey: 'id_user', as: "User" });
User.hasOne(Particular,{foreignKey: 'id_user'})

Empleador.belongsTo(Rubro, { foreignKey: 'id_rubro' });
Rubro.hasOne(Empleador, { foreignKey: 'id_rubro' });

Contacto.belongsTo(User, { foreignKey: 'id_user', as: "User" });
User.hasOne(Contacto, {foreignKey: 'id_user'})

Post.belongsTo(User, { foreignKey: "id_user" });
User.hasMany(Post, { foreignKey: "id_user" });