import React from "react";

function Footer() {
  return (
    <div className="w-full">
      <div className="max-w-screen-xl mx-auto py-10 flex gap-32">
        <div className="basis-1/2">
          <h1 className="text-[11rem] font-semibold leading-none tracking-tight">
            Refokus.
          </h1>
        </div>
        <div className="basis-1/2 flex">
          <div className="basis-1/3 flex flex-col gap-2">
            <h4 className="mb-5  text-zinc-400">Socials</h4>
            {["instagram", "twitter (X?)", "linkedin"].map((social, index) => (
              <a className="text-zinc-400 " key={index} href="#">
                {social}
              </a>
            ))}
          </div>
          <div className="basis-1/3 flex flex-col gap-2">
            <h4 className="mb-5 text-zinc-400">sitemap</h4>
            {["home", "work", "career", "contact"].map((social, index) => (
              <a className="text-zinc-100 " key={index} href="#">
                {social}
              </a>
            ))}
          </div>
          <div className="basis-1/2 flex flex-col">
            <p className="mb-5 text-end">
              Silvr We teamed up with financing solutions provider Silvr to
              audit, refine and evolve their brand.
            </p>
            <img  src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/6637ba0d8481b4339b1cda4f_Frame%2048097733.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
