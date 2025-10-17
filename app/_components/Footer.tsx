import React from "react";
import Button from "../_ui/Button";
import { IoIosArrowForward } from "react-icons/io";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import { LiaTelegram } from "react-icons/lia";

const items = [
  {
    title: "Home",
    list: [
      "Blogs",
      "Features",
      "Resources",
      "Testimonials",
      "Contact Us",
      "Newsletter",
    ],
  },

  {
    title: "Blogs",
    list: [
      "Quantum Computing",
      "AI Ethics",
      "Space Exploration",
      "Biotechnology",
      "Renewable Energy",
      "Biohacking",
    ],
  },
  {
    title: "News",
    list: [
      "Trending Stories",
      "Featured Videos",
      "Technology",
      "Health",
      "Politics ",
      "Environment",
    ],
  },
  {
    title: "Podcasts",
    list: ["AI Revolution", "TechTalk AI", "AI Conversations"],
  },
];

function Footer() {
  return (
    <footer className="px-5 ">
      <div className="gap-6 grid grid-cols-2">
        {items.map((item) => (
          <div key={item.title} className="space-y-4">
            <p className="text-2xl text-zinc-50">{item.title}</p>
            <ul className="space-y-3">
              {item.list.map((item) => (
                <li className="text-zinc-600 text-base text-nowrap" key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <p className="text-2xl text-zinc-50 my-6">Resources</p>
      <ul className="flex flex-row  gap-4 flex-wrap">
        <li>
          <Button
            type="small"
            href=""
            title={
              <>
                Whitepapers <IoIosArrowForward className="text-yellow-400" />
              </>
            }
          />
        </li>
        <li>
          <Button
            type="small"
            href=""
            title={
              <>
                Ebooks <IoIosArrowForward className="text-yellow-400" />
              </>
            }
          />
        </li>
        <li>
          <Button
            type="small"
            href=""
            title={
              <>
                Reports <IoIosArrowForward className="text-yellow-400" />
              </>
            }
          />
        </li>
        <li>
          <Button
            type="small"
            href=""
            title={
              <>
                Research Papers{" "}
                <IoIosArrowForward className="text-yellow-400" />
              </>
            }
          />
        </li>
      </ul>

      <div className="py-10 mt-10 border-t border-zinc-600 flex flex-col gap-7 items-center justify-center">
        <div className="text-zinc-50 text-3xl flex flex-row gap-5 ">
          <FaXTwitter />
          <FaInstagram />
          <LiaTelegram />
        </div>
        <p className="text-xl text-zinc-600">
          Terms & Conditions | Privacy Policy
        </p>
        <p className="text-xl text-zinc-600">
          © 2024 FutureTech. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
