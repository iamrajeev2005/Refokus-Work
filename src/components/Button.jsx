import { BsArrowReturnRight } from "react-icons/bs";
import React from "react";

function Button({name}) {
  return (
    <div>
      <button className="bg-[#F1ECFF] text-black font-regular text-sm py-2 px-5 rounded-full flex items-center gap-4">
        {name}
        <div>
          <BsArrowReturnRight />
        </div>
      </button>
    </div>
  );
}

export default Button;
