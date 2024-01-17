"use client";
import { getCurrentUser } from "../lib/session";
import Nav from "../components/Nav";
import { SessionProvider } from "next-auth/react";
import { getServerSession } from "next-auth";
import { authConfig } from "@/app/lib/auth";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import UserData from "../components/UserData";

export default function History() {
  const [entries, setEntries] = useState([]);

  // const { data: session } = useSession();

  // useEffect(() => {
  //   const fetchEntries = async () => {
  //     if (session) {
  //       const response = await fetch(`/api/entries?userId=${session.user.id}`);
  //       if (!response.ok) {
  //         throw new Error("Network response was not ok");
  //       }
  //       const data = await response.json();
  //       setEntries(data);
  //     }
  //   };

  //   fetchEntries();
  // }, [session]);

  const [session, setSession] = useState(null);

  useEffect(() => {
    const fetchSessionAndEntries = async () => {
      const session = await getServerSession(authConfig);
      setSession(session);

      if (session) {
        const response = await fetch(`/api/entries?userId=${session.user.id}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setEntries(data);
      }
    };

    fetchSessionAndEntries();
    // add a way to handle errors here
  }, []);

  return (
    <>
      <SessionProvider>
        <Nav />
        <div className="w-full flex flex-col items-center justify-center min-h-screen py-2">
          <UserData />
          <h1 className="text-4xl font-bold">Feeling History</h1>
          <p>Track your past mental check ins</p>
          <div>{/* user profile */}</div>
          <div id="user-history-data">
            {entries.length > 0 ? (
              entries.map((entry) => {
                return (
                  <div key={entry.id} className="flex flex-row">
                    <p>{entry.createdAt}</p>
                    <p>{entry.feeling}</p>
                    <p>{entry.thoughts}</p>
                  </div>
                );
              })
            ) : (
              <p className="py-16">no entries yet or unable to fetch entries</p>
            )}
          </div>
        </div>
      </SessionProvider>
    </>
  );
}
