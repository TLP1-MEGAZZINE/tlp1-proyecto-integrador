const { check } = require("express-validator")
const { validateSchema } = require("../middlewares/validateHealper.js")

const validateInfo = [
    //OBLIGATORIOS
    check("nombre")
        // .exists()
        .notEmpty().withMessage("El nombre no debe estar vacio")
        .matches(/^[a-zA-Z\s\-.,#]+$/).withMessage("El nombre no puede contener números")
        .isLength({ min: 1, max: 30 }).withMessage('El nombre debe tener entre 1 y 30 caracteres')
    ,

    check("apellido")
        // .exists()
        .notEmpty().withMessage("El apellido no debe estar vacio")
        .matches(/^[a-zA-Z\s\-.,#]+$/).withMessage("El apellido no debe contener números")
        .isLength({ min: 1, max: 30 }).withMessage('El apellido debe tener entre 1 y 30 caracteres')
    ,

    check("dni")
        // .exists()
        .notEmpty().withMessage("El DNI no puede estar vacio")
        .isNumeric().withMessage("El dni debe ser numerico")
        .isLength({ min: 8, max: 8 }).withMessage('El dni debe tener 8 caracteres')
    ,

    check("cuil")
        .exists()
        .notEmpty().withMessage("El CUIL no puede estar vacio")
        .isNumeric().withMessage("El dni debe ser numerico")
        .isLength({ min: 11, max: 11 }).withMessage('El cuil debe tener 11 caracteres')
    ,

    //DEBE SER CUSTOM
    // check("fecha_nacimiento")
    //     .notEmpty().withMessage("Debe seleccionar su fecha de nacimiento")
    //     .isNumeric().withMessage("Debe seleccionar su fecha de nacimiento")
    // ,

    check("id_genero")
        .exists()
        .notEmpty().withMessage("Debe seleccionar su genero")
        .isNumeric().withMessage("Debe seleccionar su genero")
    ,

    check("id_pais")
        .exists()
        .notEmpty().withMessage("Debe seleccionar su pais de procedencia")
        .isNumeric().withMessage("Debe seleccionar su pais de procedencia"),

    //OPCIONALES
    check("id_provincia")
        .optional()
        .notEmpty().withMessage("Debe seleccionar su provincia de procedencia")
        .isNumeric().withMessage("."),

    check("id_local")
        .notEmpty().withMessage("Debe seleccionar su localidad de procedencia")
        .isNumeric().withMessage("."),

    check("id_depar")
        .notEmpty().withMessage("Debe seleccionar su departamento de procedencia")
        .isNumeric().withMessage("."),

    check("otro_pais")
        .optional()
        .notEmpty().withMessage("Debe seleccionar su pais de procedencia")
        .matches(/^[a-zA-Z\s\-.,#]+$/).withMessage("Debe seleccionar su pais de procedencia"),

    (req, res, next) => {
        validateSchema(req, res, next)
    }
]

module.exports = { validateInfo }