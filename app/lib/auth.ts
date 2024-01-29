import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import bcrypt from "bcrypt";
import prisma from "@/prisma";
import { connectToDatabase } from "@/helpers/server-helpers";

export const authConfig: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),

    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "example@example.com",
        },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        if (!credentials || !credentials.email || !credentials.password)
          return null;
         
          try {
            await connectToDatabase()
            const user = await prisma.user.findFirst(
              {where: { email: credentials.email }
            });

            if (!user?.hashedPassword) {
              return null
            }

            const isPasswordCorrect = await bcrypt.compare(
              credentials.password, 
              user.hashedPassword
            )
            if (isPasswordCorrect) {
              return user
            }

            return null
          } catch (error) {
            console.log(error)
            return null
          } finally {
            await prisma.$disconnect()
          }
      },
    }),
  ],
  secret: process.env.NEXTAUTH_URL,
  }


// double check these 2 functions and where they are being called.
// export async function loginIsRequiredServer() {
//   const session = await getServerSession(authConfig);
//   if (!session) return redirect("/");
// }

// export function loginIsRequiredClient() {
//   if (typeof window !== "undefined") {
//     const session = useSession();
//     const router = useRouter();
//     if (!session) router.push("/");
//   }
// }