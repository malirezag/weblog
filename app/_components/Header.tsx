import Image from "next/image";
import logo from "../icon.png";
import { RiMenuFill } from "react-icons/ri";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";

function Header() {
  return (
    <>
      <Link href={"#"}>
        <p className="text-zinc-400 justify-center flex flex-row items-center gap-4 py-5 text-sm text-nowrap px-2">
          Subscribe to our Newsletter For Blogs and Resources
          <span>
            <IoIosArrowRoundForward className="text-2xl text-yellow-300" />
          </span>
        </p>
      </Link>
      <header className="bg-zinc-800 text-xl px-4 py-6 border-b border-t border-zinc-700 text-white flex justify-between items-center ">
        <div className="flex flex-row items-center gap-3  font-bold">
          <Image
            src={logo}
            alt="logo"
            width={38}
            height={38}
            placeholder="blur"
          />
          <p>FutureTech</p>
        </div>
        <RiMenuFill className="text-3xl" />
      </header>
    </>
  );
}

export default Header;
