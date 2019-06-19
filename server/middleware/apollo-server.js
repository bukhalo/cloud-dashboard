const express = require('express')
const { ApolloServer } = require('apollo-server-express')
const axios = require('axios')
const consola = require('consola')
const schema = require('../schema')

const app = express()
const typeDefs = schema.typeDefs
const resolvers = schema.resolvers

const getUser = async token => {
  if (token) {
    try {
      const bill = await axios.get(process.env.BILLING_ENDPOINT, {
        params: {
          auth: token,
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
  context: async ({ req, res }) => {
    const tokenWithBearer = req.headers.authorization || ''
    const token = tokenWithBearer.split(' ')[1]
    const user = await getUser(token)
    return {
      req,
      res,
      token,
      tokenWithBearer,
      user
    }
  },
  playground: {
    settings: {
      'request.credentials': 'include',
      'editor.theme': 'light'
    }
  }
})

server.applyMiddleware({ app, path: '/api' })

module.exports = app
