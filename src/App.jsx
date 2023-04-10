
import "./App.css";
import Cart from "./components/Cart";
import Header from "./components/Header";
import Product from "./components/Product";
import About from "./components/home/About";
import Home from "./components/home/Home";
import { Routes, Route } from "react-router-dom";



function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
