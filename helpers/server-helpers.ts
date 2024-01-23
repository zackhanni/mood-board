// "use client"

import prisma from "@/app/lib/prisma"

export const connectToDatabase = async () => {
    try {
        await prisma.$connect()
    } catch (error) {
        console.log(error);
        throw new Error("Unable to connect to database")
    } 
    // finally {
    //     await prisma.$disconnect()
    // }
}