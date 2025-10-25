import React from "react";
import logo from "@/public/Image.png";
import logo1 from "@/public/i.png";
import logo2 from "@/public/I2.png";
import logo3 from "@/public/i3.png";
import logo4 from "@/public/icon.svg";
import logo5 from "@/public/ic2.svg";
import person from "@/public/Image.png";
import Image from "next/image";
import { IoIosArrowRoundForward } from "react-icons/io";
import Button from "./_ui/Button";
import DataCard from "./_ui/DataCard";
import Link from "next/link";
import UserPostCard from "./_ui/UserPostCard";

const cardItems1 = [
  {
    type: "simple",
    mainTitle: "Quantity",
    numReport: "Over 1,000 articles on emerging tech trends and breakthroughs.",
  },
  {
    type: "simple",
    mainTitle: "Variety",
    numReport:
      "Articles cover fields like AI, robotics, biotechnology, and more",
  },
  {
    type: "simple",
    mainTitle: "Frequency",
    numReport: "Fresh content added daily to keep you up to date.",
  },
  {
    type: "simple",
    mainTitle: "Authoritative",
    numReport:
      "Written by our team of tech experts and industry professionals.",
  },
];

const cardItems2 = [
  {
    type: "simple",
    mainTitle: "Contributor",
    numReport: "Contributions from tech researchers and academics",
  },
  {
    type: "simple",
    mainTitle: "Graphics",
    numReport: "Visual aids and infographics to enhance comprehension.",
  },
  {
    type: "simple",
    mainTitle: "Trends",
    numReport: "Explore emerging trends in future technology research.",
  },
  {
    type: "simple",
    mainTitle: "Contributors",
    numReport: "Contributions from tech researchers and academics.",
  },
];

