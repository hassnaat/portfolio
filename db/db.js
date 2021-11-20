const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://hasnat:hasnaat1998@portfolio.ep6so.mongodb.net/portfolio?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
        console.log('connected to database successfully')
    } catch (error) {
        console.log('database connection failed .... Error : ' + error)
    }

}
module.exports = connectDB;