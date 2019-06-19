const express = require('express')
const { ApolloServer } = require('apollo-server-express')
const axios = require('axios')
const consola = require('consola')
const schema = require('../schema')

const app = express()
const typeDefs = schema.typeDefs
const resolvers = schema.resolvers

const getUser = async req => {
  if (req.cookies.sid) {
    try {
      const bill = await axios.get(process.env.BILLING_ENDPOINT, {
        params: {
          auth: req.cookies.sid,
          out: 'bjson',
          func: 'desktop'
        }
      })
      if (!bill.data.error) {
        return bill.data.user
      } else {
        consola.error(bill.data.error)
        return null
      }
    } catch (e) {
      consola.error(e)
    }
  } else {
    return null
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req, res }) => ({
    req,
    res,
    user: getUser(req)
  }),
  playground: {
    settings: {
      'request.credentials': 'include',
      'editor.theme': 'light'
    }
  }
})

server.applyMiddleware({ app, path: '/api' })

module.exports = app
