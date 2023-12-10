"use client";

import React from "react";
import FeelingApp from "../components/FeelingApp";
import { signOut } from "next-auth/react";

export default function page() {
  function handleSignOut() {
    signOut({ callbackUrl: "/" });
  }

  return (
    <main className="flex flex-col items-center justify-center">
      <p className="top-1 fixed font-bold p-4" onClick={handleSignOut}>
        Log Out
      </p>
      <FeelingApp />
    </main>
  );
}
