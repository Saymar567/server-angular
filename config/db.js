const mongoose = require('mongoose');

require('dotenv').config({path: 'variables.env'});

const MONGODB = process.variables.env.DB_MONGO;
const connectDB = async()=>{

try {
    await mongoose.connect(MONGODB)
console.log('base de datos conectada');
}catch(error){

    console.log(error);
    process.exit(1);
}
}

module.exports = connectDB