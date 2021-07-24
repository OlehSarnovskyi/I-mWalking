const express = require('express')
const router = express.Router()
const passport = require('passport')

const controller = require('../controllers/posts')


router.get('/getMy/:_id', passport.authenticate('jwt', {session: false}), controller.getMy)
router.post('/search', passport.authenticate('jwt', {session: false}), controller.search)
router.post('/create', passport.authenticate('jwt', {session: false}), controller.create)
router.delete('/delete/:_id', passport.authenticate('jwt', {session: false}), controller.delete)


module.exports = router
