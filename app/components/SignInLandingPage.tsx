import { GoogleSignIn, CredentialsSignIn } from "../components/SignInForms";
import SignUpForm from "../components/SignUpForm";
import { useState } from "react";

export default function SignInLandingPage() {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle(!toggle);
  };

  return (
    <div className="">
      <div className="flex flex-col items-center">
        <div className="py-4">
          <h1 className="text-2xl font-bold text-center">Mood Board</h1>
          <p className="mx-auto text-center max-w-xs">
            Learn about your feelings and track your daily emotions
          </p>
        </div>

        <div className="flex flex-col items-center rounded-lg sm:shadow-md sm:hover:shadow-2xl p-8 max-w-sm">
          <div className="w-full flex text-center">
            <h2
              className={`hover:underline hover:-translate-y-1 rounded-md font-bold py-3 w-1/2 ${
                !toggle
                  ? "bg-black text-white shadow-2xl"
                  : "bg-white text-black"
              }`}
              onClick={handleClick}
            >
              Sign In
            </h2>
            <h2
              className={`hover:underline hover:-translate-y-1 rounded-md font-bold py-3 w-1/2  ${
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
              <span className="text-black text-center mt-2">Or</span>
              <GoogleSignIn />
            </>
          ) : (
            <SignUpForm />
          )}
        </div>
      </div>
    </div>
  );
}
