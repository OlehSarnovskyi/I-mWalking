const express = require('express')
const router = express.Router()
const passport = require('passport')

const controller = require('../controllers/auth')


router.post('/register', controller.register)
router.post('/login', controller.login)
router.get('/my-data', passport.authenticate('jwt', {session: false}), controller.myData)


module.exports = router
