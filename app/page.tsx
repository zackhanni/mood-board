"use client";

import { signOut, useSession } from "next-auth/react";
import UserData from "./components/UserData";
import SignInLandingPage from "./components/SignInLandingPage";

export default function SignInPage() {
  const { data, status } = useSession();

  const handleSignOut = () => {
    signOut({ callbackUrl: "/" });
  };

  if (status === "unauthenticated") {
    return <SignInLandingPage />;
  }

  if (status === "authenticated") {
    return (
      <>
        <div className="flex flex-col justify-center items-center">
          <div className="max-w-sm py-16">
            {/* {JSON.stringify(data)} */}
            <p className="pb-4 underline">You are currently logged in as:</p>
            <UserData />
          </div>

          <button className="bg-black text-white p-4" onClick={handleSignOut}>
            Log Out
          </button>
        </div>
      </>
    );
  }
}
