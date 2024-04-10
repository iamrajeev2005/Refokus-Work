import React from "react";
import Navbar from "./components/Navbar";
import Work from "./components/Work";
import Stripes from "./components/Stripes";
import Straps from "./components/Straps";
import Marquees from "./components/Marquees";

function App() {
  return (
    <div className="bg-[#161618] text-white w-full">
      <Navbar />
      <Work />
      <Stripes />
      <Straps/>
      <Marquees/>
    </div>
  );
}

export default App;
