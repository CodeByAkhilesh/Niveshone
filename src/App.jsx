import React from "react";
import AppRoutes from "./routes/AppRoutes";
import WhatsappIcon from "./components/ui/WhatsappIcon";

function App() {
  return (
    <div className="main-scroll bg-black min-h-screen ">
      <AppRoutes />
      <WhatsappIcon/>
    </div>
  );
}

export default App;
