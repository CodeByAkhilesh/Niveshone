import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/pages/HeroSection";
import OurPartnerAMCs from "./components/pages/OurPartnerAMCs";
import Services from "./components/pages/Services";
import GoalsSection from "./components/pages/GoalsSection";
import FaqSection from "./components/FaqSection";
import AppPreviwe from "./components/pages/AppPreview";
import Footer from "./components/Footer";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <div className="main-scroll bg-black min-h-screen ">
      <Navbar />
      <HeroSection />
      <OurPartnerAMCs />
      <Services />
      <GoalsSection />
      <AppPreviwe />
      <FaqSection />
      <Footer />
    </div>
  );
}

export default App;
