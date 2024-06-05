"use client";
import Image from "next/image";

const WhatCard = ({ title, text, img }) => {
  return (
    <div className="flex flex-col pt-16 w-full sm:w-[440px] bg-indigo-100 rounded-2xl hover:shadow-2xl m-3 items-center">
      <h2 className="text-2xl font-semibold text-center mb-2 text-bg-950">
        {title}
      </h2>

      <p className="text-base text-slate-400 text-center mb-14">{text}</p>
      <div className="h-[280px] w-[75%] bg-[url('https://media.tacdn.com/media/attractions-splice-spp-674x446/0c/04/55/9b.jpg')] mx-12 rounded-t-lg relative">
        <Image
          unoptimized
          src={img}
          alt="wtf is this"
          fill
          className="rounded-t-lg"
        />
      </div>
    </div>
  );
};

export default WhatCard;