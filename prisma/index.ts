// im not sure i need this page. I added it because of a tutorial but dont remember actually setting it up anywhere.

//@ts-nocheck
import { PrismaClient } from "@prisma/client";


let prisma: PrismaClient;
declare global {
    namespace NodeJS {
        interface Global {
            prisma: PrismaClient;
        }
    }
}

if (process.env.NODE_ENV === "production") {
    prisma = new PrismaClient();
} else {
    if (!global.prisma) {
        global.prisma = new PrismaClient();
    }
    prisma = global.prisma
}

export default prisma