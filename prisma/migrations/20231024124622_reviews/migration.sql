/*
  Warnings:

  - You are about to drop the column `user` on the `reviews` table. All the data in the column will be lost.
  - Added the required column `email` to the `reviews` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image` to the `reviews` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `reviews` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "reviews" DROP CONSTRAINT "reviews_user_fkey";

-- AlterTable
ALTER TABLE "reviews" DROP COLUMN "user",
ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "image" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "reviews" ADD CONSTRAINT "reviews_email_fkey" FOREIGN KEY ("email") REFERENCES "users"("email") ON DELETE RESTRICT ON UPDATE CASCADE;
