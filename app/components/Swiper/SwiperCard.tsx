import React from "react";
import Syndicate from "./Syndicate";

interface ISwiperCard {
  children: React.ReactNode;
  index: number;
  hidden?: boolean;
}

const SwiperCard = ({ children, index, hidden }: ISwiperCard) => {
  return (
    <div
      className={`flex flex-col items-stretch justify-between px-15 py-17 h-[500px] w-[556px] bg-white rounded-3xl`}
    >
      <Syndicate />

      <div>{children}</div>

      <div className="flex flex-row justify-end items-center ">
        <p className="m-0 flex items-center justify-center text-5xl w-17 h-17 rounded-full bg-red-600 font-extrabold">
          {index + 1}
        </p>
      </div>
    </div>
  );
};

export default SwiperCard;
