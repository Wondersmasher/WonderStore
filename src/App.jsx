import { Container } from "@mui/material";
import NavBar from "./components/NavBar";
import Trails from "./components/Trials";
import Hero from "./components/Hero";
import SharedLayout from "./components/SharedLayout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    // <Container maxWidth="off" disableGutters>
    // <SharedLayout />
    //  <Trails />
    // <Hero />
    // </Container>
  );
}

export default App;
