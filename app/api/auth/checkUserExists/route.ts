// import { NextApiRequest, NextApiResponse } from "next";
// import prisma from "@/app/lib/prisma";
// import { connectToDatabase } from "@/helpers/server-helpers";
// import { NextResponse } from "next/server";

// export const GET = async (req: NextApiRequest) => {
//    const { email } = req.body;

//    try {
//       await connectToDatabase()
//       const user = await prisma.user.findFirst({ where: { email } })
//       return NextResponse.json({ userExists: user !== null })

//    } 
//    catch (error) {
//       console.log(error);
//       return NextResponse.json({ message: "Server Error" }, { status: 500 });
//     } finally {
//       await prisma.$disconnect();
//     }

// }




