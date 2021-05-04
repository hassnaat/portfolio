const mongoose = require('mongoose');

const skillsSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    percentage:{
        type:Number,
        required:true
    }
});

const Skill = mongoose.model('Skill',skillsSchema);
module.exports = Skill
