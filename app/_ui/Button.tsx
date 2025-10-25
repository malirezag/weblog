import Link from "next/link";
import React from "react";

const buttonType = {
  small:
    "text-zinc-400 text-base items-center py-2 flex flex-row gap-2 border border-zinc-700 rounded-lg justify-center w-fit px-3 ",
  large:
    "text-zinc-400 text-xl items-center py-3  flex flex-row gap-2 border border-zinc-700 rounded-2xl justify-center lg:w-fit lg:px-3 lg:text-base lg:gap-1",
};

function Button({
  title,
  className,
  href,
  type,
}: {
  title: string | React.ReactElement;
  className?: string;
  href: string;
  type?: string;
}) {
  return (
    <Link
      href={href}
      className={`${
        type === "small" ? buttonType.small : buttonType.large
      } ${className}`}
    >
      {title}
    </Link>
  );
}

export default Button;
