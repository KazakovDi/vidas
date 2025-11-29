import Image from "next/image";
import React from "react";
import Navbar from "../Navbar/Navbar";
import RoundButton from "../RoundButton/RoundButton";

const Header = () => {
  return (
    <div className="flex flex-row justify-between">
      <Image width={190} height={53} alt="logo" src={"/logo.png"} />

      <Navbar />

      <div className="flex flex-row gap-4">
        <RoundButton href="#">
          <Image
            className="margin-auto"
            width={34}
            height={34}
            alt="whatsapp"
            src={"/whatsapp.png"}
          />
        </RoundButton>

        <RoundButton href="#">
          <Image width={34} height={34} alt="whatsapp" src={"/tg.png"} />
        </RoundButton>

        <RoundButton href="#">
          <Image width={34} height={34} alt="whatsapp" src={"/insta.png"} />
        </RoundButton>
      </div>
    </div>
  );
};

export default Header;
