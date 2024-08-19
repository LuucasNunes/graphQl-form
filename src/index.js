import { ApolloServer } from 'apollo-server';
import { resolvers, typeDefs } from './graphql/schema.js';
import { context } from './context.js';

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context,
});

server.listen(4007).then(({ url }) => {
  console.log(`Server listening on url ${url}`);
});
