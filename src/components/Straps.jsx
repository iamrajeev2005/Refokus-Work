import React, { useEffect, useState } from "react";
import Strap from "./Strap";
import { motion } from "framer-motion";

function Straps() {
  const [strapData, setStrapData] = useState([]);

  const data = [
    {
      id: 1,
      text: "Arqitel",
      para: "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
      url: "https://cdn.refokus.com/website/Arqitel/Arqitel%20project%20video%204_3.webm",
    },
    {
      id: 2,
      text: "Cula",
      para: "We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates.",
      url: "https://cdn.refokus.com/website/Cula_promo_new_4_3.mp4",
    },
    {
      id: 3,
      text: "Layout Land",
      para: "An interactive learning game that can educate and entertain you on the basics of web layouts in Webflow.",
      url: "https://cdn.refokus.com/refokus-promo/webflow-education-promo.mp4",
    },
    {
      id: 4,
      text: "TTR",
      para: "We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.",
      url: "https://cdn.refokus.com/website/TTR/TTR%20project%20video%204_3_H.264.webm",
    },
    {
      id: 5,
      text: "Maniv",
      para: "A global early-stage venture fund partnering with founders to advance cleaner, safer, and more sustainable movement of people and goods.",
      url: "https://cdn.refokus.com/website/Maniv-Compressed.mp4",
    },
  ];
  useEffect(() => {
    setStrapData(data);
  }, []);

  const [pos, setPos] = useState(0);
  const mover = (val) => {
    setPos(val * 30);
  };
  return (
    <div className="mt-24 relative">
      {strapData.map((item, index) => {
        return (
          <Strap
            mover={mover}
            key={item.id}
            text={item.text}
            para={item.para}
            count={index}
          />
        );
      })}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <motion.div
          initial={{ y: pos, x: "-50%" }}
          animate={{ y: pos + "vh" }}
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }}
          className="window absolute h-[30vh] w-[20vw] left-[40%] overflow-hidden rounded-xl "
        >
          <motion.div
            animate={{ y: -pos + "vh" }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="h-full w-full"
          >
            <div className="w-full h-full">
              <video
                className="bg-cover"
                autoPlay
                muted
                loop
                src={data[0].url}
              ></video>
            </div>
          </motion.div>
          <motion.div
            animate={{ y: -pos + "vh" }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className=" h-full w-full"
          >
            <div className="w-full h-full">
              <video
                className="bg-cover"
                autoPlay
                muted
                loop
                src={data[1].url}
              ></video>
            </div>
          </motion.div>
          <motion.div
            animate={{ y: -pos + "vh" }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className=" h-full w-full"
          >
            <div className="w-full h-full">
              <video
                className="bg-cover"
                autoPlay
                muted
                loop
                src={data[2].url}
              ></video>
            </div>
          </motion.div>
          <motion.div
            animate={{ y: -pos + "vh" }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className=" h-full w-full"
          >
            <div className="w-full h-full">
              <video
                className="bg-cover"
                autoPlay
                muted
                loop
                src={data[3].url}
              ></video>
            </div>
          </motion.div>
          <motion.div
            animate={{ y: -pos + "vh" }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className=" h-full w-full"
          >
            <div className="w-full h-full">
              <video
                className="bg-cover"
                autoPlay
                muted
                loop
                src={data[4].url}
              ></video>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Straps;
