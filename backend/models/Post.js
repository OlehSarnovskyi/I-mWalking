const mongoose = require('mongoose')
const Schema = mongoose.Schema

const postSchema = new Schema({
    city: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    imageSrc: {
        type: String,
        default: ''
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('post', postSchema)
