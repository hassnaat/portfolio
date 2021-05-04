const mongoose = require('mongoose');

const projectSchema = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    url:{
        type:String
    }
})

const Project = mongoose.model('Project',projectSchema);
module.exports = Project;