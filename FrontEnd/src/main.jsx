import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Header from "./components/header";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div>
        <Header/>
      
    </div>
  </StrictMode>
);
