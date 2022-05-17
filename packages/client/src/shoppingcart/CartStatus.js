import { Badge, Button, Tooltip } from "@mui/material";
import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useNavigate } from "react-router-dom";
import { useCart } from "./CartContext";


export const CartStatus = () => {
  const { hasItems, itemCount } = useCart();
  const navigate = useNavigate();
  const handleClick = () => navigate("/cart");

  return (
    <Tooltip
      title={
        hasItems ? `Click to see contents` : "You have no items in your cart"
      }
    >
      <Button onClick={handleClick}>
        <Badge badgeContent={itemCount} color="primary">
          <ShoppingCartIcon>shopping_cart</ShoppingCartIcon>
        </Badge>
      </Button>
    </Tooltip>
  );
};
