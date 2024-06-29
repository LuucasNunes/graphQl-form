import { ApolloServer, gql } from 'apollo-server';

const server = new ApolloServer({
  typeDefs: gql`
    type Query {
      id: ID!
      name: String!
      age: Int!
      avarage: Float
      married: Boolean
      arrayTest: [String!]!
    }
  `,

  resolvers: {
    Query: {
      id: () => '7dayd8uh91-8',
      name: () => 'Lucas Antonelo',
      age: () => 33,
      avarage: () => 57.65,
      married: () => true,
      arrayTest: () => ['Abc', 'def', 'ghi'],
    },
  },
});

server.listen(4007).then(({ url }) => {
  console.log(`Server listening on url ${url}`);
});
