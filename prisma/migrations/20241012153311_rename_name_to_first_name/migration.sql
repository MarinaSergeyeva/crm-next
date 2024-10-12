/*
  Warnings:

  - You are about to drop the column `name` on the `Staff` table. All the data in the column will be lost.
  - Added the required column `firstName` to the `Staff` table without a default value. This is not possible if the table is not empty.
  - Made the column `gender` on table `Staff` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Staff" DROP COLUMN "name",
ADD COLUMN     "firstName" TEXT NOT NULL,
ALTER COLUMN "gender" SET NOT NULL,
ALTER COLUMN "gender" DROP DEFAULT,
ALTER COLUMN "gender" SET DATA TYPE TEXT;
