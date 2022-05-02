import { gql } from "@apollo/client";

export const ADD_USER = gql`
  mutation ADD_USER($input: CreateUserInput!) {
    addUser(input: $input) {
      success
      errors {
        message
      }
    }
  }
`;

export const UPDATE_USER = gql`
  mutation UPDATE_USER($id: ID!, $input: BookInput!) {
    updateBook(id: $id, input: $input) {
      ok
      errors {
        message
      }
    }
  }
`;
