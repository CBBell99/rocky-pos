/*
  Warnings:

  - You are about to drop the `table` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "employees" DROP CONSTRAINT "employees_tableId_fkey";

-- DropForeignKey
ALTER TABLE "orders" DROP CONSTRAINT "orders_tableId_fkey";

-- DropTable
DROP TABLE "table";

-- CreateTable
CREATE TABLE "tables" (
    "id" SERIAL NOT NULL,
    "available" BOOLEAN DEFAULT false,

    CONSTRAINT "tables_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "employees" ADD CONSTRAINT "employees_tableId_fkey" FOREIGN KEY ("tableId") REFERENCES "tables"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_tableId_fkey" FOREIGN KEY ("tableId") REFERENCES "tables"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
