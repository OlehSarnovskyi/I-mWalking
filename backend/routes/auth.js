const express = require('express')
const router = express.Router()
const passport = require('passport')

const controller = require('../controllers/auth')


router.post('/register', controller.register)
router.post('/login', controller.login)
router.get('/my-data/:_id', passport.authenticate('jwt', {session: false}), controller.myData)
router.put('/my-data/update', passport.authenticate('jwt', {session: false}), controller.updateMyData)


module.exports = router
