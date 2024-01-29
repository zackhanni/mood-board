import { connectToDatabase } from "@/helpers/server-helpers"
import { NextRequest, NextResponse } from "next/server"
import prisma from "@/app/lib/prisma"


export const GET = async (req: NextRequest) => {
    try {
        await connectToDatabase()
        const userEmail = req.nextUrl.searchParams.get("email")
        if (!userEmail) {
            return NextResponse.json({ error: "Email parameter is required"}, { status: 400 })
        }
        const entries = await prisma.entry.findMany({
            where: {
                user: {
                    email: userEmail
                }
            }
        })
        return NextResponse.json({ entries }, { status: 200 })
    } catch (error) {
        console.error(error); // Log the error
        return NextResponse.json({ error: "Server Error" }, { status: 500 });
    } finally {
        await prisma.$disconnect()   
    }
}