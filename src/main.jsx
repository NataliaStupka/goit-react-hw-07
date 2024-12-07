import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./components/App";
import "modern-normalize";

// 1. Імпортуємо провайдер
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store"; // 2. Імпортуємо створений стор
import { PersistGate } from "redux-persist/integration/react"; //збереження LocalStorage
//PersistGate - забезпечити відновлення стану додатку перед його рендерингом.

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </StrictMode>
);
