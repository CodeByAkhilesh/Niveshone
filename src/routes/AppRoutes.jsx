import { Routes, Route } from "react-router-dom";
import HeroSection from "../components/pages/HeroSection";
import AboutUs from "../components/pages/AboutUs";
import Contact from "../components/pages/Contact";
import Calculator from "../components/pages/Calculator";
import HomePage from "../components/pages/HomePage";



const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/calculator" element={<Calculator />} />
    </Routes>
  );
};

export default AppRoutes;
