const mongoose = require('mongoose')
const List = require("./List")
const User = require("./User")

const connectDB = async () => {
    try {
        await mongoose.connect(`
        mongodb+srv://aurorawebdev:${process.env.DB_PASSWORD}@comic.ikptc.mongodb.net/Comic?retryWrites=true&w=majority`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        })
        console.log('ConncectDb Success')
    } catch (error) {
        console.log(error)
    }
}
const db = {}
db.list = List
db.user = User
db.connect = connectDB

module.exports = db