import Link from "next/link";
import React from "react";

interface IRoundButton {
  children: React.ReactNode;
  href: string;
  styles?: any;
}

const RoundButton = ({ children, styles, href }: IRoundButton) => {
  return (
    <Link
      href={href}
      className={`flex self-center justify-center items-center w-16 h-16 rounded-full bg-red-600 hover:bg-red-700 ${styles}`}
    >
      {children}
    </Link>
  );
};

export default RoundButton;
