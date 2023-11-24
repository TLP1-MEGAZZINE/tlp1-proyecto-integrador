const { check } = require("express-validator")
const { validateSchema } = require("../middlewares/validateHealper.js")

const validateContact = [
    check("num_tel")
        .exists()
        .notEmpty().withMessage("El número telefono no puede estar vacio")
        .isLength({ min: 10, max: 12 }).withMessage('El telefono debe tener mas de 10 caracteres y menos de 12')
        .isNumeric().withMessage("El telefono debe ser numerico")
    ,

    check("domicilio")
        .exists()
        .notEmpty().withMessage("Debe colocar su domicilio")
        .matches(/^[a-zA-Z0-9\s\-.,#]+$/).withMessage("El domicilio debe ser correcto")
    ,

    (req, res, next) => {
        validateSchema(req, res, next)
    }
]

module.exports = { validateContact }