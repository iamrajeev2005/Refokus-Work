import React from "react";
import Box from "./Box";

function Boxes() {
  const data = [
    {
      top: "Up Next: News",
      text: "Insights and behind the scenes",
      btm: "Explore what drives our team.",
    },
    {
      top: "Get In Touch",
      text: "Let's get to it, together.",
      head:"Start a Project"
    },
  ];
  return (
    <div className="h-[70vh] w-full px-6 flex items-start gap-1">
      {data.map((item,index) => {
        return <Box key={index} top={item.top} text={item.text} btm={item.btm} head={item.head} />;
      })}
    </div>
  );
}

export default Boxes;
