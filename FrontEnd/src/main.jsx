import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import HomePage from "./pages/homePage";
import ShopPage from "./pages/shopPage";
import CustomizePage from "./pages/customizePage";
import ContactPage from "./pages/contactPage";
import AboutShoe from "./pages/aboutShoe";
import AboutusPage from "./pages/aboutusPage";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/customize" element={<CustomizePage />} />
        <Route path="/about" element={<AboutusPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/aboutshoe" element={<AboutShoe />} />
      </Routes>
    </Router>
  </StrictMode>
);
