import { useSession } from "next-auth/react";
import Image from "next/image";

export default function UserData() {
  const { data: session } = useSession();
  const username = session?.user?.name || "Unable to fetch name";
  const email = session?.user?.email || "Unable to fetch email";
  const profileImage = session?.user?.image;

  return (
    <div className="flex flex-col items-center justify-center">
      <Image src={profileImage} alt="Profile Image" width={100} height={100} />
      <p>{username}</p>
      <p>{email}</p>
    </div>
  );
}
