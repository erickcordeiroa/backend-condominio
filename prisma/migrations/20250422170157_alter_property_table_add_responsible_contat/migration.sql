/*
  Warnings:

  - Added the required column `responsiblePerson` to the `properties` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "properties" ADD COLUMN     "responsiblePerson" TEXT NULL,
ADD COLUMN     "whatsappContact" TEXT;
