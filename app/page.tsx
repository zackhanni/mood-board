"use client";

import Image from "next/image";
import googleLogo from "@/public/google.png";
import {
  CredentialsSignInButton,
  GoogleSignInButton,
} from "@/app/components/AuthButtons";
import { getServerSession } from "next-auth";
import { authConfig } from "@/app/lib/auth";
import { redirect } from "next/navigation";
import { CredentialsLogInForm } from "@/app/components/CredentialsLogInForm";
import { getCsrfToken } from "next-auth/react";
import { signOut, useSession } from "next-auth/react";
import { SessionProvider } from "next-auth/react";
import Nav from "./components/Nav";
import SignUpForm from "./components/SignUpForm";

export default function SignInPage() {
  const { data, status } = useSession();

  const handleSignOut = () => {
    signOut({ callbackUrl: "/" });
  };

  // const session = await getServerSession(authConfig);
  // console.log("Session: ", session);
  // if (session) return redirect("/mental-check-in");

  if (status === "unauthenticated") {
    return (
      <div className="w-full flex flex-col items-center justify-center min-h-screen py-2">
        <div>
          <h1 className="text-4xl font-bold text-center">Mood Board</h1>
          <p>Learn about your feelings and track your daily emotions</p>
        </div>

        <div className="flex flex-col items-center mt-10 p-10 rounded-lg shadow-md hover:shadow-2xl">
          <h2 className="mt-10 mb-4 text-4xl font-bold">Sign In</h2>
          <GoogleSignInButton />
          <span className="text-2xl font-semibold text-black text-center mt-8">
            Or
          </span>
          {/* <CredentialsSignInButton /> */}
          <CredentialsLogInForm />
          <span className="text-2xl font-semibold text-black text-center mt-8">
            Or... Sign up
          </span>
          <SignUpForm />
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
