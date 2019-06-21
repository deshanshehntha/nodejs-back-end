const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//define collections and schema for trains

let Course = new Schema({

        course_name: {
            type: String
        },
        course_code: {
            type: String
        },
        instructors:[{
            instructor:{type:String,required:true},
            status:{type:String}

        }]


    }
);


module.exports = mongoose.model('Course', Course);