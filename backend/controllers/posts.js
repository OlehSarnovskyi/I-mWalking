const Post = require('../models/Post')

module.exports.search = async (req, res) => {

    const posts = await Post.find({
        city: req.body.city,
        description: {'$regex': req.body.description}
    })

    res.status(200).json({
        list: posts
    })
}
