import React, { useState } from "react";
import Product from "./Product";
import { motion } from "framer-motion";

function Products() {
  const products = [
    {
      title: "Arqitel",
      description:
        "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
      live: true,
      case: false,
    },
    {
      title: "Cula",
      description:
        "We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates.",
      live: true,
      case: false,
    },
    {
      title: "Layout Land",
      description:
        "An interactive learning game that can educate and entertain you on the basics of web layouts in Webflow.",
      live: true,
      case: false,
    },
    {
      title: "TTR",
      description:
        "We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.",
      live: true,
      case: false,
    },
    {
      title: "Maniv",
      description:
        "A global early-stage venture fund partnering with founders to advance cleaner, safer, and more sustainable movement of people and goods.",
      live: true,
      case: true,
    },
  ];

  const videos= ['src\assets\Arqitel project video 4_3.webm','src\assets\Cula_promo_new_4_3.mp4','src\assets\webflow-education-promo.mp4','src\assets\TTR project video 4_3_H.264.webm','src\assets\Maniv-Compressed.mp4']

  const [pos, setPos] = useState(0);
  const [videoIndex,setVideoIndex] =useState(0)
  const move=(val)=>{
    console.log(videos[val])
    setVideoIndex(val)
    setPos(18*val)
  }

  return (
    <div className="mt-36 relative">
      {products.map((product, index) => (
        <Product key={index} product={product} index={index} move={move}/>
      ))}
      <div className="absolute h-full -top-5 w-full pointer-events-none  ">
        <motion.div 
          initial={{ y: pos, x: "-50%" }}
          animate={{y:pos+'rem'}}
          transition={{ease:[0.76,0,0.24,1],duration:0.5}}
          className={`window absolute h-[19.5rem] w-[26rem] bg-sky-200 left-[45%] rounded-lg overflow-hidden`}
        >
        <video src='src\assets\Arqitel project video 4_3.webm' autoPlay muted loop className="fit-contain bg-zinc-300 w-full h-full absolute"></video>
        </motion.div>
        
      </div>
    </div>
  );
}

export default Products;
