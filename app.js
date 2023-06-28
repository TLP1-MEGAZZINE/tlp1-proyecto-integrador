const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
const path = require('path')

// El método config de dotenv permite leer variables de entorno desde un archivo .env
require('dotenv').config();

// Se importa la instancia de conexión a la base de datos - (debe ser después de leer las variables de entorno)
// const { sequelize } = require('./db');

require('ejs');

//DECLARACION DEL PUERTO
const port = 5000;

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

//ARCHIVOS ESTATICOS
app.use(express.static(path.join(__dirname, 'public')));

//MOTOR DE PLANTILLAS
app.set('view engine', 'ejs');
app.set('views', (__dirname + '/views'));

// RUTAS
app.use(require('./routes/index.routes'));
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