import { connectToDatabase } from "@/helpers/server-helpers";
import prisma from "@/prisma";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

// create a new user
// POST api/user/update
export const POST = async (req: Request) => {
  try {
    const { name, email, password } = await req.json();
    if (!name || !email || !password) {
      console.log(
        `Validation failed: name=${name}, email=${email}, password=${password}`
      );
      return NextResponse.json({ message: "Invalid Data" }, { status: 422 });
    }

    const existingUser = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });
    if (existingUser) {
      console.error("Email already in use");
      return NextResponse.json(
        { message: "Email already in use (in /create/route)" },
        { status: 409 }
      );
    }

    // encrypt the password before going to db
    const hashedPassword = await bcrypt.hash(password, 10);
    await connectToDatabase();
    console.log(`Connected to database to create a user`);
    //create the user
    const user = await prisma.user.create({
      data: {
        email,
        name,
        hashedPassword,
      },
    });
    return NextResponse.json({ user }, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: (error as Error).message },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
};
