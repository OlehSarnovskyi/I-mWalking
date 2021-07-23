const Post = require('../models/Post')
const errorHandler = require('../utils/errorHandler')

module.exports.getMy = async (req, res) => {
    try {
        const posts = await Post.find({author: req.params._id})
        res.status(200).json({
            list: posts
        })
    } catch (e) {
        errorHandler(res, e)
    }
}

module.exports.search = async (req, res) => {

    const posts = await Post.find({
        city: req.body.city,
        animal: req.body.animal,
        description: {$regex: new RegExp(req.body.description, 'i')}
    })

    res.status(200).json({
        list: posts
    })
}

module.exports.create = async (req, res) => {

    const possiblePost = await Post.findOne({author: req.body._id})

    if (possiblePost) {
        res.status(409).json({
            message: 'You already have post'
        })
    } else {
        const post = new Post({
            city: req.body.city,
            animal: req.body.animal,
            description: req.body.description,
            imageSrc: req.body.imageSrc,
            author: req.body._id
        })
        try {
            await post.save()
            res.status(201).json({
                message: 'You created a new post'
            })
        } catch (e) {
            errorHandler(res, e)
        }
    }
}

module.exports.delete = async (req, res) => {
    try {
        await Post.findOneAndDelete({author: req.params._id})
        res.status(200).json({
            message: 'You\'ve deleted your post'
        })
    } catch (e) {
        errorHandler(res, e)
    }
}
