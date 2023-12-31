"use client";

import React from "react";
import { User } from "next-auth";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getInitials } from "@/lib/utils";
import { signOut } from "next-auth/react";
import { LogOut } from "lucide-react";

import style from "./UserMenu.module.css";

type Props = {
  user: Pick<User, "name" | "image" | "email">;
};

const UserMenu = ({ user }: Props) => {
  const { name, email, image } = user;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className={style.trigger}>
        <Avatar>
          <AvatarImage src={image ? image : ""} />
          <AvatarFallback>{getInitials(name ? name : "PP")}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-white dark:bg-gray-900" align="end">
        <DropdownMenuLabel>{name}</DropdownMenuLabel>
        <DropdownMenuItem>{email}</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onSelect={(event) => {
            event.preventDefault();
            signOut().catch(console.error);
          }}
          className={style.signout_btn}
        >
          Sign out
          <LogOut className={style.icon} />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserMenu;
