import { useQuery } from "@apollo/client";
import { Typography, Grid } from "@mui/material";
import React from "react";
import { MealList } from "./MealList";
import { GET_MEAL_CATEGORIES } from "./queries";

export const CategoryList = () => {
  const { data, error, loading } = useQuery(GET_MEAL_CATEGORIES);

  if (error) return <Typography>{error.message}</Typography>;

  if (loading) return <Typography>Loading...</Typography>;

  console.log(data);

  const { categories } = data;
  return (
    <Grid container spacing={2}>
      {categories.map((category, i) => (
        <Grid container item xs={12} key={i}>
          <Grid item xs={12}>
            <Typography variant="h4">{category.title}</Typography>
          </Grid>
          <Grid item xs={12}>
            <MealList meals={category.meals} />
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
};
