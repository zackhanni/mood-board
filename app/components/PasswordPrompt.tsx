"use client";

import React, { useState } from "react";
import FeelingApp from "./FeelingApp";
import FeelingAppButton from "./FeelingAppButton";

const PasswordPrompt = () => {
  const [password, setPassword] = useState("");
  const [showLogin, setShowLogin] = useState(false);
  const [showDemo, setShowDemo] = useState(false);

  const loginScreen = () => {
    setShowLogin(!showLogin);
  };

  const tryDemo = () => {
    setShowDemo(true);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    // event.preventDefault();
    window.sessionStorage.setItem("password", password);
    // rest of your code
  };

  if (showDemo) {
    return (
      <main className="flex flex-col items-center justify-start sm:max-w-screen-sm w-[90%] h-[90%]">
        <FeelingApp />
      </main>
    );
  }

  if (showLogin) {
    return (
      <div className="flex items-center justify-center">
        <div className="w-[600px] h-[300px]  flex flex-col items-center justify-center">
          <form onSubmit={handleSubmit} className="">
            <label htmlFor="password" className="px-4 text-xl">
              Please enter password to view content
            </label>
            <div className="px-4 py-4">
              <input
                type="password"
                id="password"
                className="py-2"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button type="submit" className="bg-black text-white px-4 py-2">
                Submit
              </button>
              <FeelingAppButton text="Back" onClick={loginScreen} />
            </div>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center">
      <div className="w-[90%] sm:w-[600px] h-[300px] flex flex-col items-center justify-between">
        <h2 className="text-4xl font-bold">Welcome!</h2>
        <p>Login to track and save your progress, or try without signing up.</p>
        <div className="flex gap-4">
          <FeelingAppButton text="Log In" onClick={loginScreen} />
          <FeelingAppButton text="Start Quiz" onClick={tryDemo} />
        </div>
      </div>
    </div>
  );
};

export default PasswordPrompt;
