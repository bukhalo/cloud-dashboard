const express = require('express')
const auth = require('./api/auth')
const billing = require('./api/billing')
const cloud = require('./api/cloud')

const app = express()

app.use(auth)
app.use(cloud)
app.use(billing)

module.exports = app
