import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();

export default db;

// TODO: This code work only in development in producion this must be little bit different