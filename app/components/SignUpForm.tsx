import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function SignUpForm() {
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

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

    try {
      // const findEmail = {
      //   email: email,
      // };

      // // Check is user exists already
      // console.log(`Checking for user with email: ${email}`);
      // const userExists = await axios.post("api/user/find", findEmail);
      // if (userExists.data.exists) {
      //   setError("Email already in use");
      //   return;
      // }

      // create user if email does'nt exist in db
      const registerResponse = await axios.post("/api/user/create", {
        name,
        email,
        password,
      });
      alert(`User ${name} was created successfully!`);
      router.push("/");
    } catch (error: any) {
      console.error("Error creating user:", error);
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        const { status, data } = error.response;
        switch (status) {
          case 422:
            setError("Invalid data provided");
            break;
          case 409:
            setError("Email already in use");
            break;
          case 500:
            setError("An error occurred while creating the user");
            break;
          default:
            setError("An unknown error occurred");
        }
      } else if (error.request) {
        // The request was made but no response was received
        setError("No response received from the server");
      } else {
        // Something happened in setting up the request that triggered an Error
        setError("An error occurred while setting up the request");
      }
    }
  };

  return (
    <form
      className="w-full mt-8 text-black font-semibold flex flex-col"
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
        placeholder="Name"
        required
        className="w-full px-4 py-3 mb-4 border border-gray-300 rounded-md"
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        required
        className="w-full px-4 py-3 mb-4 border border-gray-300 rounded-md"
      />

      <input
        type="password"
        name="password"
        placeholder="Password"
        required
        className="w-full px-4 py-3 mb-4 border border-gray-300 rounded-md"
      />

      <button
        type="submit"
        className="w-full h-14 px-6 hover:text-white text-black transition-colors duration-300 hover:bg-black rounded-lg focus:shadow-outline bg-white border-black border-4 hover:underline"
      >
        Create an account
      </button>
    </form>
  );
}
