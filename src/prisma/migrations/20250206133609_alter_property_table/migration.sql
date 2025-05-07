/*
  Warnings:

  - You are about to drop the column `saleOrRent` on the `properties` table. All the data in the column will be lost.
  - Added the required column `description` to the `properties` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `properties` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "properties" DROP COLUMN "saleOrRent",
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "type" "SaleOrRent" NOT NULL;
