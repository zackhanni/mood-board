"use client";

import { signOut, useSession } from "next-auth/react";
import SignInLandingPage from "../components/SignInLandingPage";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import LandingLearnMore from "../components/LandingLearnMore";
export default function Connect() {
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/settings");
    }
  }, [status, router]);

  if (status === "unauthenticated") {
    return (
      <>
        <SignInLandingPage />
        {/* <LandingLearnMore /> */}
      </>
    );
  }
}
