import { useSession } from "next-auth/react";
import Image from "next/image";
import { useState } from "react";
import axios from "axios";
import Button from "./Button";

export default function UserData() {
  const { data: session } = useSession();
  const username = session?.user?.name || "Unable to fetch name";
  const email = session?.user?.email || "Unable to fetch email";
  const [newName, setNewName] = useState("");
  const [showNewNameInput, setShowNewNameInput] = useState(false);
  const profileImage = session?.user?.image;

  const changeName = async (e: React.FormEvent) => {
    // e.preventDefault();
    try {
      // changing to post didnt work either. any cant i make a new account or update a name!!!
      const response = await axios.put("/api/user/update", {
        name: newName,
        email: email,
      });
      setShowNewNameInput(false);
      console.log("User updated successfully: ", response.data);
    } catch (error) {
      console.error("Error updating user: ", error);
    }
  };

  return (
    <div className="bg-[#6C63FF]/20 p-8 rounded-lg">
      {profileImage ? (
        <Image
          src={profileImage}
          alt="Profile Image"
          width={100}
          height={100}
        />
      ) : null}
      <p className="pb-4">You are currently logged in as:</p>
      <div className="flex flex-col items-center space-x-2 space-y-2">
        <p className="">{username}</p>
        <p
          className="text-black/50 text-xs hover:underline"
          onClick={() => setShowNewNameInput(!showNewNameInput)}
        >
          (Change Name)
        </p>
        {showNewNameInput && (
          <form onSubmit={changeName} className="">
            <input
              type="text"
              name="name"
              placeholder="New Name"
              required
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              className="w-full px-4 py-2 mb-2 border border-gray-300 text-sm rounded-xl"
            />
            <Button
              text="Save"
              classes="bg-red-600 rounded-xl text-sm w-full"
              onClick={() =>
                alert("Please log out and in again to see changes.")
              }
            />
          </form>
        )}
        <p className="">{email}</p>
      </div>
    </div>
  );
}
