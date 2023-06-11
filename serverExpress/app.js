const express = require('express');
const path = require('path');
const morgan = require('morgan');
const server = express();

server.get('/', (req, res) => { 
res.sendFile(path.join(__dirname,'../index.html'));
});


server.listen(5000, () => {
    console.log('SERVIDOR EJECUTANDOSE EN EL PUERTO 5000')
});