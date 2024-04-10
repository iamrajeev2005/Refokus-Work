import React from 'react'

function Marquee({url}) {
  return (
    <div className='flex items-center gap-10'>
      {url.map((item, index) => {
        return <img key={index} src={item} alt="" />;
      })}
    </div>
  );
}

export default Marquee