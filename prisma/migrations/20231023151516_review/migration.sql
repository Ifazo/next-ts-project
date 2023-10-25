/*
  Warnings:

  - You are about to drop the `reviewAndRatings` table. If the table is not empty, all the data it contains will be lost.
  - Made the column `createdAt` on table `categories` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updatedAt` on table `categories` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "reviewAndRatings" DROP CONSTRAINT "reviewAndRatings_product_fkey";

-- DropForeignKey
ALTER TABLE "reviewAndRatings" DROP CONSTRAINT "reviewAndRatings_user_fkey";

-- AlterTable
ALTER TABLE "categories" ALTER COLUMN "createdAt" SET NOT NULL,
ALTER COLUMN "updatedAt" SET NOT NULL;

-- DropTable
DROP TABLE "reviewAndRatings";

-- CreateTable
CREATE TABLE "reviews" (
    "id" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,
    "review" TEXT NOT NULL,
    "user" TEXT NOT NULL,
    "product" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "reviews_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "reviews" ADD CONSTRAINT "reviews_user_fkey" FOREIGN KEY ("user") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reviews" ADD CONSTRAINT "reviews_product_fkey" FOREIGN KEY ("product") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
