const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../models/User')
const keys = require('../config/keys')
const errorHandler = require('../utils/errorHandler')

module.exports.register = async (req, res) => {
    const candidate = await User.findOne({email: req.body.email})

    if (candidate) {
        res.status(409).json({
            message: 'This email already exist, try another please.'
        })
    } else {
        const salt = bcryptjs.genSaltSync(10)
        const password = req.body.password

        const user = new User({
            email: req.body.email,
            password: bcryptjs.hashSync(password, salt),
            name: req.body.name
        })
        try {
            await user.save()
            res.status(201).json({
                message: 'You created a new account'
            })
        } catch (e) {
            errorHandler(res, e)
        }
    }
}

module.exports.login = async (req, res) => {
    const candidate = await User.findOne({email: req.body.email})

    if (candidate) {
        const passwordResult = bcryptjs.compareSync(req.body.password, candidate.password)
        if (passwordResult) {
            const token = jwt.sign({
                email: candidate.email,
                userId: candidate._id
            }, keys.jwt, {expiresIn: 60 * 60})

            res.status(200).json({
                token: `Bearer ${token}`,
                message: 'You signed in'
            })
        } else {
            res.status(401).json({
                message: 'Passwords don\'t match'
            })
        }
    } else {
        res.status(404).json({
            message: 'User with that email not found'
        })
    }
}

module.exports.myData = async (req, res) => {
    try {
        const candidate = await User.findOne({email: req.params._id})
        res.status(200).json({
            ...candidate
        })
    } catch (e) {
        errorHandler(res, e)
    }
}
