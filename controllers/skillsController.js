const skillsModel = require('../models/skillsModel');

const getSkills = async (req, res) => {
    try {
        const skills = await skillsModel.find();
        res.status(200).json(skills)
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }

}
const getSkill = async (req, res) => {
    try {
        const skill = await skillsModel.findOne({ _id: req.params.id });
        res.status(200).json(skill)
    } catch (error) {
        res.status(500).json({
            message: 'Skill not found'
        })
    }

}
const addSkill = (req, res) => {
    const skill = new skillsModel({
        name: req.body.name,
        percentage: req.body.percentage
    });
    skill.save((error, skill) => {
        error ? res.status(500).json({
            message: 'Skill can not be added due to Error : ' + error
        }) :
            res.status(200).json(skill)
    });
}
const updateSkill = (req, res) => {
    skillsModel.updateOne({ _id: req.params.id }, req.body, (error, skill) => {
        error ? res.status(500).json({
            message: 'Can not update skill due to Error : ' + error
        }) :
            res.status(202).json({
                message: 'Skill updated Successfully',
                updated: skill
            })
    })

}
const deleteSkill = (req, res) => {
    skillsModel.deleteOne({ _id: req.params.id })
        .then(result => {
            res.status(202).json({
                message: 'Skill Deleted Successfully'
            })
        })
        .catch(error => {
            res.status(500).json({
                message: 'Failed to delete Skill due to error : ' + error
            })
        })
}
module.exports = { getSkills, addSkill, deleteSkill, updateSkill, getSkill }