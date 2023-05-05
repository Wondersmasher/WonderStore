import SharedLayout from "./components/SharedLayout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import Shop from "./pages/Shop";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/shop" element={<Shop />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
