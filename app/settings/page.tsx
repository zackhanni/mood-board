"use client";

import { signOut } from "next-auth/react";
import UserData from "../components/UserData";

export default function page() {
  const handleSignOut = () => {
    signOut({ callbackUrl: "/" });
  };
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <div className="max-w-sm py-16">
          <p className="pb-4 underline">You are currently logged in as:</p>
          <UserData />
        </div>
        <div className="space-y-4 flex flex-col">
          <button
            className="bg-black text-white p-4 hover:underline"
            onClick={handleSignOut}
          >
            Log Out
          </button>

          <button
            className="bg-red-600 text-white p-4 hover:underline"
            onClick={handleSignOut}
          >
            Delete Account
          </button>
        </div>
      </div>
    </>
  );
}
