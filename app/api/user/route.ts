import { connectToDatabase } from "@/helpers/server-helpers"
import prisma from "@/app/lib/prisma"
import { NextResponse } from "next/server"

export const GET = async () => {
    try {
        await connectToDatabase()
        const users = await prisma.user.findMany()
        return NextResponse.json({ users}, { status: 200})
    } catch (error) {
        return NextResponse.json({ error:"Server Error"}, { status: 500 })
    } finally {
        await prisma.$disconnect()
    }
}