function page() {
  return (
    <div className="">
      <div className="lg:grid lg:grid-cols-5 lg:place-content-center lg:place-items-center">
        <div className="lg:col-span-3">
          {/* p1 */}
          <div className="flex flex-col py-15 gap-4 lg:gap-7 px-5 lg:px-10 ">
            <p className=" text-zinc-600 font-semibold lg:text-lg ">
              Your Journey to Tomorrow Begins Here
            </p>
            <h1 className="text-zinc-100 text-2xl/8 font-bold tracking-wide lg:text-5xl/15 lg:font-medium">
              Explore the Frontiers of Artificial Intelligence
            </h1>
            <p className="text-zinc-600 text-lg">
              Welcome to the epicenter of AI innovation. FutureTech AI News is
              your passport to a world where machines think, learn, and reshape
              the future.
            </p>
          </div>

          {/* p2 */}
          <div className="grid grid-cols-3 border-t border-zinc-800 divide-x divide-zinc-800 ">
            <div className="flex flex-col items-center py-7 gap-3">
              <h3 className="text-zinc-50 text-3xl font-bold">
                300<span className="text-yellow-300 ">+</span>
              </h3>
              <p className="text-zinc-600 text-xl text-center">
                Resources available
              </p>
            </div>
            <div className="flex flex-col items-center py-7 gap-3">
              <h3 className="text-zinc-50 text-3xl font-bold">
                12k<span className="text-yellow-300 ">+</span>
              </h3>
              <p className="text-zinc-600 text-xl text-center">
                Total Downloads
              </p>
            </div>
            <div className="flex flex-col items-center py-7 gap-3">
              <h3 className="text-zinc-50 text-3xl font-bold">
                10k<span className="text-yellow-300 ">+</span>
              </h3>
              <p className="text-zinc-600 text-xl text-center">Active Users</p>
            </div>
          </div>
        </div>
        {/* p3 */}
        <div className="bg-[url(../public/banner.png)] min-h-115 lg:min-h-full bg-no-repeat bg-cover flex flex-col justify-end px-8 gap-5 mb-10 lg:mb-0 lg:pb-8 lg:col-span-2 lg:border-l border-zinc-800">
          <ul className="flex flex-row border bg-zinc-900 p-3 border-zinc-700 rounded-full w-fit ">
            <li className=" rounded-full border-2 border-zinc-500">
              <Image
                src={logo}
                alt="1"
                height={40}
                width={40}
                placeholder="blur"
              />
            </li>
            <li className=" rounded-full border-2 border-zinc-500 -ml-3">
              <Image src={logo} alt="1" height={40} width={40} />
            </li>
            <li className=" rounded-full border-2 border-zinc-500 -ml-3">
              <Image src={logo} alt="1" height={40} width={40} />
            </li>
            <li className=" rounded-full border-2 border-zinc-500 -ml-3">
              <Image src={logo} alt="1" height={40} width={40} />
            </li>
          </ul>

          <p className="flex flex-col text-zinc-50 text-3xl gap-2 ">
            Explore 1000+ resources
            <span className="text-zinc-400 text-xl">
              Over 1,000 articles on emerging tech trends and breakthroughs.
            </span>
          </p>
          <Button
            href="#"
            title={
              <>
                Expelore Resources
                <IoIosArrowRoundForward className="text-3xl text-yellow-300 translate-y-1" />
              </>
            }
          />
        </div>
      </div>

      {/* p4 cardList */}

      <div>
        <div className="lg:grid lg:grid-cols-3 lg:divide-x divide-zinc-600 lg:border-b lg:border-t lg:border-zinc-800">
          <DataCard
            type="full"
            src={logo1}
            button={
              <Link href={"#"}>
                <IoIosArrowRoundForward />
              </Link>
            }
            mainTitle="Latest News Updates"
            expTitle="Stay Current"
            numReport="Over 1,000 articles published monthly"
          />
          <DataCard
            type="full"
            src={logo2}
            button={<IoIosArrowRoundForward />}
            mainTitle="Expert Contributors"
            expTitle="Trusted Insights"
            numReport="50+ renowned AI experts on our team"
          />
          <DataCard
            type="full"
            src={logo3}
            button={<IoIosArrowRoundForward />}
            mainTitle="Global Readership"
            expTitle="Worldwide Impact"
            numReport="2 million monthly readers"
          />
        </div>

        <p className=" flex flex-col bg-zinc-900 text-zinc-50 px-5 lg:px-10 lg:py-13 py-10 tracking-wide text-3xl lg:text-5xl lg:gap-5 gap-3 font-semibold">
          <span className="py-1 px-4 rounded bg-zinc-700 w-fit text-lg  font-normal">
            Unlock the Power of
          </span>{" "}
          FutureTech Features
        </p>

        <div className="lg:grid lg:grid-cols-5 lg:place-content-center lg:place-items-center lg:border lg:border-zinc-800 lg:px-10 ">
          <div className="col-span-2 ">
            <DataCard
              type="full"
              src={logo4}
              mainTitle="Future Technology Blog"
              numReport="Stay informed with our blog section dedicated to future technology.
            "
            />
          </div>
          <div className="lg:grid lg:grid-cols-2 lg:col-span-3 lg:border-l lg:border-zinc-800 lg:py-10">
            {cardItems1.map((item) => (
              <DataCard
                type={item.type}
                mainTitle={item.mainTitle}
                numReport={item.numReport}
                key={item.numReport}
              />
            ))}
          </div>
        </div>

        <div className="lg:grid lg:grid-cols-5 lg:place-content-center lg:place-items-center lg:border lg:border-zinc-800 lg:px-10">
          <div className="col-span-2 ">
            <DataCard
              type="full"
              src={logo5}
              mainTitle="Research Insights Blogs"
              numReport="Dive deep into future technology concepts with our research section."
            />
          </div>
          <div className="lg:grid lg:grid-cols-2 lg:col-span-3 lg:border-l lg:border-zinc-800 lg:py-10">
            {cardItems2.map((item) => (
              <DataCard
                type={item.type}
                mainTitle={item.mainTitle}
                numReport={item.numReport}
                key={item.numReport}
              />
            ))}
          </div>
        </div>

        <div className=" bg-zinc-900 px-5 py-10 lg:flex lg:flex-row lg:justify-between lg:items-center lg:py-20 lg:px-10 ">
          <p className=" flex flex-col text-zinc-50  tracking-wide text-3xl lg:text-5xl gap-3 font-semibold lg:gap-7">
            <span className="py-1 px-4 rounded bg-zinc-700 w-fit text-lg  font-normal">
              A Knowledge Treasure Trove
            </span>
            Explore FutureTech&apos;s In-Depth Blog Posts
          </p>
          <Button
            title={
              <>
                View All Blogs{" "}
                <IoIosArrowRoundForward className="text-4xl text-yellow-300 translate-y-1" />
              </>
            }
            className="bg-zinc-950 my-3"
            href="#"
          />
        </div>
      </div>

      {/* p5 */}
      <div className="divide-y divide-zinc-800">
        <UserPostCard
          src={person}
          subject="Quantum Computing"
          userName="Ali Fallah"
        />
      </div>
    </div>
  );
}

export default page;
