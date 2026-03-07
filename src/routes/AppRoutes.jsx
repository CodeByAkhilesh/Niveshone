import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Products from "../pages/Products";
import Contact from "../pages/contact/Contact";
import Calculator from "../pages/Calculator";
import AboutUs from "../pages/AboutUs";
import NotFound from "../pages/NotFound";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/products" element={<Products />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/calculator" element={<Calculator />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
