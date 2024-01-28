"use client";

import Nav from "../components/Nav";
import UserData from "../components/UserData";
import HistoryEntries from "../components/HistoryEntries";
import { signOut, useSession } from "next-auth/react";
import Calendar from "../components/Calendar";

export default function History() {
  return (
    <>
      <div className="mt-24">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-center">
            Your Mood Board History
          </h1>
          <p className="text-center">Track your past mental check ins</p>
        </div>
        <Calendar />
        <HistoryEntries />
      </div>
    </>
  );
}
