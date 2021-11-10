const express = require('express');
const conectarDB = require('./config/db');
const cors = require("cors");

// Cria o servidor
const app = express();

// Conecta ao DB
conectarDB();
app.use(cors())

app.use(express.json());

app.use('/api/produtos', require('./routes/produto'));


app.listen(4000, () => {
    console.log('O servidor está executando perfeitamente')
})