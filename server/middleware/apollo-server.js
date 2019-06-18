const express = require('express')
const { ApolloServer, gql } = require('apollo-server-express')
const consola = require('consola')

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Query {
    hello: String
  }
`

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    hello: () => 'Hello world!'
  }
}

const server = new ApolloServer({ typeDefs, resolvers })

const app = express()
server.applyMiddleware({ app })

app.listen({ port: 4000 }, () =>
  consola.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
)

module.exports = app
