// "use client";

import { useState } from "react";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";
import { connectToDatabase } from "@/helpers/server-helpers";
import prisma from "../lib/prisma";

// objectives
// await server connect.
// search for user email in db compared to form email
// if there is no match, create new user entry with form data

// interface NewUser {
//   email: string;
//   name: string;
//   password: string;
// }

export default function AuthSignUp() {
  const [newUser, setNewUser] = useState({
    email: "",
    name: "",
    hashedPassword: "",
  });
  const [error, setError] = useState<string | null>(null);
  //   const router = useRouter();

  const userExists = async () => {
    await connectToDatabase();
    const dbUser = await prisma.user.findFirst({
      where: { email: newUser.email },
    });
    return dbUser !== null;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    setNewUser(Object.fromEntries(data));

    if (await userExists()) {
      console.log("User already exists");
      setError("User already exists");
      return;
    }

    //     try {
    //       await prisma.user.create({
    //         data: {
    //           email: newUser.email,
    //           name: newUser.name,
    //           password: newUser.password,
    //         },
    //       });
    //       console.log(`User ${newUser.name} was created`);
    //       router.push("/login");
    //     } catch (error) {
    //       console.error("Error creating user:", error);
    //       setError("Error creating user");
    //     }
    //   };

    if (!userExists) {
      try {
        const createdUser = await prisma.user.create({
          data: {
            email: newUser.email,
            name: newUser.name,
            password: newUser.password,
          },
        });
        console.log(`User ${createdUser.name} was created`);
      } catch (error) {
        console.error("Error creating user:", error);
      }
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
