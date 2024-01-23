import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThemeProvider, createTheme } from "@mui/material";
import store from "./store.js";
import { Provider } from "react-redux";
import { Auth0Provider } from "@auth0/auth0-react";
const theme = createTheme({
  palette: {
    primary: {
      main: "#C5A491",
    },
    secondary: {
      main: "#C5A491",
    }
  },
});
// mAwyB0CPpmtHCeKaVaWksHzIewBJDAcn;
const domain = "dev-71msv6fizwcn8c1o.us.auth0.com";
const clientId = "y3KY5NgtRRYEvWLTuziiYEOUzttppGK8";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
      // redirectUri={window.location.origin}
      // cacheLocation="localstorage"
    >
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </Provider>
    </Auth0Provider>
  </React.StrictMode>
);
