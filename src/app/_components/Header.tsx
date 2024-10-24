"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { useUser, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const { isSignedIn } = useUser();

  return (
    <div className="p-5 flex justify-between items-center border shadow-sm">
      <div className="flex flex-row  items-center">
        {/* Logo */}
        <Image
          src={"/clearwallet.png"}
          alt="logo clear wallet"
          width={40}
          height={25}
        />
        <span className="text-blue-800 font-bold text-xl">ClearWallet</span>
      </div>
      {isSignedIn ? (
        <UserButton />
      ) : (
        <div className="flex gap-3  items-center">
          <Link href="/dashboard">
            <Button variant="outline" className="rounded-full">
              Dashboard
            </Button>
          </Link>
          <Link href="/sign-in">
            <Button className="rounded-full">Get Started</Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Header;
