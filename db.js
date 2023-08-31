require("dotenv").config();
const mongoose = require("mongoose");
const MONGODB = process.env.MONGODB;

function connectDB(){

    mongoose.connect(MONGODB, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
      });

    const connection = mongoose.connection

    connection.on('connected' , ()=>{
        console.log('Mongo DB Connection Successfull')
    })

    connection.on('error' , ()=>{
        console.log('Mongo DB Connection Error')
    })


}

connectDB()

module.exports = mongoose