"use client";

import { GoogleSignIn, CredentialsSignIn } from "./components/SignIn";
import { signOut, useSession } from "next-auth/react";
import Nav from "./components/Nav";
import SignUpForm from "./components/SignUpForm";
import { useState } from "react";

export default function SignInPage() {
  const [toggle, setToggle] = useState(false);
  const { data, status } = useSession();

  const handleClick = () => {
    setToggle(!toggle);
  };

  const handleSignOut = () => {
    signOut({ callbackUrl: "/" });
  };

  if (status === "unauthenticated") {
    return (
      <div className="w-full flex flex-col items-center justify-center min-h-screen py-2">
        <div>
          <h1 className="text-4xl font-bold text-center">Mood Board</h1>
          <p className="text-center">
            Learn about your feelings and track your daily emotions
          </p>
        </div>

        <div className="flex flex-col items-center mt-10 rounded-lg sm:shadow-md sm:hover:shadow-2xl p-10">
          <div className="flex">
            <h2
              className={`rounded-md mb-4 text-4xl font-bold px-8 py-4 ${
                !toggle
                  ? "bg-black text-white shadow-2xl"
                  : "bg-white text-black"
              }`}
              onClick={handleClick}
            >
              Sign In
            </h2>
            <h2
              className={`rounded-md mb-4 text-4xl font-bold px-8 py-4 ${
                toggle
                  ? "bg-black text-white shadow-2xl"
                  : "bg-white text-black"
              }`}
              onClick={handleClick}
            >
              Sign Up
            </h2>
          </div>

          {!toggle ? (
            <>
              <CredentialsSignIn />
              <span className="text-2xl font-semibold text-black text-center mt-8">
                Or
              </span>
              <GoogleSignIn />
            </>
          ) : (
            <SignUpForm />
          )}
        </div>
      </div>
    );
  }

  if (status === "authenticated") {
    return (
      <>
        <Nav />
        <div className="flex flex-col justify-center items-center">
          <div className="max-w-sm p-4">
            {JSON.stringify(data)}
            {/* <p>User ID: {data?.user?.id}</p> */}
          </div>

          <button className="bg-black text-white p-4" onClick={handleSignOut}>
            Log Out
          </button>
        </div>
      </>
    );
  }
}
