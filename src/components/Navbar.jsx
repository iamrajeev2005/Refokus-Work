import React from "react";
import Button from "./Button";

function Navbar() {
  return (
    <div className="container sticky bg-[#161618]  top-0 mx-auto flex items-center justify-between py-5 border-b-[.5px] border-zinc-700 font-[SL]">
      <div className="flex items-center gap-20">
        <div className="w-20">
          <img
            src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg"
            alt=""
          />
        </div>
        <div className="flex items-center gap-16 text-sm ">
          {["Home", "Work", "Careers", "News"].map((item, index) => {
            return (
              <div key={index} className="flex items-center">
                {index === 1 && (
                  <span className="inline-block h-[.35vw] w-[.35vw] mr-1 bg-[#00FF19] rounded-full shadow-[0_0_0.25em_#00FF19]"></span>
                )}
                <a
                  className={`${
                    index === 3 && "border-l-[1px] border-zinc-600 pl-10"
                  }`}
                  href=""
                >
                  {item}
                </a>
              </div>
            );
          })}
        </div>
      </div>
      <Button name={"Start a Project"}/>
    </div>
  );
}

export default Navbar;
