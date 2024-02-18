"use client";

import { signOut, useSession } from "next-auth/react";
import SignInLandingPage from "../components/SignInLandingPage";
import { useRouter } from "next/navigation";
import LandingLearnMore from "../components/LandingLearnMore";
export default function Connect() {
  const { status } = useSession();
  const router = useRouter();
  if (status === "unauthenticated") {
    return (
      <>
        <SignInLandingPage />
        {/* <LandingLearnMore /> */}
      </>
    );
  }
  if (status === "authenticated") {
    return <>{router.push("/settings")}</>;
  }
}
