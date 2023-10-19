import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // ... you will write your Prisma Client queries here
}

main()
    .then(async (res) => {
    console.log(res);
    // await prisma.$disconnect();
  })
  .catch(async (err) => {
    console.error(err);
    // await prisma.$disconnect();
    // process.exit(1);
  });

export const db = prisma;
