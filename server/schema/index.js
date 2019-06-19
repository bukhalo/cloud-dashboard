const path = require('path')
const mergeGraphqlSchemas = require('merge-graphql-schemas')

const fileLoader = mergeGraphqlSchemas.fileLoader
const mergeResolvers = mergeGraphqlSchemas.mergeResolvers
const mergeTypes = mergeGraphqlSchemas.mergeTypes

const resolversArray = fileLoader(path.join(__dirname, './resolvers/**/*.js'))
const typesArray = fileLoader(path.join(__dirname, './types/**/*.graphql'))

module.exports.resolvers = mergeResolvers(resolversArray)
module.exports.typeDefs = mergeTypes(typesArray, { all: true })
