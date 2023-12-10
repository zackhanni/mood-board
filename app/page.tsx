// "use client";

// import { useEffect, useState } from "react";
// import PasswordPrompt from "./components/PasswordPrompt";
// import FeelingApp from "./components/FeelingApp";

// export default function Home() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   useEffect(() => {
//     const userPassword = window.sessionStorage.getItem("password");
//     if (userPassword === process.env.NEXT_PUBLIC_PAGE_PASSWORD) {
//       setIsLoggedIn(true);
//     }
//   }, []);

//   if (!isLoggedIn) {
//     return <PasswordPrompt />;
//   } else {
//     return (
//       <main className="flex flex-col items-center justify-center">
//         <FeelingApp />
//       </main>
//     );
//   }
// }

import Image from "next/image";
import googleLogo from "@/public/google.png";
import {
  CredentialsSignInButton,
  GoogleSignInButton,
} from "@/app/components/AuthButtons";
import { getServerSession } from "next-auth";
import { authConfig } from "@/app/lib/auth";
import { redirect } from "next/navigation";
import { CredentialsForm } from "@/app/components/AuthCredentialsForm";
import { getCsrfToken } from "next-auth/react";

export default async function SignInPage() {
  const session = await getServerSession(authConfig);

  const username = session?.user?.name;

  if (typeof document !== "undefined") {
    window.sessionStorage.setItem("username", username || "friend");
  }

  console.log("Session: ", session);

  if (session) return redirect("/mental-check-in");

  return (
    <div className="w-full flex flex-col items-center justify-center min-h-screen py-2">
      <div className="flex flex-col items-center mt-10 p-10 shadow-md">
        <h1 className="mt-10 mb-4 text-4xl font-bold">Sign In</h1>
        <GoogleSignInButton />
        <span className="text-2xl font-semibold text-white text-center mt-8">
          Or
        </span>
        {/* <CredentialsSignInButton /> */}
        <CredentialsForm />
      </div>
    </div>
  );
}
