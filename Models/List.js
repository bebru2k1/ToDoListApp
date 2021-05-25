const mongoose = require('mongoose')
const { Schema } = mongoose

const ListSchema = new Schema({
    title: { type: String, required: true },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    }
})
module.exports = mongoose.model('lists', ListSchema)