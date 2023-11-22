

const mongoose = require("mongoose")


const studentSchema = new mongoose.Schema({
    name:
        {
            type: String,
            require: true
        },

    gender:{
        type: String,
        
    },
    dept:{ 
        type: String,
        require: true
    },
    course:{
        type: String,
        require: true
    },
    matNo:{
        type: String,
        require: true,
        unique: true
    },
    faculty: {
        type: String,
        require: true
    }
})


const Students = mongoose.model("Students", studentSchema)

module.exports = Students