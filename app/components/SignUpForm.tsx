import { useState } from "react";
import axios from "axios";

export default function SignUpForm() {
  const [newUser, setNewUser] = useState({
    email: "",
    name: "",
    password: "",
  });
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      name: { value: string };
      email: { value: string };
      password: { value: string };
    };
    const name = target.name.value;
    const email = target.email.value;
    const password = target.password.value;
    setNewUser({ name, email, password });

    try {
      //   const response = await fetch("/api/auth/checkUserExists", {
      //     method: "POST",
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify({ email }),
      //   });
      //   const data = await response.json();

      //   if (data.userExists) {
      //     setError("Email already in use");
      //     console.log("Email already in use");
      //     return;
      //   }

      const registerResponse = await axios.post("/api/auth/register", newUser);
      console.log(`User ${registerResponse.data.user.name} was created`);
    } catch (error) {
      console.error("Error creating user:", error);
      setError("Error creating user");
    }
  };

  return (
    <form
      className="w-full mt-8 text-xl text-black font-semibold flex flex-col"
      onSubmit={handleSubmit}
    >
      {error && (
        <span className="p-4 mb-2 text-lg font-semibold text-white bg-red-500 rounded-md">
          {error}
        </span>
      )}
      <input
        type="name"
        name="name"
        placeholder="What is your name?"
        required
        className="w-full px-4 py-4 mb-4 border border-gray-300 rounded-md"
      />
      <input
        type="email"
        name="email"
        placeholder="sample@email.com"
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
        className="w-full h-14 px-6 mt-4 text-lg text-white hover:text-black transition-colors duration-150 bg-black rounded-lg focus:shadow-outline hover:bg-white hover:border-black hover:border-4"
      >
        Create an account
      </button>
    </form>
  );
}
