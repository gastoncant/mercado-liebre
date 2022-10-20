const express = require('express');
const app = express();
const path = require ('path');
const publicFolderPath = path.resolve('public');
const port = process.env.PORT||3000;

app.use(express.static(publicFolderPath));

app.listen(port, ()=> {
    console.log('Servidor corriendo en el puerto ${port} ')

})

app.get ('/', (req, res) =>{

    res.sendFile(path.resolve('views/home.html'));
})

app.get ('/registro', (req, res) =>{

    res.sendFile(path.join(__dirname + '/views/register.html'));
})

app.get ('/login', (req, res) =>{

    res.sendFile(path.join(__dirname +'/views/login.html'));
})
