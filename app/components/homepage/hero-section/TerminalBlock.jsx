"use client";
import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js'; // Ensure you import Typed

const TerminalBlock = () => {
  const el = useRef(null);  
  useEffect(() => {
    const options = {
      strings: ["First sentence. sentencesentence sentencesentence","error" ,"Second sentence." , "  return () => {typed.destroy()};","function () {}", "sentence"],
      typeSpeed: 70,
      backSpeed: 30,  
      backDelay: 500,  
      loop: true,  
    };

    const typed = new Typed(el.current, options);  

    return () => {
      typed.destroy();  
    };
  }, []);

  return (
    <div className=" bg-slate-900 text-gray-200 h-52 p-2 ring-1 ring-purple-500 rounded-sm   shadow-lg max-w-xl mx-auto mt-10 font-mono">
      <div className=" border-b border-cyan-400 w-full py-5 relative mb-10">

    
      <div className="absolute top-2 left-2 flex space-x-1 ">
        <div className="h-3 w-3 bg-red-500 rounded-full"></div>
        <div className="h-3 w-3 bg-yellow-500 rounded-full"></div>
        <div className="h-3 w-3 bg-green-500 rounded-full"></div>
      </div>
      </div>
      <p className="whitespace-pre-wrap text-lg text-green-400 leading-relaxed" ref={el}></p> 
    </div>
  );
};

export default TerminalBlock;
