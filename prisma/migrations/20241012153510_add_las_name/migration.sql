/*
  Warnings:

  - Added the required column `lastName` to the `Staff` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Staff" ADD COLUMN     "lastName" TEXT NOT NULL;