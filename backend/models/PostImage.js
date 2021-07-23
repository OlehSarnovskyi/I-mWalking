const mongoose = require('mongoose')
const Schema = mongoose.Schema

const postImageSchema = new Schema({
    imageSrc: {
        type: String,
        required: true
    },
    post: {
        ref: 'post',
        type: Schema.Types.ObjectId
    }
})

module.exports = mongoose.model('postImage', postImageSchema)
