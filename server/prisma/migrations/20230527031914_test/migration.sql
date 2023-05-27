-- CreateEnum
CREATE TYPE "Role" AS ENUM ('HOST', 'KITCHEN', 'ADMIN');

-- CreateEnum
CREATE TYPE "Category" AS ENUM ('BREAKFAST', 'LUNCH', 'DESSERT');

-- CreateTable
CREATE TABLE "employee" (
    "id" SERIAL NOT NULL,
    "firstName" VARCHAR(30),
    "lastName" VARCHAR(50),
    "role" "Role" NOT NULL,
    "passcode" INTEGER,
    "tableId" INTEGER,

    CONSTRAINT "employee_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "menu_item" (
    "id" SERIAL NOT NULL,
    "itemName" VARCHAR(255) NOT NULL,
    "description" VARCHAR(255),
    "price" INTEGER,
    "category" "Category" NOT NULL,

    CONSTRAINT "menu_item_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "order_item" (
    "id" SERIAL NOT NULL,
    "orderId" INTEGER,
    "menuItemId" INTEGER,

    CONSTRAINT "order_item_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "order" (
    "id" SERIAL NOT NULL,
    "employeeId" INTEGER,
    "tableId" INTEGER,
    "createdAt" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "guestCount" INTEGER,

    CONSTRAINT "order_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "table" (
    "id" SERIAL NOT NULL,
    "available" BOOLEAN DEFAULT false,

    CONSTRAINT "table_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "employee" ADD CONSTRAINT "employee_tableId_fkey" FOREIGN KEY ("tableId") REFERENCES "table"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order_item" ADD CONSTRAINT "order_item_menuItemId_fkey" FOREIGN KEY ("menuItemId") REFERENCES "menu_item"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "order_item" ADD CONSTRAINT "order_item_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "order"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "order" ADD CONSTRAINT "order_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "employee"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "order" ADD CONSTRAINT "order_tableId_fkey" FOREIGN KEY ("tableId") REFERENCES "table"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
