const jwt = require('jsonwebtoken');
const User = require('../models/users.model.js');

const validarJWT = async (req, res, next) => {
    // Leer el token
    const token = req.header('Authorization');

    // Separa el token del encabezado "Bearer " para obtener solo el token
    const tokenSinBearer = token ? token.split(' ')[1] : null;

    if (!tokenSinBearer) {
        return res.status(401).json({
            message: 'No hay token en la petición',
        });
    }

    try {
        const { id_user } = jwt.verify(tokenSinBearer, process.env.SECRET_KEY);

        // Leer el usuario que corresponde al id
        const user = await User.findByPk(id_user);

        if (!user) {
            return res.status(401).json({
                message: 'Token no válido - usuario no existe en la base de datos',
            });
        }

        // Verificar si el usuario está activo
        if (!user.estado) {
            return res.status(401).json({
                message: 'Token no válido - usuario con estado: false',
            });
        }

        req.user = user;

        next();
    } catch (error) {
        console.log("error:");
        console.log(error);
        return res.status(401).json({
            message: 'Token no válido',
        });
    }
}

module.exports = {
    validarJWT,
}