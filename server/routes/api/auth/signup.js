const express = require('express')
const consola = require('consola')
const axios = require('axios')
const queryString = require('query-string')

const app = express()

app.post('/api/auth/signup', async (req, res, next) => {
  try {
    const signup = await axios.post(
      process.env.BILLING_ENDPOINT,
      queryString.stringify({
        func: 'register',
        out: 'bjson',
        sok: 'ok',
        realname: req.body.realname,
        email: req.body.email,
        passwd: req.body.password
      })
    )

    if (!signup.data.error) {
      const { key } = queryString.parse(signup.data.ok.v)
      const auth = await axios.post(
        process.env.BILLING_ENDPOINT,
        queryString.stringify({
          out: 'bjson',
          auth: 'undefined',
          func: 'auth',
          key: key
        })
      )

      if (!auth.data.error) {
        res.cookie('sid', auth.data.model.auth, {
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
          error: auth.data.error
        })
      }
    } else {
      res.status(403).send({
        error: signup.data.error
      })
    }
  } catch (e) {
    consola.error(e)
    next()
  }
})

module.exports = app
