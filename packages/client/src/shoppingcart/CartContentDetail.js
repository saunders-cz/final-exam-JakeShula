import { ButtonGroup, Grid, IconButton, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import React from "react";
import { useCart } from "./CartContext";
import { meals } from "../mealData/meals.js";

const getFoodItem = (id) => {
  return meals.find((fi) => fi.id === id);
};

export const CartContentsDetail = () => {
  const cart = useCart();
  console.log(cart);
  const { items, updateItemQuantity, title, price } = cart;
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
                {title} x {item.qty} @ ${price}
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
