import { gql } from "@apollo/client";

export const GET_MEAL_CATEGORIES = gql`
  query GET_MEAL_CATEGORIES {
    categories {
      id
      title
      meals {
        id
        title
        imgsrc
        description
        price
      }
    }
  }
`;

export const GET_FOOD_ITEM = gql`
  query GET_FOOD_ITEM($id: ID!) {
    foodItem(id: $id) {
      id
      title
      price
    }
  }
`;
