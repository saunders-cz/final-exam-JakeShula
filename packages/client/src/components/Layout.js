import React from "react";
import { Outlet } from "react-router-dom";
import { Navigation } from "./Navigation";
import { Grid } from "@mui/material";
import { CartStatus } from "../shoppingcart/CartStatus.js";

export const Layout = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Navigation />
      </Grid>
      <Grid item>
        <CartStatus />
      </Grid>
      <Grid item xs={12}>
        <Outlet />
      </Grid>
    </Grid>
  );
};
