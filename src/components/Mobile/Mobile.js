import React from "react";
import AppMobile from "./AppMobile";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Product from "../Product/Product";
import Products from "../Products/Products";
import MobileNav from "../Header/MobileNav";
function Mobile() {
  return (
    <div>
      <MobileNav />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppMobile />} />
          <Route path="/product/:id" element={<Products />} />
          <Route path="/products/:id" element={<Product />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Mobile;
