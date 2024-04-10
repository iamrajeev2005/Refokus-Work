import React, { useEffect, useState } from "react";
import Stripe from "./stripe";

function Stripes() {
  const [logos, setLogos] = useState([]);
  const data = [
    {
      id: 1,
      logo: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd7cf6b3689fb_css-design-awards-logos-id1L9L8Yvp%201.svg",
      number: "52",
    },
    {
      id: 2,
      logo: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63d6e83420934a94d642103b_NCC2021_LogoLockup%201.svg",
      number: "2",
    },
    {
      id: 3,
      logo: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd75d563689fd_Awwards-logotype-2018%201.svg",
      number: "15",
    },
    {
      id: 4,
      logo: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd7cf6b3689fb_css-design-awards-logos-id1L9L8Yvp%201.svg",
      number: "52",
    },
    {
      id: 5,
      logo: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd75d563689fd_Awwards-logotype-2018%201.svg",
      number: "2",
    },
    {
      id: 6,
      logo: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63d6e83420934a94d642103b_NCC2021_LogoLockup%201.svg",
      number: "2",
    },
  ];
  useEffect(() => {
    setLogos(data);
  }, []);
  return (
    <div className="w-full flex overflow-hidden">
      {logos.map((item) => {
        return <Stripe key={item.id} logo={item.logo} num={item.number} />;
      })}
    </div>
  );
}

export default Stripes;
