import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BookmarkContextProvider } from "./store/bookmark-context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BookmarkContextProvider>
      <App />
    </BookmarkContextProvider>
  </React.StrictMode>
);
