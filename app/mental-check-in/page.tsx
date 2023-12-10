"use client";

import React from "react";
import FeelingApp from "../components/FeelingApp";
import { signOut } from "next-auth/react";
import { SessionProvider } from "next-auth/react";

export default function page() {
  function handleSignOut() {
    signOut({ callbackUrl: "/" });
  }

  return (
    <main className="flex flex-col items-center justify-center">
      <div className="top-1 fixed flex">
        <p className="font-bold p-4" onClick={handleSignOut}>
          Log Out
        </p>
        <p className="font-bold p-4">History</p>
      </div>

      <SessionProvider>
        <FeelingApp />
      </SessionProvider>
    </main>
  );
}
