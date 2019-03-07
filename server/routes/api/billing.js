const express = require('express')
// const consola = require('consola')
const billing = require('../../config/billing')

const app = express()

app.all('/api/billing', async (req, res, next) => {
  if (Object.keys(req.query).length < 1) {
    // return 404 error, when billing frontpage requested
    res.status(404).end()
  } else {
    // make billing reqest if api request has query
    try {
      const billmgr = await billing({
        method: req.method,
        params: req.query
      })
      res.send(billmgr.data)
    } catch (e) {
      console.error(e)
      next()
    }
  }
})

module.exports = app
