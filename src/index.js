import { ApolloServer } from 'apollo-server-lambda';
import { resolvers } from './resolvers/resolver.js';
import { typeDefs } from './schemas/schema.js';

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

export const graphqlHandler = server.createHandler({
  cors: {
    origin: 'http://localhost:3001',
    credentials: true,
  }
})