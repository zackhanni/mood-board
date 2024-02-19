"use client";

import { signOut } from "next-auth/react";
import UserData from "../components/UserData";
import Button from "../components/Button";
import Image from "next/image";

export default function page() {
  const handleSignOut = () => {
    signOut({ callbackUrl: "/" });
  };
  return (
    <>
      <section className="flex flex-col justify-center items-center mx-auto py-16 space-y-8">
        <h1 className="text-4xl">User Settings</h1>
        <Image
          src="/personal-settings.svg"
          width={200}
          height={200}
          alt="Personal Settings"
          className="mx-auto max-h-[200px] max-w-[200px]"
        />

        <UserData />

        <div className="flex flex-col space-y-2 mx-auto">
          <Button
            classes="bg-black rounded-xl text-sm"
            text="Log out"
            onClick={handleSignOut}
          />
          <Button
            classes="bg-red-600 rounded-xl text-sm"
            text="DELETE ACCOUNT"
            onClick={handleSignOut}
          />
        </div>
      </section>
    </>
  );
}
