"use client";

import React from "react";
import MentalCheckInForm from "../components/MentalCheckInForm";
import Nav from "../components/Nav";

export default function MentalCheckIn() {
  return (
    <>
      <Nav />
      <div className="mt-24 flex justify-center">
        <MentalCheckInForm />
      </div>
    </>
  );
}
