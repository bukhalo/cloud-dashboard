const express = require('express')
const axios = require('axios')

const app = express()

app.get('/api/auth/signup', async (req, res, next) => {
  try {
    const session = await axios.get(process.env.BILLING_ENDPOINT, {
      params: {
        out: 'bjson',
        func: 'auth',
        username: req.body.username,
        password: req.body.password
      }
    })
    res.cookie('sid', session.data.model.auth, {
      expires: new Date(new Date().getTime() + 60 * 60 * 1000), // one hour
      path: '/',
      httpOnly: true,
      secure: !process.env.NODE_ENV === 'development'
    })
    res.json({
      message: 'Authorized success'
    })
  } catch (e) {
    console.error(e)
    next()
  }
})

module.exports = app
