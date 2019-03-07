const express = require('express')
const axios = require('axios')
const consola = require('consola')

const app = express()

app.post('/api/auth/login', async (req, res, next) => {
  try {
    const bill = await axios.get(process.env.BILLING_ENDPOINT, {
      params: {
        out: 'bjson',
        func: 'auth',
        username: req.body.username,
        password: req.body.password
      }
    })

    if (!bill.data.error) {
      res.cookie('sid', bill.data.model.auth, {
        expires: new Date(new Date().getTime() + 60 * 60 * 1000), // one hour
        path: '/',
        httpOnly: true,
        secure: !process.env.NODE_ENV === 'development'
      })
      res.json({
        message: 'Authorized successfully'
      })
    } else {
      res.status(403).send({
        error: bill.data.error
      })
    }
  } catch (e) {
    consola.error(e)
    next()
  }
})

module.exports = app
