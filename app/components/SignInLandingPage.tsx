import { GoogleSignIn, CredentialsSignIn } from "../components/SignInForms";
import SignUpForm from "../components/SignUpForm";
import { useState } from "react";

export default function SignInLandingPage() {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle(!toggle);
  };

  return (
    <div className="pt-8 sm:pt-16">
      <div className="flex flex-col items-center">
        <section className="flex flex-col items-center rounded-lg shadow-md sm:hover:shadow-2xl pb-8 max-w-sm duration-300">
          <div className="w-full flex text-center">
            <h2
              className={`duration-300 py-3 w-1/2 rounded-tl-lg ${
                toggle
                  ? "bg-black/10 border-b border-r text-black/50 border-black/30 hover:underline"
                  : "bg-white text-black"
              }`}
              onClick={handleClick}
            >
              Log In
            </h2>
            <h2
              className={`duration-300 py-3 w-1/2 rounded-tr-xl ${
                !toggle
                  ? "bg-black/10 border-b border-l text-black/50 border-black/30 hover:underline"
                  : "bg-white text-black"
              }`}
              onClick={handleClick}
            >
              Sign Up
            </h2>
          </div>

          <div className="px-8">
            {!toggle ? (
              <>
                <CredentialsSignIn />
                <GoogleSignIn />
              </>
            ) : (
              <SignUpForm />
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
