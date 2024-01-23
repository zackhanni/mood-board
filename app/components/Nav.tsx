import Link from "next/link";
import { signOut } from "next-auth/react";

export default function Nav() {
  const handleSignOut = async () => {
    await signOut({ callbackUrl: "/" });
  };

  return (
    <div className="h-14 w-full top-1 left-0 fixed flex hover:bg-black hover:text-white justify-center hover:shadow-2xl">
      <p className="font-bold p-4 hover:underline" onClick={handleSignOut}>
        Log Out
      </p>
      <Link href="/mental-check-in">
        <p className="font-bold p-4 hover:underline">Mental Check In</p>
      </Link>
      <Link href="/history">
        <p className="font-bold p-4 hover:underline">History</p>
      </Link>
    </div>
  );
}
