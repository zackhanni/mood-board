import { connectToDatabase } from "@/helpers/server-helpers"
import prisma from "@/prisma"
import { NextResponse } from "next/server";

// https://www.prisma.io/docs/orm/prisma-client/queries/crud#update

export const POST = async (req: Request) => {
    const {name, email} = await req.json()
    await connectToDatabase()

    try {
        const updateUser = await prisma.user.update({
            where: {
            email: email,
            },
            data: {
            name: name,
            },
        })
        return NextResponse.json({ updateUser })
    } catch (error) {
        console.log(error);
    }



}

