"use client";

import { signOut } from "next-auth/react";
import UserData from "../components/UserData";
import Button from "../components/Button";

export default function page() {
  const handleSignOut = () => {
    signOut({ callbackUrl: "/" });
  };
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <div className="max-w-sm py-16">
          <p className="pb-4 text-center">You are currently logged in as:</p>
          <UserData />
        </div>
        <div className="space-y-4 flex flex-col">
          <Button classes="bg-black" onClick={handleSignOut} text="Log Out" />
          <Button
            classes="bg-red-600"
            onClick={handleSignOut}
            text="Delete Account"
          />
        </div>
      </div>
    </>
  );
}
