"use client";

import Link from "next/link";
import { useSession } from "next-auth/react";

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
      <div className="h-16 w-full top-0 left-0 fixed flex bg-black sm:hover:bg-black text-white sm:hover:text-white justify-evenly sm:justify-center sm:space-x-16 items-center hover:shadow-2xl duration-300">
        {navData.map((navLink) => {
          return (
            <Link href={navLink.link} key={navLink.text}>
              <p className="font-bold hover:underline">{navLink.text}</p>
            </Link>
          );
        })}
      </div>
    );
  }
}
