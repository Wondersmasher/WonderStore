import SharedLayout from "./components/SharedLayout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import Shop from "./pages/Shop";
import SingleProductPage from "./pages/SingleProductPage";
import CartPage from "./pages/CartPage";
import FavouritePage from "./pages/FavouritePage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:productId" element={<SingleProductPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/favourite" element={<FavouritePage />} />
        </Route>
        <Route path="*" element={<div>Error... Something went wrong</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
