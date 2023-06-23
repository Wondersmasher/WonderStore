import SharedLayout from "./components/SharedLayout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import Shop from "./pages/Shop";
import SingleProductPage from "./pages/SingleProductPage";
import CartPage from "./pages/CartPage";
import { useAuth0 } from "@auth0/auth0-react";
import CheckOut from "./components/CartComponents/CheckOut";
import Error from "./pages/Error";
function App() {
  const { user, isAuthenticated, isLoading, error } = useAuth0();
  console.log(`user ${user}`);
  console.log(`isAuthenticated ${isAuthenticated}`);
  console.log(`isLoading ${isLoading}`);
  console.log(`Error ${error}`);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:productId" element={<SingleProductPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckOut />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
