import React from "react";
import Navbar from "./components/Navbar";
import Work from "./components/Work";
import Stripes from "./components/Stripes";
import Straps from "./components/Straps";
import Marquees from "./components/Marquees";
import Boxes from "./components/Boxes";
import LocomotiveScroll from "locomotive-scroll";



function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className="bg-[#161618] text-white w-full">
      <Navbar />
      <Work />
      <Stripes />
      <Straps/>
      <Marquees/>
      <Boxes/>
    </div>
  );
}

export default App;
