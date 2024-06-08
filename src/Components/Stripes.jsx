import React from "react";
import Stripe from "./Stripe";
import { motion } from "framer-motion";

function Stripes() {
  const data = [
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd7cf6b3689fb_css-design-awards-logos-id1L9L8Yvp%201.svg",
      number: 23,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd75d563689fd_Awwards-logotype-2018%201.svg",
      number: 34,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63d6e83420934a94d642103b_NCC2021_LogoLockup%201.svg",
      number: 9,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd7cf6b3689fb_css-design-awards-logos-id1L9L8Yvp%201.svg",
      number: 23,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd75d563689fd_Awwards-logotype-2018%201.svg",
      number: 34,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63d6e83420934a94d642103b_NCC2021_LogoLockup%201.svg",
      number: 9,
    },
  ];

  return (
    <>
      <motion.div className="flex my-40 items-center relative w-full flex-shrink-0 overflow-hidden">
        <motion.div
          initial={{ x: "0%" }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", duration: 5, repeat: Infinity }}
          className="flex flex-shrink-0 "
        >
          {data.map((val, index) => (
            <Stripe key={index} stripe={val} />
          ))}
        </motion.div>
        <motion.div
          initial={{ x: "0%" }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", duration: 5, repeat: Infinity }}
          className="flex flex-shrink-0 "
        >
          {data.map((val, index) => (
            <Stripe key={index} stripe={val} />
          ))}
        </motion.div>
      </motion.div>
      {/* <motion.div className='flex my-10 items-center  w-full flex-nowrap'>
      {data.map(((val,index)=><Stripe key={index} stripe={val}/>))}
    </motion.div> */}
    </>
  );
}

export default Stripes;
