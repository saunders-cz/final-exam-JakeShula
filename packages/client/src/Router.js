import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { HomePage } from "./pages/HomePage.js";

import { MenuPage } from "./pages/MenuPage.js";
import { RegistrationPage } from "./pages/RegistrationPage.js";
import { ManageMenuPage } from "./pages/ManageMenuPage.js";
import { ShoppingCartPage } from "./pages/ShoppingCartPage.js";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="meals/:id" element={<ManageMenuPage />} />
          <Route path="Menu" element={<MenuPage />} />
          <Route path="ManageMenu" element={<ManageMenuPage />} />
          <Route path="Registration" element={<RegistrationPage />} />
          <Route path="cart" element={<ShoppingCartPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
