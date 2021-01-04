const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    imageSrc: {
        type: String,
        default: ''
    },
    posts: [
        {
            title: {
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
            imageSrc: {
                type: String,
                default: ''
            }
        }
    ]
})

module.exports = mongoose.model('user', userSchema)
