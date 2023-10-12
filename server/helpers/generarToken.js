const jwt = require('jsonwebtoken');

const generarJWT = (id_user) => {
    return new Promise((resolve, reject) => {
        const payload = { id_user };

        // Se firma el token
        jwt.sign(payload, process.env.SECRET_KEY, {
            expiresIn: '1h',
        }, (err, token) => {
            if (err) {
                console.log(err);
                reject('No se pudo generar el JWT');
            } else {
                resolve(token);
                console.log('JWT creado exitosamente')
            }
        });

    });
}

module.exports = {
    generarJWT,
}