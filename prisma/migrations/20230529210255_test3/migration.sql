/*
  Warnings:

  - You are about to drop the column `tableId` on the `employees` table. All the data in the column will be lost.
  - Made the column `firstName` on table `employees` required. This step will fail if there are existing NULL values in that column.
  - Made the column `lastName` on table `employees` required. This step will fail if there are existing NULL values in that column.
  - Made the column `orderId` on table `order_items` required. This step will fail if there are existing NULL values in that column.
  - Made the column `menuItemId` on table `order_items` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "employees" DROP CONSTRAINT "employees_tableId_fkey";

-- DropForeignKey
ALTER TABLE "order_items" DROP CONSTRAINT "order_items_menuItemId_fkey";

-- DropForeignKey
ALTER TABLE "order_items" DROP CONSTRAINT "order_items_orderId_fkey";

-- DropForeignKey
ALTER TABLE "orders" DROP CONSTRAINT "orders_employeeId_fkey";

-- DropForeignKey
ALTER TABLE "orders" DROP CONSTRAINT "orders_tableId_fkey";

-- AlterTable
ALTER TABLE "employees" DROP COLUMN "tableId",
ALTER COLUMN "firstName" SET NOT NULL,
ALTER COLUMN "lastName" SET NOT NULL;

-- AlterTable
ALTER TABLE "order_items" ADD COLUMN     "quantity" INTEGER NOT NULL DEFAULT 1,
ALTER COLUMN "orderId" SET NOT NULL,
ALTER COLUMN "menuItemId" SET NOT NULL;

-- CreateTable
CREATE TABLE "_employeesTotables" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_employeesTotables_AB_unique" ON "_employeesTotables"("A", "B");

-- CreateIndex
CREATE INDEX "_employeesTotables_B_index" ON "_employeesTotables"("B");

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "employees"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_tableId_fkey" FOREIGN KEY ("tableId") REFERENCES "tables"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order_items" ADD CONSTRAINT "order_items_menuItemId_fkey" FOREIGN KEY ("menuItemId") REFERENCES "menu_items"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order_items" ADD CONSTRAINT "order_items_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "orders"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_employeesTotables" ADD CONSTRAINT "_employeesTotables_A_fkey" FOREIGN KEY ("A") REFERENCES "employees"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_employeesTotables" ADD CONSTRAINT "_employeesTotables_B_fkey" FOREIGN KEY ("B") REFERENCES "tables"("id") ON DELETE CASCADE ON UPDATE CASCADE;
