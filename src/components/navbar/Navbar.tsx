import React from "react";
import { getAuthSession } from "@/lib/nextauth";
import Logo from "@/components/logo/Logo";
import SignInButton from "@/components/signInButton/SignInButton";

import style from "./Navbar.module.css";

const Navbar = async () => {
  const session = await getAuthSession();

  console.log("User name", session?.user.name);

  return (
    <nav className={style.navbar}>
      <Logo />
      {session?.user ? (
        <span>Welcome, {session?.user.name} </span>
      ) : (
        <SignInButton text="Sign In" />
      )}
    </nav>
  );
};

export default Navbar;
