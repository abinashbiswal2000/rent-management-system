import { PrismaClient } from "../generated/prisma/client.js";
import { PrismaPg } from "@prisma/adapter-pg";

const dbUrl = process.env.DATABASE_URL;

if ( dbUrl == null ) {
    throw new Error("DB URL should not be Null");
}

const adapter = new PrismaPg({connectionString: dbUrl});

const prisma = new PrismaClient({adapter: adapter});

export { prisma };