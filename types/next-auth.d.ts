import NextAuth from "next-auth";

// method 3
declare module "next-auth" {
  interface User {
    id: string;
  }

  interface Session extends DefaultSession {
    user?: User;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
  }
}

// method 1
// declare module "next-auth" {
//   interface Session {
//     user: {
//       id: string;
//       name: string;
//       email: string;
//       image: string;
//     };
//   }
// }

// method 2
// import { type DefaultSession } from "next-auth";

// declare module "next-auth" {
//   interface Session {
//     user?: {
//       id: string;
//     } & DefaultSession["user"];
//   }
// }
