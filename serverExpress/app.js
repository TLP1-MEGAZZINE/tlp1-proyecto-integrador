const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
const path = require('path')

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

// RUTAS
app.use(require('./routes/index.routes'));

//ARCHIVOS ESTATICOS
app.use(express.static(path.join(__dirname, '../public')));


//LEVANTAR EL SERVIDOR
app.listen(port, () => {
    console.log(`SERVIDOR EJECUTANDOSE EN EL PUERTO: ${port}`);
});