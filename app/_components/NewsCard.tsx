import Image from "next/image";
import React from "react";
import LikeAndComment from "./LikeAndComment";
import Button from "../_ui/Button";

type Type = {
  title: string;
  image_url: string;
  category: string;
};

function NewsCard({ title, image_url, category }: Type) {
  return (
    <div className="px-5 flex flex-col justify-center  max-w-110">
      <div className="flex-1 relative min-h-50 w-95  mb-5 mx-auto ">
        <Image
          src={
            image_url ??
            "https://www.albawaba.com/sites/default/files/2025-10/%D8%A7%D8%B3%D8%AA%D9%8A%D8%B1%20%D9%88%D9%88%D8%AC%D9%8A%D9%83%D9%8A%20(1).jpg"
          }
          alt={title}
          fill
          className="object-cover object-center rounded-xl"
          unoptimized
        />
      </div>
      <p className="text-xl text-zinc-100 ">{title}</p>
      <p className=" text-zinc-500">{category}</p>
      <div className="flex flex-roe justify-between items-center">
        <LikeAndComment comment={false} />
        <Button title="Read More" href="#" type="small" />
      </div>
    </div>
  );
}

export default NewsCard;
