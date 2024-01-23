"use client";

import Nav from "../components/Nav";
import UserData from "../components/UserData";
import HistoryEntries from "../components/HistoryEntries";

export default function History() {
  return (
    <>
      <Nav />
      <div className="w-full flex flex-col items-center justify-center min-h-screen py-2">
        <UserData />
        <h1 className="text-4xl font-bold">Feeling History</h1>
        <p>Track your past mental check ins</p>
        <div>{/* user profile */}</div>
        <HistoryEntries />
      </div>
    </>
  );
}
