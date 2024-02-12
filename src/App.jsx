import React from "react";
import Navbar from "./components/Navbar";
import Work from "./components/Work";
import Stripe from "./components/stripe";

function App() {
  return (
    <div className="bg-[#161618] text-white w-full">
      <Navbar />
      <Work />
      <Stripe />
    </div>
  );
}

export default App;
