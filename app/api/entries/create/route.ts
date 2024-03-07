import { connectToDatabase } from "@/helpers/server-helpers";
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma";

// make a new entry
// api/entries
export const POST = async (req: Request, res: Response) => {
  try {
    const { feeling, thoughts, userId } = await req.json();
    if (!feeling || !thoughts || !userId) {
      return NextResponse.json({ message: "Invalid Data" });
    }
    await connectToDatabase();
    const entry = await prisma.entry.create({
      data: {
        feeling,
        thoughts,
        user: {
          // once current user is set up, connect with the current user's id
          connect: {
            id: userId,
          },
        },
      },
    });

    return NextResponse.json({ entry }, { status: 201 });
  } catch (error) {
    console.error(error);
    console.log(error);
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 }
    );
  }
};
