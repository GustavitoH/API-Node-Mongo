const express = require('express');
const app = express();

//Cargar Rutas
const librosRoutes = require('./routes/libro.route')
const usuarioRoutes = require('./routes/usuario.route')

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Rutas Base
app.use('/api', librosRoutes, usuarioRoutes)

//Rutas
app.get('/', (req, res)=>{
    res.status(200).send({
        mensaje: 'Ruta de prueba de API Rest'
    })
})


module.exports = app
