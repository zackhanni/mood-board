"use client";

import Link from "next/link";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

export default function Nav() {
  const handleSignOut = async () => {
    await signOut({ callbackUrl: "/" });
  };
  const { status } = useSession();

  if (status == "authenticated") {
    return (
      <div className="h-16 w-full top-0 left-0 fixed flex bg-black sm:hover:bg-black text-white sm:hover:text-white justify-evenly sm:justify-center sm:space-x-16 items-center hover:shadow-2xl">
        <Link href="/">
          <p
            className="font-bold hover:underline"
            // figure out how to make signout work without onClick, it breaks because its a component in layout
            // onClick={handleSignOut}
          >
            Log Out
          </p>
        </Link>
        <Link href="/mental-check-in">
          <p className="font-bold hover:underline">Mental Check In</p>
        </Link>
        <Link href="/history">
          <p className="font-bold hover:underline">History</p>
        </Link>
      </div>
    );
  }
}
