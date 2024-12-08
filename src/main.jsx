import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./components/App";
import "modern-normalize";

// 1. Імпортуємо провайдер
import { Provider } from "react-redux";
import { store } from "./redux/store"; // 2. Імпортуємо створений стор

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
