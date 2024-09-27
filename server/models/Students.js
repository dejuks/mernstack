const mongoose = require('mongoose')

const StudentSchame=new mongoose.Schema({
    name:String,
    phone:String,
    email:String
})

const StudentModel=mongoose.model("students",StudentSchame)

module.exports = StudentModel;