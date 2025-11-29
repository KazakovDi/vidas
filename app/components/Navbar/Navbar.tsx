import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex flex-row gap-10">
      <Link
        className="flex items-center justify-center text-base"
        href={"#Terms"}
      >
        Условия
      </Link>
      <Link
        className="flex items-center justify-center text-base"
        href={"#Reviews"}
      >
        Отзывы
      </Link>
      <Link
        className="flex items-center justify-center text-base"
        href={"#Start"}
      >
        С чего начать
      </Link>
      <Link
        className="flex items-center justify-center text-base"
        href={"#Niches"}
      >
        Наши
      </Link>
      <Link
        className="flex items-center justify-center text-base"
        href={"#FAQ"}
      >
        FAQ
      </Link>
    </nav>
  );
};

export default Navbar;
