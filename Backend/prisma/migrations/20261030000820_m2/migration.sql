/*
  Warnings:

  - You are about to drop the column `month` on the `MeterReadings` table. All the data in the column will be lost.
  - You are about to drop the column `month` on the `OccupantCount` table. All the data in the column will be lost.
  - You are about to drop the column `month` on the `RoomBillsRecords` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[yearMonth]` on the table `MeterReadings` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[yearMonth]` on the table `OccupantCount` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[yearMonth]` on the table `RoomBillsRecords` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `yearMonth` to the `MeterReadings` table without a default value. This is not possible if the table is not empty.
  - Added the required column `yearMonth` to the `OccupantCount` table without a default value. This is not possible if the table is not empty.
  - Added the required column `yearMonth` to the `RoomBillsRecords` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "MeterReadings_month_idx";

-- DropIndex
DROP INDEX "MeterReadings_month_key";

-- DropIndex
DROP INDEX "OccupantCount_month_idx";

-- DropIndex
DROP INDEX "OccupantCount_month_key";

-- DropIndex
DROP INDEX "RoomBillsRecords_month_idx";

-- DropIndex
DROP INDEX "RoomBillsRecords_month_key";

-- AlterTable
ALTER TABLE "MeterReadings" DROP COLUMN "month",
ADD COLUMN     "yearMonth" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "OccupantCount" DROP COLUMN "month",
ADD COLUMN     "yearMonth" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "RoomBillsRecords" DROP COLUMN "month",
ADD COLUMN     "yearMonth" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "MeterReadings_yearMonth_key" ON "MeterReadings"("yearMonth");

-- CreateIndex
CREATE INDEX "MeterReadings_yearMonth_idx" ON "MeterReadings"("yearMonth");

-- CreateIndex
CREATE UNIQUE INDEX "OccupantCount_yearMonth_key" ON "OccupantCount"("yearMonth");

-- CreateIndex
CREATE INDEX "OccupantCount_yearMonth_idx" ON "OccupantCount"("yearMonth");

-- CreateIndex
CREATE UNIQUE INDEX "RoomBillsRecords_yearMonth_key" ON "RoomBillsRecords"("yearMonth");

-- CreateIndex
CREATE INDEX "RoomBillsRecords_yearMonth_idx" ON "RoomBillsRecords"("yearMonth");
