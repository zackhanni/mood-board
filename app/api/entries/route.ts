import { connectToDatabase } from "@/helpers/server-helpers";
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma";

// make a new entry
// api/entries
export const POST = async (req: Request, res: Response) => {
  try {
    const { feeling, thoughts, email } = await req.json();
    if (!feeling || !thoughts || !email) {
      return NextResponse.json({ message: "Invalid Data " });
    }
    await connectToDatabase();
    const entry = await prisma.entry.create({
      data: {
        feeling,
        thoughts,
        user: {
          connect: {
            email: email,
          },
        },
      },
    });

    return NextResponse.json({ entry }, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: (error as Error).message, stack: (error as Error).stack },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
};

// get all entries for a user
// api/entries
export const GET = async (req: NextRequest) => {
  try {
    await connectToDatabase();
    const userEmail = req.nextUrl.searchParams.get("email");
    if (!userEmail) {
      return NextResponse.json(
        { error: "Email parameter is required" },
        { status: 400 }
      );
    }
    const entries = await prisma.entry.findMany({
      where: {
        user: {
          email: userEmail,
        },
      },
    });
    return NextResponse.json({ entries }, { status: 200 });
  } catch (error) {
    console.error(error); // Log the error
    return NextResponse.json({ error: "Server Error" }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};
