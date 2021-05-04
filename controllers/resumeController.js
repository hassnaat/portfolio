const Resume = require("../models/resumeModel");


const getResume = (req,res)  =>{
    Resume.findOne()
    .then(resume=>{
        res.json(resume)
    })
    .catch(error=>{
        res.status(500).json({
            error:'Can not find resume'
        })
    })
}

const updateResume = (req,res) =>{
    const {url} = req.body
    Resume.findByIdAndUpdate('608d568fb8258b33a8c67eff',{resume:url},{new:true},(err,model)=>{
        if(err){
            return res.status(500).json({error:'Can not update resume'})
        }
        res.json({message:'Updated Successfully',model})
    })
    
}

module.exports = {updateResume,getResume};