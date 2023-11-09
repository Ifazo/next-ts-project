import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // ... you will write your Prisma Client queries here
}

main()
    .then(async (res) => {
    console.log(res);
  })
  .catch(async (err) => {
    console.error(err);
  });

export const db = prisma;
