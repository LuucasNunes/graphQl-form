import { gql } from 'apollo-server-core';

export const postTypeDefs = gql`
  extend type Query {
    post(id: ID!): Post!
    posts: [Post!]!
  }

  type Post {
    id: ID!
    title: String!
    body: String!
    userId: User!
    indexRef: Int!
    createdAt: String!
  }
`;
