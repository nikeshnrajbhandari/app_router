/*
  Warnings:

  - Made the column `image_type` on table `Images` required. This step will fail if there are existing NULL values in that column.
  - Made the column `slug` on table `Product` required. This step will fail if there are existing NULL values in that column.
  - Made the column `category_id` on table `Product` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Images" ALTER COLUMN "image_type" SET NOT NULL;

-- AlterTable
ALTER TABLE "Product" ALTER COLUMN "slug" SET NOT NULL,
ALTER COLUMN "category_id" SET NOT NULL;

-- CreateTable
CREATE TABLE "Size" (
    "id" BIGSERIAL NOT NULL,
    "Size_Name" VARCHAR NOT NULL DEFAULT '100',
    "amount" INTEGER NOT NULL,

    CONSTRAINT "Size_pkey" PRIMARY KEY ("id")
);
