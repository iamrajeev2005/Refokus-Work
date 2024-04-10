import React from "react";

function Work() {
  var images = [
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef09178195ce0073e38f3_Refokus%20Tools-1.png",
      top: "40%",
      left: "40%",
      isActive: true,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0accfe1b3e66bc55462_Refokus%20Tools.png",
      isActive: false,
      top: "45%",
      left: "35%",
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0acbc45cb2f4fc5c6b2_Yahoo.png",
      isActive: false,
      top: "35%",
      left: "42%",
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef092455ce2cf591e52d1_Rainfall.png",
      isActive: false,
      top: "40%",
      left: "40%",
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0ac7e7179d210dc41f0_Summon.png",
      isActive: false,
      top: "35%",
      left: "45%",
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0af108a465002975acd_Showcase%20Websites%20(1).png",
      isActive: false,
      top: "40%",
      left: "35%",
    },
  ];
  return (
    <div className="min-h-screen container mx-auto flex items-center flex-col justify-center">
      {images.map(
        (item, index) =>
          item.isActive && (
            <div
              style={{ top: item.top,left:item.left }}
              key={index}
              className={`absolute w-[20vw] rounded-xl overflow-hidden`}
            >
              <img src={item.url} alt="" />
            </div>
          )
      )}
      <h1 className="text-[40vw] font-[SM] leading-[80vh] -mt-28">work</h1>
      <p className="font-[SM] font-normal text-xl text-[#8B8B8B]">
        Web Design, Webflow Development, Creative Development
      </p>
    </div>
  );
}

export default Work;
