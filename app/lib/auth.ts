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
          await connectToDatabase();
          const user = await prisma.user.findFirst({
            where: { email: credentials.email },
          });

          if (!user?.hashedPassword) {
            return null;
          }

          const passwordIsCorrect = await bcrypt.compare(
            credentials.password,
            user.hashedPassword
          );

          if (passwordIsCorrect) {
            // console.log(`the authorize user object is:`);
            // console.log(JSON.stringify(user, null, 2));
            return user;
          }

          return null;
        } catch (error) {
          console.log(error);
          return null;
        }
        // finally {
        //   await prisma.$disconnect();
        // }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    session({ session, token }) {
      if (token && session.user) {
        session.user.id = token.id;
        // console.log("User ID stored in session.user.id");
        // console.log(session.user.id);
      } else {
        console.error("User is undefined in session callback");
      }
      return session;
    },
  },

  secret: process.env.NEXTAUTH_URL,
};
