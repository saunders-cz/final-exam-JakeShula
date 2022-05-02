import { gql } from "@apollo/client";

export const ADD_USER = gql`
  mutation ADD_USER($input: CreateUserInput!) {
    response: addUser(input: $input) {
      success
      errors {
        message
      }
    }
  }
`;
