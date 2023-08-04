import React from "react";
import Link from "next/link";
import { MdScience } from "react-icons/md";

import style from "./Logo.module.css";

const Logo = () => {
  return (
    <Link href="/" className={style.logo}>
      <MdScience />
      Trivia Wizard
    </Link>
  );
};

export default Logo;
