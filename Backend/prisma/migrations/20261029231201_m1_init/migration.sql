-- CreateTable
CREATE TABLE "OccupantCount" (
    "id" SERIAL NOT NULL,
    "month" TEXT NOT NULL,
    "r1" INTEGER NOT NULL DEFAULT 0,
    "r2" INTEGER NOT NULL DEFAULT 0,
    "r3" INTEGER NOT NULL DEFAULT 0,
    "r4" INTEGER NOT NULL DEFAULT 0,
    "r5" INTEGER NOT NULL DEFAULT 0,
    "r6" INTEGER NOT NULL DEFAULT 0,
    "r7" INTEGER NOT NULL DEFAULT 0,
    "r8" INTEGER NOT NULL DEFAULT 0,
    "r9" INTEGER NOT NULL DEFAULT 0,
    "r10" INTEGER NOT NULL DEFAULT 0,
    "r11" INTEGER NOT NULL DEFAULT 0,
    "r12" INTEGER NOT NULL DEFAULT 0,
    "r13" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "OccupantCount_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RoomBillsRecords" (
    "id" SERIAL NOT NULL,
    "month" TEXT NOT NULL,
    "r1" INTEGER NOT NULL DEFAULT 0,
    "r2" INTEGER NOT NULL DEFAULT 0,
    "r3" INTEGER NOT NULL DEFAULT 0,
    "r4" INTEGER NOT NULL DEFAULT 0,
    "r5" INTEGER NOT NULL DEFAULT 0,
    "r6" INTEGER NOT NULL DEFAULT 0,
    "r7" INTEGER NOT NULL DEFAULT 0,
    "r8" INTEGER NOT NULL DEFAULT 0,
    "r9" INTEGER NOT NULL DEFAULT 0,
    "r10" INTEGER NOT NULL DEFAULT 0,
    "r11" INTEGER NOT NULL DEFAULT 0,
    "r12" INTEGER NOT NULL DEFAULT 0,
    "r13" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "RoomBillsRecords_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MeterReadings" (
    "id" SERIAL NOT NULL,
    "month" TEXT NOT NULL,
    "r1" INTEGER NOT NULL DEFAULT 0,
    "r2" INTEGER NOT NULL DEFAULT 0,
    "r3" INTEGER NOT NULL DEFAULT 0,
    "r4" INTEGER NOT NULL DEFAULT 0,
    "r5" INTEGER NOT NULL DEFAULT 0,
    "r6" INTEGER NOT NULL DEFAULT 0,
    "r7" INTEGER NOT NULL DEFAULT 0,
    "r8" INTEGER NOT NULL DEFAULT 0,
    "r9" INTEGER NOT NULL DEFAULT 0,
    "r10" INTEGER NOT NULL DEFAULT 0,
    "r11" INTEGER NOT NULL DEFAULT 0,
    "r12" INTEGER NOT NULL DEFAULT 0,
    "r13" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "MeterReadings_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "OccupantCount_month_key" ON "OccupantCount"("month");

-- CreateIndex
CREATE INDEX "OccupantCount_month_idx" ON "OccupantCount"("month");

-- CreateIndex
CREATE UNIQUE INDEX "RoomBillsRecords_month_key" ON "RoomBillsRecords"("month");

-- CreateIndex
CREATE INDEX "RoomBillsRecords_month_idx" ON "RoomBillsRecords"("month");

-- CreateIndex
CREATE UNIQUE INDEX "MeterReadings_month_key" ON "MeterReadings"("month");

-- CreateIndex
CREATE INDEX "MeterReadings_month_idx" ON "MeterReadings"("month");
