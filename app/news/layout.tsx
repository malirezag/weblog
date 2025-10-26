import React from "react";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col gap-4 border-b border-zinc-700 px-5 py-10">
        <h1 className="text-3xl text-zinc-100">
          Today&apos;s Headlines: Stay Informed
        </h1>
        <p className="text-sm text-zinc-500">
          Explore the latest news from around the world. We bring you
          up-to-the-minute updates on the most significant events, trends, and
          stories. Discover the world through our news coverage.
        </p>
      </div>
      {children}
    </div>
  );
}

export default layout;
