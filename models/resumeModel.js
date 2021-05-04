const mongoose = require('mongoose');

const resumeSchema = mongoose.Schema({
    resume:{
        type:String,
        required:true
    }
});

const Resume = mongoose.model('Resume',resumeSchema);
module.exports = Resume
