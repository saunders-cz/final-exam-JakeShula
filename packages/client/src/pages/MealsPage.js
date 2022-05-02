import { useQuery } from "@apollo/client";
import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import React from "react";
import { GET_MEALS } from "../meal/queries";

export const MealsPage = () => {
  const { data, loading, error } = useQuery(GET_MEALS);

  if (loading) return <p>Loading...</p>;

  const { meals } = data;

  return (
    <Grid container spacing={2}>
      {meals.map((meal, i) => (
        <Grid item key={i} xs={6}>
          <Card>
            <CardMedia
              component="img"
              height="150"
              image={meal.imgsrc}
              alt={meal.title}
            />
            <CardContent>
              <Typography variant="h4">{meal.title}</Typography>
              <Typography>{meal.description}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};
