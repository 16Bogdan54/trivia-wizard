import React from "react";
import { getAuthSession } from "@/lib/nextauth";
import Logo from "@/components/logo/Logo";
import UserMenu from "@/components/userMenu/UserMenu";
import SignInButton from "@/components/signInButton/SignInButton";
import ThemeToggle from "@/components/themeToggle/ThemeToggle";

import style from "./Navbar.module.css";

const Navbar = async () => {
  const session = await getAuthSession();

  console.log("User name", session?.user.name);

  return (
    <nav className={style.navbar}>
      <Logo />
      <div className={style.nav_items}>
        <ThemeToggle />
        {session?.user ? (
          <UserMenu user={session.user} />
        ) : (
          <SignInButton text="Sign In" />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
