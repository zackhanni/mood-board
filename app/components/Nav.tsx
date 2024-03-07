"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faRectangleXmark } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useState } from "react";
import { useSession } from "next-auth/react";

export default function Nav() {
  const [showMobileNav, setShowMobileNav] = useState(false);
  const { status } = useSession();

  let navData = [];

  if (status == "authenticated") {
    navData = [
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
  } else {
    navData = [
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
  }

  return (
    <nav className="h-16 w-full fixed top-0 flex justify-between items-center px-8 bg-white/95 z-50">
      <div className="">
        <Link href="/">Mood Board</Link>
      </div>

      <div className="sm:hidden z-20">
        {showMobileNav ? (
          <FontAwesomeIcon
            icon={faRectangleXmark}
            size="xl"
            onClick={() => setShowMobileNav(false)}
          />
        ) : (
          <FontAwesomeIcon
            icon={faBars}
            size="xl"
            style={{ color: "#000000" }}
            onClick={() => setShowMobileNav(true)}
          />
        )}
      </div>

      <div
        className={`${
          showMobileNav ? "flex" : "hidden"
        } fixed top-0 left-0 w-full h-full bg-white/50 backdrop-blur-sm items-center `}
      >
        <div className="flex flex-col mx-auto space-y-2 text-4xl">
          {navData.map((navLink) => {
            return (
              <Link
                href={navLink.link}
                key={navLink.text}
                onClick={() => setShowMobileNav(false)}
              >
                <p className="hover:underline">{navLink.text}</p>
              </Link>
            );
          })}
          <Link href="/connect" onClick={() => setShowMobileNav(false)}>
            <p className="hover:underline">Log In</p>
          </Link>
          <Link href="/connect" onClick={() => setShowMobileNav(false)}>
            <p className="hover:underline">Get Started</p>
          </Link>
        </div>
      </div>

      <div className="sm:flex hidden justify-between space-x-6">
        {navData.map((navLink) => {
          return (
            <Link href={navLink.link} key={navLink.text}>
              <p className="hover:underline">{navLink.text}</p>
            </Link>
          );
        })}
      </div>
      {status === "authenticated" ? (
        ""
      ) : (
        <div className="sm:flex space-x-6 items-center hidden">
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
      )}
    </nav>
  );
}
