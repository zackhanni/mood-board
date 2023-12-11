"use client";

import Nav from "../components/Nav";
import { SessionProvider } from "next-auth/react";
import { useSession } from "next-auth/react";
import UserData from "../components/UserData";

export default function History() {
  return (
    <SessionProvider>
      <Nav />
      <div className="w-full flex flex-col items-center justify-center min-h-screen py-2">
        <UserData />
        <h1 className="text-4xl font-bold">Feeling History</h1>
        <p>Track your past mental check ins</p>
        <div>{/* user profile */}</div>
      </div>
    </SessionProvider>
  );
}
