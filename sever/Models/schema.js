const mongoose = require('mongoose')


const Schemas = mongoose.Schema({

    name : String ,
    email : String,
    password: String,

})


const nexts = mongoose.model('nextss' , Schemas)

module.exports = nexts;
