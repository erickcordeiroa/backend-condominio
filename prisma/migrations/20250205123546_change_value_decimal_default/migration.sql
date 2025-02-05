/*
  Warnings:

  - You are about to alter the column `fraction` on the `fractions` table. The data in that column could be lost. The data in that column will be cast from `Decimal(10,10)` to `Decimal(10,4)`.

*/
-- AlterTable
ALTER TABLE "fractions" ALTER COLUMN "fraction" SET DATA TYPE DECIMAL(10,4);
