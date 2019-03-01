require('dotenv').config()

const express = require('express')
const consola = require('consola')

const config = require('../nuxt.config.js')
const middleware = require('./middleware')
const routes = require('./routes')
const nuxt = require('./middleware/nuxt')

const app = express()

app.use(middleware)
app.use(routes)

// import Nuxt only last queue!
app.use(nuxt)

const {
  host = process.env.HOST || '127.0.0.1',
  port = process.env.PORT || 3000
} = config.server

try {
  app.listen(port, host, () => {
    consola.ready({
      message: `Server listening on http://${host}:${port}`,
      badge: true
    })
  })
} catch (e) {
  consola.error(`Something went wrong ${e}`)
}
