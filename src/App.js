import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Wear } from "./pages/Wear";
import { Skateboard } from "./pages/Skateboard";
import { Shoes } from "./pages/Shoes";
import { Layout } from "./components/Layout";
import { Carousel } from "./pages/Carousel";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Carousel />} />
          <Route path="/wear" exact element={<Wear />} />
          <Route path="/shoes" exact element={<Shoes />} />
          <Route path="/skateboard" exact element={<Skateboard />} />
        </Route>
      </Routes>
    </>
  );
}
export default App;
