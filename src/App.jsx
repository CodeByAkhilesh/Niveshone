import React from "react";
import AppRoutes from "./routes/AppRoutes";
import HomePage from "./components/pages/HomePage";

function App() {
  return (
    <div className="main-scroll bg-black min-h-screen ">
     {/* <HomePage/> */}
     <AppRoutes/>
    </div>
  );
}

export default App;
