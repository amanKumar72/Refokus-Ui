import { motion } from "framer-motion";
import React from "react";

function Marquee({ imageUrls,direction }) {
  
  return (
    <div className="w-full flex overflow-hidden ">
      <motion.div initial={{x:direction=='left'?'0%':"-100%"}} animate={{x:direction=='left'?'-100%':"0%"}} transition={{ease:'linear',duration:20,repeat:Infinity}} div className="flex flex-shrink-0 gap-40 py-10 pr-40">
        {imageUrls.map((url, index) => (
          <img key={index} src={url} />
        ))}
      </motion.div>
      <motion.div initial={{x:direction=='left'?'0%':"-100%"}} animate={{x:direction=='left'?'-100%':"0%"}} transition={{ease:'linear',duration:20,repeat:Infinity}} div className="flex flex-shrink-0 gap-40 py-10 pr-40">
        {imageUrls.map((url, index) => (
          <img key={index} src={url} />
        ))}
      </motion.div>
    </div>
  );
}

export default Marquee;
