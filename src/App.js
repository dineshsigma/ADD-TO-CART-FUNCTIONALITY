import Navbar from './component.js/Navbar';
import Home from './component.js/Home.js';
import Products from './component.js/products';
import Showproducts from './component.js/showProducts';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div >
      <Navbar />


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Showproducts />} />
      </Routes>


    </div>
  );
}

export default App;
