/*
  Warnings:

  - Added the required column `Discount_Price` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Made the column `Product_Name` on table `Product` required. This step will fail if there are existing NULL values in that column.
  - Made the column `Price` on table `Product` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "Discount_Price" DOUBLE PRECISION NOT NULL,
ALTER COLUMN "Product_Name" SET NOT NULL,
ALTER COLUMN "Price" SET NOT NULL;
