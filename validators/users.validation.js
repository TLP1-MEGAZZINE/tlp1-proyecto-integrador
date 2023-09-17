const { check } = require("express-validator")
const { validateSchema } = require("../middlewares/validateHealper.js")
const { findUserByEmail, findUserByUserName } = require("../models/users.model.js")

const validatUser = [
    //OBLIGATORIOS
    check("user_name")
        .exists()
        .notEmpty().withMessage("El nombre de usuario no debe estar vacio")
        .isAlphanumeric().withMessage("El nombre de usuario no debe estar vacio")
        .isLength({ min: 6, max: 30 }).withMessage('El nombre de usuario debe tener entre 6 y 30 caracteres')
        .custom(async (value,) => {
            const existeUsername = await findUserByUserName(value)
            if (existeUsername) {
                throw new Error('El nombre de usuario ya está registrado');
            }
            return true;
        }),

    check("user_password")
        .exists()
        .notEmpty().withMessage("La contraseña no debe estar vacia")
        .isAlphanumeric().withMessage("La contraseña no debe estar vacia")
        .isLength({ min: 9, max: 30 }).withMessage('La contraseña debe tener entre 9 y 30 caracteres'),

    check("validarPass")
        .exists().withMessage("Debe confirmar la contraseña")
        .notEmpty().withMessage("Debe confirmar la contraseña")
        .custom((value, { req }) => {
            if (value !== req.body.user_password) {
                throw new Error("Las contraseñas no coinciden");
            }
            return true;
        }),

    check("user_email")
        .exists()
        .notEmpty().withMessage("El email no puede estar vacio")
        .isEmail().withMessage("Se debe proporcionar un email valido")
        .custom(async (value,) => {
            const existeEmail = await findUserByEmail(value)
            if (existeEmail) {
                throw new Error('El email ya está registrado');
            }
            return true;
        }),

    check("validarEmail")
        .exists().withMessage("Debe confirmar su email")
        .notEmpty().withMessage("Debe confirmar su email")
        .custom((value, { req }) => {
            if (value !== req.body.user_email) {
                throw new Error("Los emails no coinciden");
            }
            return true;
        }),

    check("nombre")
        .exists()
        .notEmpty().withMessage("El nombre no puede estar vacio")
        .isAlpha().withMessage("El nombre debe ser alfabetico"),

    check("apellido")
        .exists()
        .notEmpty().withMessage("El apellido no puede estar vacio")
        .isAlpha().withMessage("El apellido debe ser alfabetico"),

    check("dni")
        .exists()
        .notEmpty().withMessage("El DNI no puede estar vacio")
        .isNumeric().withMessage("El dni debe ser numerico")
        .isLength({ min: 8, max: 8 }).withMessage('El dni debe tener 8 caracteres'),

    check("cuil")
        .exists()
        .notEmpty().withMessage("El CUIL no puede estar vacio")
        .isNumeric().withMessage("El dni debe ser numerico")
        .isLength({ min: 11, max: 11 }).withMessage('El cuil debe tener 11 caracteres'),

    check("num_tel")
        .exists()
        .notEmpty().withMessage("El número telefono no puede estar vacio")
        .isLength({ min: 10, max: 12 }).withMessage('El telefono debe tener mas de 10 caracteres y menos de 12')
        .isNumeric().withMessage("El telefono debe ser numerico"),

    check("id_genero")
        .exists()
        .notEmpty().withMessage("Debe seleccionar su genero")
        .isNumeric().withMessage("Debe seleccionar su genero"),

    check("id_pais")
        .exists()
        .notEmpty().withMessage("Debe seleccionar su pais de procedencia")
        .isNumeric().withMessage("Debe seleccionar su pais de procedencia"),


    //OPCIONALES
    check("id_provincia")
        .optional()
        .notEmpty().withMessage("Debe seleccionar su provincia de procedencia")
        .isNumeric().withMessage("."),

    check("otro_pais")
        .optional()
        .notEmpty().withMessage("Debe seleccionar su pais de procedencia")
        .isAlpha().withMessage("Debe seleccionar su pais de procedencia"),

    //POSTULANTE
    check("id_EstadoLaboral")
        .optional()
        .notEmpty().withMessage("Debe seleccionar su estado laboral")
        .isNumeric().withMessage("Debe seleccionar su estado laboral"),

    check("id_NivelEducacion")
        .optional()
        .notEmpty().withMessage("Debe seleccionar su nivel de educacion alcanzado")
        .isNumeric().withMessage("Debe seleccionar su nivel de educacion alcanzado"),

    check("id_EstadoLaboral")
        .optional()
        .notEmpty().withMessage("Debe seleccionar su estado laboral")
        .isNumeric().withMessage("Debe seleccionar su estado laboral"),

    check("id_rubro")
        .optional()
        .notEmpty().withMessage("Debe seleccionar su rubro")
        .isNumeric().withMessage("Debe seleccionar su rubro"),

    check("otro_rubro")
        .optional()
        .notEmpty().withMessage("Debe seleccionar su rubro")
        .isAlpha().withMessage("Debe seleccionar su rubro"),

    //EMPLEADOR
    check("num_telEmpresa")
        .optional()
        .notEmpty().withMessage("Debe colocar su número de telefono empresarial")
        .isNumeric().withMessage("El telefono empresarial debe ser un número"),

    check("domicilioEmpresa")
        .optional()
        .notEmpty().withMessage("Debe colocar el domicilio de su empresa")
        .isAlphanumeric().withMessage("Debe colocar el domicilio de su empresa"),

    check("nombre_empresa")
        .optional()
        .notEmpty().withMessage("Debe colocar el nombre de su empresa")
        .isAlphanumeric().withMessage("Debe colocar el nombre de su empresa"),

    (req, res, next) => {
        validateSchema(req, res, next)
    }
]

module.exports = { validatUser }