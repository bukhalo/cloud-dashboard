const express = require('express')
const ovhEu = require('../../config/ovhEu')

const app = express()

app.all('/api/cloud/*', async (req, res) => {
  try {
    const endpoint = req.path.replace('/api', '')
    const ovh = await ovhEu.requestPromised(req.method, endpoint, req.body)
    res.send(ovh)
  } catch (e) {
    res.status(e.error).send(e.message)
  }
})

module.exports = app
