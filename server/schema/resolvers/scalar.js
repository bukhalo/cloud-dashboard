const graphqlIsoDate = require('graphql-iso-date')

module.exports = {
  Date: graphqlIsoDate.GraphQLDate,
  Time: graphqlIsoDate.GraphQLTime,
  DateTime: graphqlIsoDate.GraphQLDateTime
}
