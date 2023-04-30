/*
  Warnings:

  - You are about to drop the column `customId` on the `File` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "File" DROP COLUMN "customId",
ADD COLUMN     "externalId" TEXT NOT NULL DEFAULT '1000';
