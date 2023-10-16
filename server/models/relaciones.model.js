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

// UserInfo.hasOne(User);
UserInfo.belongsTo(User, { foreignKey: 'id_user' });

User.hasOne(Particular)
Particular.belongsTo(User, { foreignKey: 'id_user' });

User.hasOne(Contacto)
Contacto.belongsTo(User, { foreignKey: 'id_user' });

User.hasOne(Empleador)
Empleador.belongsTo(User, { foreignKey: 'id_user' });

User.hasOne(Postulante)
Postulante.belongsTo(User, { foreignKey: 'id_user' });

// //UNO A MUCHOS
Rol.hasMany(User, { foreignKey: 'id_rol' });
User.belongsTo(Rol,{ foreignKey: 'id_rol' });

Paises.hasMany(UserInfo, { foreignKey: 'id_pais' });
UserInfo.belongsTo(Paises);

Provincia.hasMany(UserInfo, { foreignKey: 'id_provincia' });
UserInfo.belongsTo(Provincia);

Departamento.hasMany(UserInfo, { foreignKey: 'id_depar' });
UserInfo.belongsTo(Departamento);

Localidad.hasMany(UserInfo, { foreignKey: 'id_local' });
UserInfo.belongsTo(Localidad);

Genero.hasMany(UserInfo, { foreignKey: 'id_genero' });
UserInfo.belongsTo(Genero);

Departamento.hasMany(Localidad, { foreignKey: 'id_depar' });
Localidad.belongsTo(Departamento);


Rubro.hasMany(Postulante, { foreignKey: 'id_rubro' });
Postulante.belongsTo(Rubro);

EstadoLaboral.hasMany(Postulante, { foreignKey: 'id_estado_laboral' });
Postulante.belongsTo(EstadoLaboral);

NivelEducacion.hasMany(Postulante, { foreignKey: 'id_nivel_educacion' });
Postulante.belongsTo(NivelEducacion);

Rubro.hasMany(Empleador, { foreignKey: 'id_rubro' });
Empleador.belongsTo(Rubro);


// //CONTENIDO
User.hasMany(Post, { foreignKey: "id_user" });
Post.belongsTo(User, { foreignKey: "id_user" });

Rubro.hasMany(Post, { foreignKey: "id_rubro" });
Post.belongsTo(Rubro, { foreignKey: "id_rubro" });

Image.belongsTo(User, { foreignKey: "id_user" });
User.hasMany(Image);

// User.sync({force: true});
// UserInfo.sync({force: true});
//  Contacto.sync({force: true});
//  Empleador.sync({force: true});
//  Particular.sync({force: true});
//  Postulante.sync({force: true});
//  Post.sync({force: true});
//  Image.sync({force: true});
//  Rol.sync({force: true});
//  Rubro.sync({force: true});
//  Provincia.sync({force: true});
//  Paises.sync({force: true});
//  Genero.sync({force: true});
//  Departamento.sync({force: true});
//  Localidad.sync({force: true});
//  EstadoLaboral.sync({force: true});
//  NivelEducacion.sync({force: true});

