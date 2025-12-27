import { Routes, Route } from "react-router-dom";
import HeroSection from "../components/pages/HeroSection";
import AboutUs from "../components/pages/AboutUs";
import Contact from "../components/pages/Contact";
import Calculator from "../components/pages/Calculator";



const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HeroSection />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/calculator" element={<Calculator />} />
    </Routes>
  );
};

export default AppRoutes;
