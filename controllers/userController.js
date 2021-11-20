const userModel = require('../models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const get_user = async (req, res) => {
    try {
        const user = await userModel.find();
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({ message: 'Server Error' })
    }
}
const update_user = async (req, res) => {
    try {
        const { name, role, image, description, password, email } = req.body;
        const hashedPassword = await bcrypt.hash(password, 12)
        const id = req.params.id;
        const data = { name, role, image, description, password: hashedPassword, email }
        const update = await userModel.findByIdAndUpdate(id, data, (err, updated) => {
            err ? res.status(500).send(err) : res.status(201).json(updated)
        })
    } catch (error) {
        console.log(error)
    }
}



const login_user = async (req, res) => {
    try {
        const { email, password } = req.body;
        const userExists = await userModel.findOne({ email });
        if (!userExists) {
            return res.status(401).json({ error: 'Wrong Email or Password' })
        }
        const isValid = await bcrypt.compare(password, userExists.password)

        if (!isValid) {
            return res.status(401).json({ error: 'Wrong Email or Password' })
        }
        const token = jwt.sign({ _id: userExists._id }, process.env.JWT_SECRET)
        res.json({
            token,
            user: userExists
        })
    } catch (error) {
        console.log(error)
    }
}
module.exports = { get_user, update_user, login_user }
