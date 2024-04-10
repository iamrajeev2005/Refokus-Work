import React, { useEffect, useState } from "react";
import Strap from "./Strap";

function Straps() {
const [strapData, setStrapData] = useState([])

const data = [
  {
    id: 1,
    text: "Arqitel",
    para: "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
  },
  {
    id: 2,
    text: "Cula",
    para: "We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates.",
  },
  {
    id: 3,
    text: "Layout Land",
    para: "An interactive learning game that can educate and entertain you on the basics of web layouts in Webflow.",
  },
  {
    id: 4,
    text: "TTR",
    para: "We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.",
  },
  {
    id: 5,
    text: "Maniv",
    para: "A global early-stage venture fund partnering with founders to advance cleaner, safer, and more sustainable movement of people and goods.",
  },
];

useEffect(() => {
    setStrapData(data);
  }, []);



  return (
    <div className="mt-24">
      {strapData.map((item) => {
        return <Strap key={item.id} text={item.text}  para={item.para}/>;
      })}
    </div>
  );
}

export default Straps;
