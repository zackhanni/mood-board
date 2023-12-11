"use client";

import React from "react";
import FeelingApp from "../components/FeelingApp";

import { SessionProvider } from "next-auth/react";
import Nav from "../components/Nav";

export default function MentalCheckIn() {
  return (
    <SessionProvider>
      <Nav />
      <main className="flex flex-col items-center justify-center">
        <FeelingApp />
      </main>
    </SessionProvider>
  );
}
