import React from "react";
import Button from "./Button";


function Product({product,index,move}) {
    
  return (
    <div onMouseEnter={()=>move(index)} className={`w-full h-[18rem] py-4  text-white transition hover:bg-blue-400 ease-in `}>
      <div className="max-w-screen-xl mx-auto flex items-center justify-between ">
        <h1  className="text-5xl ">{product.title}</h1>
        <div className="w-1/3 ">
          <p className="my-4   text-lg ">
            {product.description}
          </p>
          <div className="flex gap-2">
          {product.live&&<Button text={"live Website"}/>}
          {product.case&&<Button text={'case study'}/>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
