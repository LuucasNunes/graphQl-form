import { ApolloServer, gql } from 'apollo-server';

const server = new ApolloServer({
  typeDefs: gql`
    type Query {
      user: User!
      users: [User!]
    }
    type User {
      id: ID!
      userName: String!
    }
  `,

  resolvers: {
    Query: {
      user: () => {
        return {
          id: '714812-d2s',
          userName: 'Vanderson Rocha',
        };
      },
      users: () => {
        return [
          {
            id: '714812-d2s',
            userName: 'Vanderson Rocha',
          },
          {
            id: '713112-ds2',
            userName: 'Samanta Pucket',
          },
          {
            id: '463812-d2s',
            userName: 'Airtonn Ribeiro',
          },
        ];
      },
    },
  },
});

server.listen(4007).then(({ url }) => {
  console.log(`Server listening on url ${url}`);
});
