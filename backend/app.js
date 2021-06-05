const express = require('express')
const mongoose = require('mongoose')
const passport = require('passport')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const path = require('path')
const authRoutes = require('./routes/auth')
const postsRoutes = require('./routes/posts')
const keys = require('./config/keys')

const app = express()

mongoose.connect(keys.mongoURI)
    .then(() => console.log('MongoDB connected!!!'))
    .catch(error => console.log(`MongoDB failed!!! \n${error}`))

app.use(passport.initialize())
require('./middleware/passport')(passport)

app.use(morgan('dev'))
app.use(cors())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use('/api/auth', authRoutes)
app.use('/api/posts', postsRoutes)

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('../frontend/dist/ImWalking'))

    app.get('*', (req, res) => {
        res.sendFile(
            path.join(__dirname, 'frontend', 'dist', 'ImWalking', 'index.html')
        )
    })
}

module.exports = app
