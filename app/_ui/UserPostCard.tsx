import Image, { StaticImageData } from "next/image";

import { BiHeart, BiSend } from "react-icons/bi";
import { IoIosArrowRoundForward } from "react-icons/io";
import { LuMessageCircle } from "react-icons/lu";
import Button from "./Button";

function UserPostCard({
  src,
  userName,
  subject,
}: {
  src: StaticImageData;
  subject: string;
  userName: string;
}) {
  return (
    <div className="px-4 py-10 lg:flex lg:flex-row lg:items-center lg:justify-around  border border-zinc-800">
      <div className="flex fex-row items-center justify-between ">
        <div className="flex flex-row gap-3 items-center">
          <Image src={src} alt="" width={60} height={60} />
          <p className="text-lg text-zinc-50 flex flex-col">
            {userName} <span className="text-sm text-zinc-400">{subject}</span>
          </p>
        </div>
        <Button
          type="small"
          className="px-2 text-nowrap lg:hidden"
          href="#"
          title={
            <>
              View Blog
              <IoIosArrowRoundForward className="text-3xl text-yellow-300" />
            </>
          }
        />
      </div>

      <div className="lg:px-5">
        <div>
          <p className="text-zinc-500 my-4">October 15, 2023</p>
          <p className="flex flex-col text-xl text-zinc-50 gap-2">
            {" "}
            The Quantum Leap in Computing{" "}
            <span className="text-base text-zinc-400">
              Explore the revolution in quantum computing, its applications, and
              its potential impact on various industries.
            </span>
          </p>
        </div>

        <div className="flex flex-row gap-3 my-5">
          <div className="rounded-full border border-zinc-700 bg-zinc-900 flex flex-row text-zinc-400 items-center px-3 py-1.5 gap-1.5 justify-center m">
            <BiHeart className="text-2xl" />
            <p>12.5k</p>
          </div>{" "}
          <div className="rounded-full border border-zinc-700 bg-zinc-900 flex flex-row text-zinc-400 items-center px-3 py-1.5 gap-1.5 justify-center m">
            <LuMessageCircle className="text-2xl" />
            <p>33</p>
          </div>
          <div className="rounded-full border border-zinc-700 bg-zinc-900 flex flex-row text-zinc-400 items-center px-3 py-1.5 gap-1.5 justify-center m">
            <BiSend className="text-2xl" />
            <p>98</p>
          </div>
        </div>
      </div>

      <Button
        type="small"
        className="px-2 text-nowrap hidden lg:block  "
        href="#"
        title={
          <>
            View Blog
            <IoIosArrowRoundForward className="text-3xl text-yellow-300" />
          </>
        }
      />
    </div>
  );
}

export default UserPostCard;
