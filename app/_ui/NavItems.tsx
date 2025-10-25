"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
const items = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "News",
    href: "/news",
  },
  {
    title: "Podcasts",
    href: "/podcasts",
  },
  {
    title: "Resources",
    href: "/resources",
  },
];

function NavItems() {
  const path = usePathname();
  console.log(path);

  return (
    <ul className="lg:flex lg:flex-row hidden gap-5 ">
      {items.map((item) => (
        <li
          key={item.title}
          className={`px-3 py-2  ${
            path === item.href
              ? "text-zinc-50 border border-zinc-50 rounded-lg bg-zinc-950"
              : "text-zinc-400"
          }`}
        >
          <Link href={item.href}>{item.title}</Link>
        </li>
      ))}
    </ul>
  );
}

export default NavItems;
