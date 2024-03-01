import { connectToDatabase } from "@/helpers/server-helpers";
import prisma from "@/prisma";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

// create a new user
// POST api/user/update
export const POST = async (req: Request) => {
  const { name, email, password } = await req.json();

  try {
    // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // if (!emailRegex.test(email)) {
    //   return NextResponse.json(
    //     { message: "Invalid email format" },
    //     { status: 422 }
    //   );
    // }

    // const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    // if (!passwordRegex.test(password)) {
    // return NextResponse.json({ message: "Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, and one number" }, { status: 422 })
    //}

    // if (!name) {
    //   return NextResponse.json(
    //     { message: "Name is required" },
    //     { status: 422 }
    //   );
    // } else if (!email) {
    //   return NextResponse.json(
    //     { message: "Email is required" },
    //     { status: 422 }
    //   );
    // } else if (!password) {
    //   return NextResponse.json(
    //     { message: "Password is required" },
    //     { status: 422 }
    //   );
    // }

    if (!name || !email || !password) {
      console.log(
        `Validation failed: name=${name}, email=${email}, password=${password}`
      );
      return NextResponse.json({ message: "Invalid Data" }, { status: 422 });
    }

    const userExists = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });
    if (userExists) {
      console.error("Email already in use");
      return NextResponse.json(
        { message: "Email already in use (in /create/route)" },
        { status: 409 }
      );
    }

    await connectToDatabase();
    console.log(`Connected to database to create a user`);
    const hashedPassword = await bcrypt.hash(password, 10);
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
