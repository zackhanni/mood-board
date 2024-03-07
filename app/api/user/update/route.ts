import { connectToDatabase } from "@/helpers/server-helpers";
import prisma from "@/prisma";
import { NextResponse } from "next/server";

// change a user's name
// PUT api/user/update
export const PUT = async (req: Request) => {
  const { name, email, id } = await req.json();
  await connectToDatabase();
  try {
    const updateUser = await prisma.user.update({
      where: {
        id: id,
      },
      data: {
        name: name,
      },
    });
    return NextResponse.json({ updateUser });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "An error occurred while updating the user." },
      { status: 500 }
    );
  }
};
