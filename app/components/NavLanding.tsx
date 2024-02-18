"use client";

import Link from "next/link";
import { useSession } from "next-auth/react";

export default function LandingNav() {
  const { status } = useSession();

  const navData = [
    {
      text: "Platform",
      link: "/platform",
    },
    {
      text: "Resources",
      link: "/resources",
    },
    {
      text: "Donations",
      link: "/donations",
    },
  ];

  return (
    <nav className="h-16 w-full top-0 fixed flex justify-between items-center px-8 bg-white/95 z-50">
      <div className=" hover:bg-[#6C63FF] hover:text-white p-2 rounded-md duration-1000">
        <Link href="/">Mood Board</Link>
      </div>
      <div className="flex justify-between space-x-6">
        {navData.map((navLink) => {
          return (
            <Link href={navLink.link} key={navLink.text}>
              <p className="hover:underline">{navLink.text}</p>
            </Link>
          );
        })}
      </div>
      <div className="flex space-x-6 items-center">
        <Link href="/connect">
          <p className="hover:underline">Log In</p>
        </Link>
        <Link
          href="/connect"
          className=" rounded-xl outline-2 outline-gray-200 hover:outline-none outline p-2 hover:bg-[#6C63FF] hover:text-white duration-300"
        >
          <p className="">Get Started</p>
        </Link>
      </div>
    </nav>
  );
}
