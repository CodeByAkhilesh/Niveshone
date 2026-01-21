import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage"
import Products from "../pages/Products"
import Contact from "../pages/Contact"
import Calculator from "../pages/Calculator"

import AboutUs from "../pages/AboutUs"


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/products" element={<Products/>}/>
      <Route path="/contact" element={<Contact />} />
      <Route path="/calculator" element={<Calculator />} />
    </Routes>
  );
};

export default AppRoutes;
