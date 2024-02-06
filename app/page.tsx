"use client";

import { signOut, useSession } from "next-auth/react";
import SignInLandingPage from "./components/SignInLandingPage";
import { useRouter } from "next/navigation";

export default function SignInPage() {
  const { data, status } = useSession();
  const router = useRouter();

  const handleSignOut = () => {
    signOut({ callbackUrl: "/" });
  };

  if (status === "unauthenticated") {
    return <SignInLandingPage />;
  }

  if (status === "authenticated") {
    return <>{router.push("/settings")}</>;
  }
}
