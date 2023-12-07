"use client";

import { useEffect, useState } from "react";
import PasswordPrompt from "./components/PasswordPrompt";
import FeelingApp from "./components/FeelingApp";

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const userPassword = window.sessionStorage.getItem("password");
    if (userPassword === process.env.NEXT_PUBLIC_PAGE_PASSWORD) {
      setIsLoggedIn(true);
    }
  }, []);

  if (!isLoggedIn) {
    return <PasswordPrompt />;
  } else {
    return (
      <main className="flex flex-col items-center justify-center">
        <FeelingApp />
      </main>
    );
  }
}
