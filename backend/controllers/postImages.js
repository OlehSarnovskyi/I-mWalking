const PostImage = require('../models/PostImage')
const errorHandler = require('../utils/errorHandler')

module.exports.upload = async (req, res) => {
    const postImage = new PostImage({
        imageSrc: req.body.imageSrc,
        post: req.body._id
    })
    try {
        await postImage.save()
        res.status(201)
    } catch (e) {
        errorHandler(res, e)
    }
}
