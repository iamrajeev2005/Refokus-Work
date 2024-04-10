import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";
import Button from './Button';


function Box({top,text,btm,head}) {
  return (
    <div
      className={`bg-zinc-800 w-fit rounded-2xl py-2 font-[SM] px-4 transition-all duration-500 ${
        head ? "hover:bg-[#7443FF]" : "hover:bg-zinc-600"
      }`}
    >
      <div className="flex items-center justify-between py-3">
        <h4 className="text-md">{top}</h4>
        <FaLongArrowAltRight />
      </div>
      <h3 className="text-2xl w-2/3">{text}</h3>
      <h1 className="text-[7vw] mt-20 pr-52">{head}</h1>
      {head && (
        <div className="mb-1">
          <Button name={"Contact us"} />
        </div>
      )}
      {btm && <h5 className="mt-52 text-zinc-400">{btm}</h5>}
    </div>
  );
}

export default Box