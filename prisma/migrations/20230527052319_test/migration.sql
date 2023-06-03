/*
  Warnings:

  - Made the column `employeeId` on table `orders` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "orders" ALTER COLUMN "employeeId" SET NOT NULL;
