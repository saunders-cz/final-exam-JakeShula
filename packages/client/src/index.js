import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { Router } from "./Router";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { CartProvider } from "./shoppingcart/CartContext";

const client = new ApolloClient({
  uri: "/graphql/",
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <CartProvider>
        <Router />
      </CartProvider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
