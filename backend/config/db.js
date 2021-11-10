const mongoose = require('mongoose');
require('dotenv').config({ path: 'variaveis.env' });

const conectarDB = async () => {

    try {

        await mongoose.connect(process.env.DB_MONGO)
        console.log('DB Conectado');
        
    } catch (error) {
        console.log(error);
        process.exit(1);
    }

}

module.exports = conectarDB