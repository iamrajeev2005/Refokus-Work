import React from 'react'

function stripe({logo,num}) {
  return (
    <>
      <div className="flex items-center gap-16 border border-zinc-400 px-10 py-6">
        <div className="logo w-[11vw]">
          <img
            src={logo}
            alt='logo'
          />
        </div>
        <div className='font-medium'>{num}</div>
      </div>
    </>
  );
}

export default stripe