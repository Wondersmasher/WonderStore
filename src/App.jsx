import SharedLayout from "./components/SharedLayout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  HomePage,
  AboutUsPage,
  Shop,
  SingleProductPage,
  CartPage,
  Error,
} from "./pages";
import CheckOut from "./components/CartComponents/CheckOut";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path='/about-us' element={<AboutUsPage />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/shop/:productId' element={<SingleProductPage />} />
          <Route path='/cart' element={<CartPage />} />
          <Route path='/checkout' element={<CheckOut />} />
        </Route>
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
