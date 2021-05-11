const Post = require('../models/Post')
const errorHandler = require('../utils/errorHandler')

module.exports.search = async (req, res) => {

    const posts = await Post.find({
        city: req.body.city,
        animal: req.body.animal,
        description: {'$regex': req.body.description}
    })

    res.status(200).json({
        list: posts
    })
}

module.exports.create = async (req, res) => {

    const possiblePost = await Post.findOne({_id: req.body._id})

    if (possiblePost) {
        res.status(409).json({
            message: 'You already have post'
        })
    } else {
        const post = new Post({
            city: req.body.city,
            description: req.body.description
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

