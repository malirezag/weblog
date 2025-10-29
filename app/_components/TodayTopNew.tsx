import Image from "next/image";
import React from "react";
import LikeAndComment from "./LikeAndComment";
import Button from "../_ui/Button";

type Type = {
  title: string;
  image_url: string;
  category: string;
  article_id: string;
  description: string;
  pubDate: string;
  language: string;
};

function TodayTopNews({
  title,
  image_url,
  category,
  article_id,
  description,
  pubDate,
  language,
}: Type) {
  const newDesc = description.split(" ").slice(0, 30).join(" ");

  return (
    <div className="px-5 grid grid-cols-1 md:gap-13 place-content-center md:grid-cols-7 max-w-350  ">
      <div className="flex-1 relative mb-5 mx-auto w-full min-h-80 md:min-h-90 md:col-span-3">
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
      <div className="mt-3 md:col-span-4 md:flex md:flex-col justify-between">
        <div>
          <p className="text-xl text-zinc-100  ">{title}</p>
          <p className=" text-zinc-500">{newDesc} ...</p>
          <div className="mt-5 flex flex-row justify-between">
            <p className=" text-zinc-500 flex flex-col">
              Category <span className="text-zinc-50"> {category}</span>{" "}
            </p>
            <p className=" text-zinc-500 flex flex-col">
              pubDate{" "}
              <span className="text-zinc-50"> {pubDate.split(" ")[0]}</span>{" "}
            </p>
            <p className=" text-zinc-500 flex flex-col">
              language <span className="text-zinc-50"> {language}</span>{" "}
            </p>
          </div>
        </div>

        <div className="flex flex-roe justify-between items-center mt-3">
          <LikeAndComment comment={false} />
          <Button title="Read More" href={`/news/${article_id}`} type="small" />
        </div>
      </div>
    </div>
  );
}

export default TodayTopNews;
