"use client";

import Image from "next/image";
import googleLogo from "@/public/google.png";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function GoogleSignIn() {
  const handleGoogleClick = () => {
    signIn("google");
  };

  return (
    <button
      onClick={handleGoogleClick}
      className="w-full flex items-center font-semibold justify-center h-14 px-6 mt-4 text-xl  transition-colors duration-300 bg-white hover:bg-black border-4 border-black text-black hover:text-white rounded-lg focus:shadow-outline hover:translate-y-1"
    >
      <Image src={googleLogo} alt="Google Logo" width={20} height={20} />
      <span className="ml-4">Continue with Google</span>
    </button>
  );
}

interface CredentialsFormProps {
  csrfToken?: string;
}

export function CredentialsSignIn(props: CredentialsFormProps) {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  const handleCredentialsSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget as HTMLFormElement);

    const signInResponse = await signIn("credentials", {
      email: data.get("email"),
      password: data.get("password"),
      redirect: false,
    });

    if (signInResponse && !signInResponse.error) {
      //Redirect to mental check in questions (/mental-check-in)
      // router.push("/mental-check-in");
    } else {
      console.log("Error: ", signInResponse);
      setError("Your Email or Password is wrong!");
    }
  };

  return (
    <form
      className="w-full mt-8 text-xl text-black font-semibold flex flex-col"
      onSubmit={handleCredentialsSubmit}
    >
      {error && (
        <span className="p-4 mb-2 text-lg font-semibold text-white bg-red-500 rounded-md">
          {error}
        </span>
      )}
      <input
        type="email"
        name="email"
        placeholder="Email"
        required
        className="w-full px-4 py-4 mb-4 border border-gray-300 rounded-md"
      />

      <input
        type="password"
        name="password"
        placeholder="Password"
        required
        className="w-full px-4 py-4 mb-4 border border-gray-300 rounded-md"
      />

      <button
        type="submit"
        className="w-full h-14 px-6 mt-4 text-lg hover:text-white text-black transition-colors duration-150 hover:bg-black rounded-lg focus:shadow-outline bg-white border-black border-4 hover:translate-y-1"
      >
        Log in
      </button>
    </form>
  );
}
