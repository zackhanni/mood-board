"use client";

import React from "react";
import FeelingApp from "../components/FeelingApp";
import Nav from "../components/Nav";

export default function MentalCheckIn() {
  return (
    <>
      <Nav />
      <main className="flex flex-col items-center justify-center max-w-[90%]">
        <FeelingApp />
      </main>
    </>
  );
}
