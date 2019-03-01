const express = require('express')
const login = require('./login')
const signup = require('./signup')

const app = express()

app.use(login)
app.use(signup)

module.exports = app
