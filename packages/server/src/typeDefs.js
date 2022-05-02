import { gql } from "apollo-server";

export const typeDefs = gql`
  type Meal {
    id: ID!
    title: String!
    imgsrc: String
    description: String!
    price: Float!
    categoryId: ID!
    category: Category
  }

  input MealInput {
    title: String!
    imgsrc: String
    description: String!
    price: Float!
    categoryId: ID!
  }

  type Category {
    id: ID!
    title: String!
    meals: [Meal]
  }

  type Result {
    ok: Boolean!
    errors: [Error]
  }

  type Error {
    message: String!
  }

  type BaseResponse {
    success: String
    errors: [Error]
  }

  type Mutation {
    addMeal(input: MealInput!): Result
    addUser(input: CreateUserInput!): BaseResponse
    updateMeal(id: ID!, input: MealInput!): Result
    deleteMeal(id: ID!): Result
  }

  type User {
    id: ID!
    name: String!
    email: String!
    address: String!
    city: String!
    state: String!
    zip: String!
  }

  input CreateUserInput {
    name: String!
    email: String!
    address: String!
    city: String!
    state: String!
    zip: String!
  }

  type Query {
    meals: [Meal]
    meal(id: ID!): Meal
    categories: [Category]
    user(id: ID!): User
  }
`;
