import React from 'react'
import Button from './Button'

function Strap({text,para,mover,count,video}) {
  return (
    <div onMouseEnter={() => {mover(count)}} className="w-full h-[30vh] flex items-center justify-between px-10">
      <div className="text-4xl font-medium font-[SM]">{text}</div>
      <div className="w-1/4 mr-24">
        <p className='mb-5 font-[SL] text-lg'>
          {para}
        </p>
        <Button name={"Live Website"} />
      </div>
    </div>
  );
}

export default Strap