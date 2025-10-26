import React from "react";
import { BiHeart, BiSend } from "react-icons/bi";
import { LuMessageCircle } from "react-icons/lu";

type Type = {
  like?: true | false;
  comment?: true | false;
  share?: true | false;
};

function LikeAndComment({ like = true, comment = true, share = true }: Type) {
  return (
    <div className="flex flex-row gap-3 my-5">
      {like === true && (
        <div className="rounded-full border border-zinc-700 bg-zinc-900 flex flex-row text-zinc-400 items-center px-3 py-1.5 gap-1.5 justify-center m">
          <BiHeart className="text-2xl" />
          <p>12.5k</p>
        </div>
      )}
      {comment === true && (
        <div className="rounded-full border border-zinc-700 bg-zinc-900 flex flex-row text-zinc-400 items-center px-3 py-1.5 gap-1.5 justify-center m">
          <LuMessageCircle className="text-2xl" />
          <p>33</p>
        </div>
      )}
      {share === true && (
        <div className="rounded-full border border-zinc-700 bg-zinc-900 flex flex-row text-zinc-400 items-center px-3 py-1.5 gap-1.5 justify-center m">
          <BiSend className="text-2xl" />
          <p>98</p>
        </div>
      )}
    </div>
  );
}

export default LikeAndComment;
