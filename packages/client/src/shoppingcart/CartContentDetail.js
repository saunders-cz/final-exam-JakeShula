import { ButtonGroup, Grid, IconButton, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import React from "react";
import { meals } from "../mealData/meals.js";
import { useCart } from "./CartContext";

const getFoodItem = (id) => {
  return meals.find((fi) => fi.id === id);
};

export const CartContentsDetail = () => {
  const cart = useCart();
  const { items, updateItemQuantity } = cart;
  return (
    <Grid container style={{ maxWidth: 400 }} direction="column">
      {items.map((item, i) => {
        const meals = getFoodItem(item.id);
        return (
          <Grid
            item
            container
            key={i}
            justifyContent="space-between"
            alignItems="center"
          >
            <Grid item>
              <Typography variant="body1" gutterBottom>
                {meals.title} x {item.qty} @ ${meals.price}
              </Typography>
            </Grid>
            <Grid item>
              <ButtonGroup>
                <IconButton
                  onClick={() => updateItemQuantity(item.id, item.qty + 1)}
                >
                  <AddIcon>add</AddIcon>
                </IconButton>
                <IconButton
                  onClick={() => updateItemQuantity(item.id, item.qty - 1)}
                >
                  <RemoveIcon>remove</RemoveIcon>
                </IconButton>
                <IconButton
                  onClick={() => updateItemQuantity(item.id, (item.qty = 0))}
                >
                  <DeleteForeverIcon>delete</DeleteForeverIcon>
                </IconButton>
              </ButtonGroup>
            </Grid>
          </Grid>
        );
      })}
    </Grid>
  );
};
