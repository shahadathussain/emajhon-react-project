import { Route, Routes } from "react-router-dom";
import About from "./components/About/About";
import Header from "./components/Header/Header";
import Inventory from "./components/Inventory/Inventory";
import Order from "./components/Order/Order";
import Shop from "./components/Shop/Shop";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/order" element={<Order />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
