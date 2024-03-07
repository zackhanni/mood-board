import { connectToDatabase } from "@/helpers/server-helpers";
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma";

// GET all entries for a user
// api/entries
export const GET = async (req: NextRequest) => {
  try {
    await connectToDatabase();
    const userId = req.nextUrl.searchParams.get("id");
    if (!userId) {
      return NextResponse.json(
        { error: "Unable to use id to get user posts." },
        { status: 400 }
      );
    }
    const entries = await prisma.entry.findMany({
      where: {
        user: {
          id: userId,
        },
      },
    });
    return NextResponse.json({ entries }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Server Error" }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};
