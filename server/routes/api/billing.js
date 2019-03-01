const express = require('express')
const billing = require('../../endpoints/billing')

const app = express()

app.all('/api/billing', async (req, res, next) => {
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
})

module.exports = app
