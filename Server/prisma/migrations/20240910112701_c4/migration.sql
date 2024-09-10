/*
  Warnings:

  - Added the required column `path` to the `Book` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Book` ADD COLUMN `path` VARCHAR(255) NOT NULL DEFAULT 'default_path';

