import Image, { StaticImageData } from "next/image";
import React from "react";

type Type = {
  src?: StaticImageData;
  mainTitle: string;
  expTitle?: string;
  numReport?: string;
  button?: React.ReactElement;
  type: string;
};

const card = {
  simple: "mx-7 my-5 rounded-xl px-4 pt-7 border border-zinc-700 bg-zinc-900",
  full: "mx-5 lg:mx-0 lg:px-6 py-10 border-t border-b border-zinc-800 flex flex-row items-center justify-between lg:border-t-0 lg:border-b-0",
};

function DataCard({ src, mainTitle, expTitle, numReport, button, type }: Type) {
  return (
    <div className={type === "full" ? card.full : card.simple}>
      <div className="space-y-4">
        {src && <Image src={src} alt={mainTitle} width={30} height={30} />}
        <p className="text-zinc-50 text-2xl flex flex-col  ">
          {mainTitle} <span className="text-xl text-zinc-600">{expTitle}</span>
        </p>
        <p className="text-lg text-zinc-500">{numReport}</p>
      </div>

      <button className="bg-yellow-400 text-5xl rounded-full ">{button}</button>
    </div>
  );
}

export default DataCard;
