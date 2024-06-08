import React, { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion"

function Work() {
  const data = [
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef09178195ce0073e38f3_Refokus%20Tools-1.png",
      top: "50%",
      left: "50%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0accfe1b3e66bc55462_Refokus%20Tools.png",
      top: "54%",
      left: "46%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0acbc45cb2f4fc5c6b2_Yahoo.png",
      top: "46%",
      left: "54%",
      isActive: false ,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef092455ce2cf591e52d1_Rainfall.png",
      top: "56%",
      left: "50%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0ac7e7179d210dc41f0_Summon.png",
      top: "46%",
      left: "48%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0af108a465002975acd_Showcase%20Websites%20(1).png",
      top: "42%",
      left: "47%",
      isActive: false,
    },
  ];
  const [images,setImages]=useState(data);
  const {scrollY}=useScroll() 

useMotionValueEvent(scrollY, "change", (latest) => {
  let newImages;
  newImages=[...images]

  if(latest.toFixed()>=30){
    newImages[0].isActive=true
  }else{
    newImages[0].isActive=false
  }
  if(latest.toFixed()>=70){
    newImages[1].isActive=true
  }else{
    newImages[1].isActive=false
  }
  if(latest.toFixed()>=120){
    newImages[2].isActive=true
  }else{
    newImages[2].isActive=false
  }
  if(latest.toFixed()>=170){
    newImages[3].isActive=true
  }else{
    newImages[3].isActive=false
  }
  if(latest.toFixed()>=210){
    newImages[4].isActive=true
  }else{
    newImages[4].isActive=false
  }
  if(latest.toFixed()>=270){
    newImages[5].isActive=true
  }else{
    newImages[5].isActive=false
  }


  setImages(newImages)
})


  return (
    <div className="w-full ">
      <div className="relative max-w-screen-xl mx-auto text-center ">
        <h1 className="text-[30vw] leading-none tracking-tight font-mediun select-none ">
          Work
        </h1>
        <div className="images h-full w-full absolute top-0 ">
          {images.map(
            (image, ind) =>
              image.isActive && (
                <img key={ind}
                  src={image.url}
                  className=" absolute w-60 h-60 rounded-lg -translate-x-[50%] -translate-y-[50%]"
                  style={{ top: image.top, left: image.left }}
                ></img>
              )
          )}
        </div>
      </div>
    </div>
  );
}

export default Work;
