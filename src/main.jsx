import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThemeProvider, createTheme } from "@mui/material";
import store from "./store.js";
import { Provider } from "react-redux";
const theme = createTheme({
  palette: {
    primary: {
      main: "#C5A491",
    },
  },
  // typography: {
  //   fontFamily: "Dancing",
  // },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
