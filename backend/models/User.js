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
    // TODO refactor for imgSrc
    imageSrc: {
        type: String,
        default: ''
    },
    posts: [{ type: Schema.Types.ObjectId, ref: 'post'}]
})

module.exports = mongoose.model('user', userSchema)
