import SharedLayout from "./components/SharedLayout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import Shop from "./pages/Shop";
import SingleProductPage from "./pages/SingleProductPage";
import CartPage from "./pages/CartPage";
// import { Suspense, lazy } from "react";
// const SingleProductPage = lazy(() => import("./pages/SingleProductPage"));
// const Shop = lazy(() => import("./pages/shop"));
import { ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#C5A491",
    },
  },
  typography: {
    fontFamily: "Dancing",
  },
});
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route
            path="/shop"
            element={
              // <Suspense fallback={<div>Loading...</div>}>
              <Shop />
              // </Suspense>
            }
          />
          <Route
            path="/shop/:productId"
            element={
              // <Suspense fallback={<div>Loading</div>}>
              <SingleProductPage />
              // </Suspense>
            }
          />
          <Route path="/cart" element={<CartPage />} />
        </Route>
        <Route path="*" element={<div>Error... Something went wrong</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
