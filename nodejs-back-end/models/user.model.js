//import mongoose
const mongooes =require('mongoose');
const Schema =mongooes.Schema;

//creating the model schema
let User = new Schema({
    regNo :{
        type: String
    },

    fname:{
        type : String
    },
    lname:{
        type : String
    },
    role:{
        type: String
    },
    email:{
        type: String
    },
    password:{
        type: String
    }

});

//make exportable to import in server
module.exports = mongooes.model('User',User)