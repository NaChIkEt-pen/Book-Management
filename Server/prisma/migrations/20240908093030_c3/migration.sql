/*
  Warnings:

  - A unique constraint covering the columns `[bookName,ownerId]` on the table `Book` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Book_bookName_ownerId_key` ON `Book`(`bookName`, `ownerId`);
