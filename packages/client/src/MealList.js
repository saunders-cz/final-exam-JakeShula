import React from "react";
import {
  Grid,
  Card,
  Typography,
  CardContent,
  CardMedia,
  Divider,
  Button,
} from "@mui/material";

export const MealList = ({ meals }) => {
  return (
    <Grid container spacing={4}>
      {meals.map((meal, i) => (
        <Grid item xs={4} key={i}>
          <Card>
            <CardMedia
              height={192}
              component="img"
              src={meal.imgsrc}
              alt={meal.title}
            />
            <CardContent>
              <Divider dark>
                <Typography variant="h5">{meal.title}</Typography>
              </Divider>
              <Typography> {meal.description}</Typography>
              <Typography> ${meal.price}</Typography>
              <Button>ADD TO ORDER</Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};
