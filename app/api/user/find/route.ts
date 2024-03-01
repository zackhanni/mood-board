import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/prisma";
import { connectToDatabase } from "@/helpers/server-helpers";
import { NextResponse } from "next/server";

export const POST = async (req: Request, res: NextApiResponse) => {
  const { email } = await req.json();

  if (!email) {
    console.error(`email is ${email}`);
    return NextResponse.json({ message: "Email is required" }, { status: 400 });
  }

  try {
    console.log(`Searching for user with email: ${email}`);
    const userExists = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    console.log(userExists);
    if (userExists) {
      console.log("User exists");
      return NextResponse.json({ exists: true }, { status: 200 });
    } else {
      console.log("User does not exist. Time to create one.");
      return NextResponse.json({ exists: false }, { status: 200 });
    }
  } catch (error) {
    console.error("Error checking user existence:", error);
    res.status(500).json({ message: "Server error" });
  }

  //   try {
  //     await connectToDatabase();
  //     const user = await prisma.user.findFirst({ where: { email } });
  //     return NextResponse.json({ userExists: user !== null });
  //   } catch (error) {
  //     console.log(error);
  //     return NextResponse.json(
  //       { message: "Server error or user already exists" },
  //       { status: 500 }
  //     );
  //   } finally {
  //     await prisma.$disconnect();
  //   }
};
