"use client";

import Link from "next/link";
import { useSession } from "next-auth/react";
import LandingNav from "./NavLanding";

export default function Nav() {
  const { status } = useSession();

  const navData = [
    {
      text: "Settings",
      link: "/settings",
    },
    {
      text: "Mental Check In",
      link: "/mental-check-in",
    },
    {
      text: "History",
      link: "/history",
    },
  ];

  if (status == "authenticated") {
    return (
      <nav className="h-16 w-full top-0 fixed flex justify-between items-center px-8">
        <div>
          <Link href="/">Mood Board</Link>
        </div>
        <div className="flex justify-between space-x-8">
          {navData.map((navLink) => {
            return (
              <Link href={navLink.link} key={navLink.text}>
                <p className="hover:underline">{navLink.text}</p>
              </Link>
            );
          })}
        </div>
      </nav>
    );
  }

  return <LandingNav />;
}
