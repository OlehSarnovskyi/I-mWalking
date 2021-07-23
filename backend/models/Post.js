const mongoose = require('mongoose')
const Schema = mongoose.Schema

const postSchema = new Schema({
    city: {
        type: String,
        required: true
    },
    animal: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    author: {
        ref: 'user',
        type: Schema.Types.ObjectId
    },
    image: {
        ref: 'image',
        type: Schema.Types.ObjectId
    }
})

module.exports = mongoose.model('post', postSchema)
