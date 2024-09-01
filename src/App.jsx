
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pagees/Home";
import PrivacyPolicy from "./pagees/Privacy-Policy";
import AboutUs from "./pagees/AboutUs";
import Disclaimer from "./pagees/Disclaimer";
import Products from "./pagees/Product";
import Contact from "./pagees/Contact";

function Page() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />{" "}
          <Route path="/about" element={<AboutUs />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Page;
