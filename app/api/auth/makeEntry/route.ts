import { connectToDatabase } from "@/helpers/server-helpers"
import prisma from "@/app/lib/prisma";
import { NextResponse } from "next/server";

export const POST = async (req: Request, session: any) => {
    try {
        // console.log(session);
        const { feeling, thoughts, createdAt } = await req.json()
        await connectToDatabase()
        if (!session || !session.user || !session.user.id) {
            throw new Error('User ID not found in session');
        }
        const newEntry = await prisma.entry.create({
            data: {
                feeling: feeling,
                thoughts: thoughts,
                createdAt: createdAt,
                user: {
                  connect: {
                    // having trouble with Postman seeing the session ID
                    id: session.user.id,
                 },
                },
              },
        })
        return NextResponse.json({ newEntry }), { status: 201 }
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: (error as Error).message }, { status: 500 });
      } finally {
        await prisma.$disconnect();
      }
}