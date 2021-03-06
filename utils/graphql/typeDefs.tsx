import { gql } from 'apollo-server-micro';

/**
 * Build schemas for graphql.
 */
const typeDefs = gql`
  type Query {
    columns: [Column]!
    tasks: [Task]!
  }

  type Mutation {
    addColumn(user: String!, colName: String): Boolean
    deleteColumn(user: String!, colId: ID!): Boolean
    updateColumns(user: String!, cols: [updateColumnsInput!]!): Boolean
    updateColumnName(user: String!, colId: ID!, colName: String!): Boolean

    addTask(
      user: String!
      colId: ID!
      taskTitle: String
      taskBody: String
    ): Boolean
    deleteTask(
      user: String!
      colId: ID!
      taskId: ID!
    ): Boolean
    updateTaskTitle(user: String!, taskId: ID!, taskTitle: String): Boolean
    updateTaskBody(user: String!, taskId: ID!, taskBody: String): Boolean
  }

  input updateColumnsInput {
    _id: ID!
    name: String!
    taskIds: [ID]
  }

  type Column {
    _id: ID!
    name: String!
    taskIds: [ID]
  }

  type Task {
    _id: ID!
    title: String!
    body: String
  }
`;

export default typeDefs;
