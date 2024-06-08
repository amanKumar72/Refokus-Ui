import React from "react";
import { IoMdReturnRight } from "react-icons/io";

function Button({text}) {
  return (
    <div className="max-w-44 rounded-full text-md px-5 py-2 bg-zinc-100 text-black font-md flex items-center gap-2">
      <button className="">{text?text:"Start a Project"}</button>
      <IoMdReturnRight />
    </div>
  );
}

export default Button;
