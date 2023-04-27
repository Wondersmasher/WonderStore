import { Container } from "@mui/material";
import NavBar from "./components/NavBar";
import Trails from "./components/Trials";
import Carousel from "./components/Carousel";
function App() {
  return (
    <Container maxWidth="off">
      <NavBar />
      <Trails />
      <Carousel />
    </Container>
  );
}

export default App;
