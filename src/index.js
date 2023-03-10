const { ApolloServer } = require('apollo-server-lambda');
const { resolvers } = require('./resolvers/resolver');
const { typeDefs } = require('./schemas/schema');

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

module.exports.graphqlHandler = server.createHandler({
  cors: {
    origin: 'http://localhost:3001',
    credentials: true,
  }
})