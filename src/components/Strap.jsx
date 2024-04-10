import React from 'react'
import Button from './Button'

function Strap({text,para}) {
  return (
    <div className="w-full h-[35vh]  bg-[#0A0363]  flex items-center justify-between px-10">
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