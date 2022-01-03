import React from "react";

import { Route, Routes } from "react-router-dom";
import { Header } from "./components";
import { Cart, Home } from "./pages";

export default function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </div>
  );
}
