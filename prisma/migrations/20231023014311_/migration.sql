/*
  Warnings:

  - You are about to drop the column `product` on the `orders` table. All the data in the column will be lost.
  - Changed the type of `product` on the `wishlists` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "orders" DROP CONSTRAINT "orders_product_fkey";

-- DropForeignKey
ALTER TABLE "wishlists" DROP CONSTRAINT "wishlists_product_fkey";

-- AlterTable
ALTER TABLE "orders" DROP COLUMN "product",
ADD COLUMN     "products" JSONB[];

-- AlterTable
ALTER TABLE "wishlists" DROP COLUMN "product",
ADD COLUMN     "product" JSONB NOT NULL;
