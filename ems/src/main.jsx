import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { AuthProvider } from "./context/AuthProvider";
import { setLocalStorage } from "./utils/LocalStorage"; // Import this

// Set local storage if not already set
if (!localStorage.getItem("employees")) {
  setLocalStorage();
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </StrictMode>
);
