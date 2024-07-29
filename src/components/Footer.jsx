import React from "react";

const Footer = () => {
  return (
    <div className="bg-slate-800 text-white flex flex-col justify-center items-center bottom-0 w-full">
      <div className="logo font-bold text-white text-2xl">
        <span className="text-green-500">&lt;</span>

        <span>Pass</span>
        <span className="text-green-500">OP/&gt;</span>
      </div>
      <div className="flex justify-center items-center">
        Made with <img className="w-4 mx-2" src="icons/heart.png" alt="" /> and{" "}
        <img src="icons/coffee.png" alt="" className="w-4 mx-2" /> by Ishwar
        Jadhav
      </div>
    </div>
  );
};

export default Footer;
