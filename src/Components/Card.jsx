import { motion } from "framer-motion";
import React from "react";
import { BsArrowRight } from "react-icons/bs";

function Card({ width, project, hover='none' }) {
  console.log(width)
  return (
    <motion.div whileHover={{backgroundColor:hover?"#7443ff":'rgb(39, 39, 42)',}}
      className={` h-[60vh] w-[${width}]  bg-zinc-700 rounded-xl p-8 flex flex-col justify-between hover:${hover}`}
    >
      <motion.div whileHover={{x:"6px",}} className="w-full ">
        <div className="w-full flex justify-between items-center">
          <h3>{project?"Get in touch":'Up Next : News'}</h3>
          <BsArrowRight />
        </div>
        <h1 className="text-3xl font-semibold mt-5">{project?"Let's go to it togrther":'Insights and behid the scenes'}</h1>
      </motion.div>
      <div className="second">
        {project ? (
          <>
            <h1 className="text-7xl font-semibold tracking-tight leading-none mb-10 mr-20 ">
              Start a Project
            </h1>
            <button className="border-[1px] border-zinc-100 rounded-full px-8 py-3 ">
              Contact Us
            </button>
          </>
        ) : (
          <h4 className="text-sm text-zinc-400">
            Explore what drives our team
          </h4>
        )}
      </div>
    </motion.div>
  );
}

export default Card;
