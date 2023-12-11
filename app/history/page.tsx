"use client";

import Nav from "../components/Nav";
import { SessionProvider } from "next-auth/react";
import { useSession } from "next-auth/react";

export default function History() {
  // const { data: session } = useSession();
  // const username = session?.user?.name || "Unable to fetch name";
  // const email = session?.user?.email || "Unable to fetch email";
  // const profileImage = session?.user?.image;

  return (
    <SessionProvider>
      <Nav />
      <div className="w-full flex flex-col items-center justify-center min-h-screen py-2">
        <h1 className="text-4xl font-bold">Feeling History</h1>
        <p>Track your past mental check ins</p>
        <div>{/* user profile */}</div>
      </div>
    </SessionProvider>
  );
}
