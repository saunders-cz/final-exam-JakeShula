import { Grid, Typography } from "@mui/material";
import React from "react";
import { CartContentsDetail } from "../shoppingcart/CartContentDetail";
import { useCart } from "../shoppingcart/CartContext";

export const ShoppingCartPage = () => {
  const { hasItems } = useCart();
  console.log(hasItems);
  return (
    <Grid container direction="column" spacing={2}>
      <Grid item>
        <Typography variant="h2" element="h1">
          Shopping Cart
        </Typography>
        {hasItems === false && (
          <Typography>
            There aren't any items in your cart at this time. Check out our{" "}
            <a href="/menu">menu</a>.
          </Typography>
        )}
      </Grid>
      <Grid item>
        <CartContentsDetail />
      </Grid>
    </Grid>
  );
};
