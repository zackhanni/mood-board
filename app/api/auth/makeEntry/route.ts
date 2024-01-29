import { connectToDatabase } from "@/helpers/server-helpers"
import prisma from "@/prisma";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  try {
    const { feeling, thoughts, email } = await req.json()
    if (!feeling || !thoughts || !email)
      return NextResponse.json({ message: "Invalid Data " })
    await connectToDatabase()
    const entry = await prisma.entry.create({
      data: {
        feeling,
        thoughts,
        user: {
          connect: {
            email: email
          }
        }
      }
    })
    return NextResponse.json({ entry }, { status: 201 })
  } catch (error) {
    console.log(error)
    return NextResponse.json({ error: (error as Error).message, stack: (error as Error).stack },{ status: 500 })
  } finally {
    await prisma.$disconnect()
  }
}