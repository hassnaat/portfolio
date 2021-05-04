const projectsModel = require('../models/projectsModel');
const projectsRouter = require('../routes/projectsRouter');
const getProjects = async (req,res) =>{
    try {
        const projects = await projectsModel.find();
        res.status(200).json(projects)
    } catch (error) {
        res.status(500).json({
            message:'Projects not found'
        })
    }

}
const addProject = (req,res) =>{
    console.log(req.body.image)
    const project = new projectsModel({
        title:req.body.title,
        image:req.body.image,
        url:req.body.url
    });
    project.save((error,project)=>{
        error?res.status(500).json({
            message:'Project Can not be added due to error : '+error
        }):
        res.status(200).json(project)
    });

}
const updateProject = (req,res)=>{
    projectsModel.updateOne({_id:req.params.id},{...req.body,image:req.file.filename},(error,project)=>{
        error?res.status(500).josn({
            message:'can not update project due to error : '+error
        }):
        res.status(202).json({
            message:'Project Update Successfully',
            updated:project
        })
    })
}
const deleteProject = (req,res) =>{
    projectsModel.deleteOne({_id:req.params.id})
    .then(result=>{
        res.status(202).json({
            message:'Project Deleted Successfully'
        })
    })
    .catch(error=>{
        res.status(500).json({
            message:'Failed to delete project due to error : '+error
        })
    })
}

module.exports = {getProjects,addProject,deleteProject,updateProject}