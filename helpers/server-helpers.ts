// "use client"

import prisma from "@/prisma";

export const connectToDatabase = async () => {
  try {
    await prisma.$connect();
    console.log("Successfully connected to the database");
  } catch (error) {
    console.log(error);
    throw new Error("Unable to connect to database");
  }
};
