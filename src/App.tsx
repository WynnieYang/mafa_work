import React, {useState, useEffect} from 'react';
import { Route, Routes, Navigate } from "react-router-dom";
import Home from './pages/Home';
import Portrait from './pages/Portrait';
import Beauty from './pages/Beauty';
import Music from './pages/Music';
import Creative from './pages/Creative';
import Hair from './pages/Hair';
import Family from './pages/Family';
import Kol from './pages/Kol';
import Product from './pages/Product';
import Food from './pages/Food/intex';
import Accessories from './pages/Accessories';
import Cosmetics from './pages/Cosmetics';
import Wedding from './pages/Wedding';
import Activity from './pages/Activity';


export function App() {
  return (
    <Routes>
      <Route path="/Home" element={<Home />} />
      <Route path="/Portrait" element={<Portrait />} />
      {/* <Route path="/Beauty" element={<Beauty />} /> */}
      {/* <Route path="/Music" element={<Music />} /> */}
      <Route path="/Creative" element={<Creative />} />
      <Route path="/Hair" element={<Hair />} />
      {/* <Route path="/Family" element={<Family />} /> */}
      {/* <Route path="/Kol" element={<Kol />} /> */}
      <Route path="/Product" element={<Product />} />
      <Route path="/Food" element={<Food />} />
      <Route path="/Accessories" element={<Accessories />} />
      <Route path="/Cosmetics" element={<Cosmetics />} />
      <Route path="/Wedding" element={<Wedding />} />
      <Route path="/Activity" element={<Activity />} />

      <Route path="*" element={<Navigate to="/Accessories" />} />
    </Routes>
    // <div>1.0.1.19</div>
  );
}

export default App;
