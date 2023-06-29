//IMPORTAR LOS MODELOS DE LAS TABLAS DE LA BASE DE DATOS
const Users = require('../models/users.model');
const sequelize = require('../db');

const User = require('../models/users.model');
// const UserInfo = require('../models/userData.model');
// const Nro_cel = require('../models/celTel.model');

//CREAR EL OBJETO QUE CONTENDRA LOS METODOS POST
const metodoPost = {}

// METODO PARA CREAR UN USUARIO
metodoPost.crearUsuario = async (req, res) => {
    const { user_name, user_email, user_password } = req.body;
console.log(req.body)

try {
    const user = await User.create({
        user_name,
        user_email,
        user_password
    });
if (!user) {
    throw ({
        status: 400,
        message: 'No se pudo crear un usuario'
    })
}

return res.json(user);
} catch (error) {
    console.log(error);
    return res.status(error.status || 500).json(error.message || 'Error del sevidor');  
}
};


// METODO PARA EL LOGIN
metodoPost.loginUsuario = async (req,res) => {
    const { nombre, contraseña } = req.body;


const usuario = await User.findOne({
    where: {
        [user_name] : [
            {user_name: user_name},
            {user_email: user_email},
        ],
    },
});

if (!usuario) {
    return res.status(401).json({  error: 'Credenciales invalidas'  });
}

const validarPass = await user.compararPass(contraseña);
if (!validarPass) {
    return res.status(401).json({ error: 'Credenciales invalidas'})
}

res.json({message: 'Inicio de sesion exitoso'});

};

module.exports = metodoPost;