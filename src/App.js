import Navbar from './component.js/Navbar';
import Home from './component.js/Home.js';
import Products from './component.js/products';
import Showproducts from './component.js/showProducts';
import NavbarDashboard from './dashboard/navbar';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {useState,useRef,useEffect} from 'react';


function App() {
  return (
    <div >
      <Navbar />


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Showproducts />} />
        <Route path="/dashboard/navbar" element={<NavbarDashboard />} />
      </Routes>


    </div>
  );
}

export default App;

