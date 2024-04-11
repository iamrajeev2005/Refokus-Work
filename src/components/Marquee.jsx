import React from "react";
import { motion } from "framer-motion";

function Marquee({ url,direction }) {
  return (
    <div className="w-full flex overflow-hidden items-center gap-16">
      <motion.div
        initial={{ x:direction === "left" ? "0": "-100%" }}
        animate={{ x: direction === "left" ? "-100%" : "0" }}
        transition={{ ease: "linear", duration: 16, repeat: Infinity }}
        className="flex flex-shrink-0 items-center gap-10"
      >
        {url.map((item, index) => {
          return <img key={index} src={item} alt="" />;
        })}
      </motion.div>
      <motion.div
        initial={{ x:direction === "left" ? "0": "-100%" }}
        animate={{ x: direction === "left" ? "-100%" : "0" }}
        transition={{ ease: "linear", duration: 16, repeat: Infinity }}
        className="flex flex-shrink-0 items-center gap-10"
      >
        {url.map((item, index) => {
          return <img key={index} src={item} alt="" />;
        })}
      </motion.div>
    </div>
  );
}

export default Marquee;
