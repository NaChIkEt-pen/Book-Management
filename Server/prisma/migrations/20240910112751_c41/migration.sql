/*
  Warnings:

  - You are about to alter the column `path` on the `book` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(191)`.

*/
-- AlterTable
ALTER TABLE `book` MODIFY `path` VARCHAR(191) NOT NULL;
