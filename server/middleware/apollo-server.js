const express = require('express')
const { ApolloServer } = require('apollo-server-express')
const schema = require('../schema')

const app = express()
const typeDefs = schema.typeDefs
const resolvers = schema.resolvers

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req, res }) => ({
    req,
    res
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
