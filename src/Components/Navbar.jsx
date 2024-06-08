import React from "react";
import Button from "./Button";
function Navbar() {
  return (
    <div className=" max-w-screen-xl mx-auto py-6  flex justify-between border-b-[1px] border-zinc-500 ">
      <div className="flex gap-20">
        <img className=""
          src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg"
          alt=""
        />
        <div className="links flex gap-12">
          {["Home", "Work", "About", "News", "Careers"].map((link, index) => {
            return (
              <a
                className="text-semibold text-sm flex items-center gap-1 "
                key={index}
                href="#"
              >
                {index == 1 ? (
                  <span
                    style={{ boxShadow: "0 0 1rem #00FF19" }}
                    className="inline-block  h-2 w-2 rounded-full bg-green-500"
                  ></span>
                ) : (
                  ""
                )}{" "}
                {link}
              </a>
            );
          })}
        </div>
      </div>
      <div className="flex gap-8 items-center ">
        <div className="languages flex gap-2">
          <h1 className="text-md ">EN</h1>
          <h1 className="text-md opacity-70 ">DE</h1>
        </div>
        <Button/>
      </div>
    </div>
  );
}

export default Navbar;
