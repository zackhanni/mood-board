// OG CODE

// import { PrismaClient } from '@prisma/client'

// let prisma: PrismaClient;

// if (process.env.NODE_ENV === "production") {
//   prisma = new PrismaClient();
// } else {
//   if (!(global as any).prisma) {
//     (global as any).prisma = new PrismaClient();
//   }
//   prisma = (global as any).prisma;
// }

// export default prisma;

// END OG CODE


import jwt from 'jsonwebtoken';

import { PrismaClient } from '@prisma/client';
export const prisma = new PrismaClient();

export async function handleOAuthLogin(accessToken, refreshToken, profile) {
  // Decode the ID token sent by Google
  const decodedToken = jwt.decode(profile.id_token);
 
 // Check if a user with the given email already exists
 const existingUser = await prisma.user.findUnique({
  where: { email: decodedToken.email },
 });

 if (existingUser) {
  // If the user exists, log them in and fetch their data
  // You'll need to implement the login and fetch data logic here
 } else {
  // If the user doesn't exist, create a new user
  const user = await prisma.user.create({
    data: {
      email: decodedToken.email,
      name: decodedToken.name,
      // Add any other fields you want to save from the token
    },
  });
 }


}


