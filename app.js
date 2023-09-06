const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
const path = require('path')
const session = require('express-session');

// El método config de dotenv permite leer variables de entorno desde un archivo .env
require('dotenv').config();

// Se importa la instancia de conexión a la base de datos - (debe ser después de leer las variables de entorno)
// const { sequelize } = require('./db');

require('ejs');

// const UserInfo = require("./models/userInfo.model")
// const Users = require("./models/users.model")
// const Contacto = require("./models/contacto.model");
// const UserRol = require("./models/userRol.model")
// const UserGender = require("./models/genero.model")
// const Nacionalidad = require("./models/nacionalidades.model")
const Provincia = require("./models/provincias.models")
const Empleador = require("./models/empleador.model")
const Particular = require("./models/particular.model")
// const Rubro = require("./models/rubro.model")
// const EstadoLaboral = require("./models/estado_laboral.model")
// const NivelEducacion = require("./models/nivelEduacion.model")


const { conectarDB } = require('./db'); 
conectarDB();

//DECLARACION DEL PUERTO
const port = process.env.PORT || 5000
// INICIALIZACION DE EXPRESS
const app = express();

//MIDDLEWARES
app.use(cors());
app.use(helmet({
    contentSecurityPolicy: false
}));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(session({
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 600000, //10 minutos...  36000001hora
    }
  }));

//ARCHIVOS ESTATICOS
app.use(express.static(path.join(__dirname, 'public')));

//MOTOR DE PLANTILLAS
app.set('view engine', 'ejs');
app.set('views', (__dirname + '/views'));

// RUTAS
app.use(require('./routes/vistas.routes'));
app.use(require('./routes/registro.routes'));
app.use(require('./routes/perfiles.routes'))
app.use(require('./routes/principal.routes'))

//EJS 404 - not found
app.use((req, res, next) => {
    res.status(404).render("404", {
        titulo: "404",
        descripcion: "PAGINA NO ENCONTRADA, REDIRIGIENDO A LA PAGINA DE INICIO..."
    })
});

//LEVANTAR EL SERVIDOR
app.listen(port, () => {
    console.log(`SERVIDOR EJECUTANDOSE EN EL PUERTO: ${port}`);
});