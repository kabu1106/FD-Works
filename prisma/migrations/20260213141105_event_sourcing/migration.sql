/*
  Warnings:

  - You are about to drop the column `createdAt` on the `OvertimeSummary` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `OvertimeSummary` table. All the data in the column will be lost.
  - You are about to drop the column `version` on the `OvertimeSummary` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[dutyId,staffId,calculationVersion]` on the table `OvertimeSummary` will be added. If there are existing duplicate values, this will fail.
  - Changed the type of `type` on the `Attendance` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `calculationVersion` to the `OvertimeSummary` table without a default value. This is not possible if the table is not empty.
  - Added the required column `occurredAt` to the `incidents` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `incidents` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "DayType" AS ENUM ('WEEKDAY', 'WEEKLY_DAY_OFF', 'HOLIDAY', 'SUBSTITUTE_HOLIDAY');

-- CreateEnum
CREATE TYPE "IncidentStatus" AS ENUM ('OPEN', 'CLOSED');

-- CreateEnum
CREATE TYPE "AttendanceEventType" AS ENUM ('WORK_STARTED', 'BREAK_STARTED', 'BREAK_ENDED', 'WORK_ENDED');

-- AlterEnum
ALTER TYPE "UserRole" ADD VALUE 'Department';

-- DropIndex
DROP INDEX "OvertimeSummary_dutyId_staffId_version_key";

-- DropIndex
DROP INDEX "OvertimeSummary_dutyId_version_idx";

-- AlterTable
ALTER TABLE "Attendance" DROP COLUMN "type",
ADD COLUMN     "type" "AttendanceEventType" NOT NULL;

-- AlterTable
ALTER TABLE "OvertimeSummary" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt",
DROP COLUMN "version",
ADD COLUMN     "calculatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "calculationVersion" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "incidents" ADD COLUMN     "occurredAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "status" "IncidentStatus" NOT NULL;

-- DropEnum
DROP TYPE "AttendanceType";

-- CreateTable
CREATE TABLE "ProjectionCheckpoint" (
    "projectionName" TEXT NOT NULL,
    "lastEventId" TEXT NOT NULL,
    "lastEventAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ProjectionCheckpoint_pkey" PRIMARY KEY ("projectionName")
);

-- CreateTable
CREATE TABLE "duty_day_types" (
    "id" TEXT NOT NULL,
    "dutyId" TEXT NOT NULL,
    "staffId" INTEGER NOT NULL,
    "dayType" "DayType" NOT NULL,
    "reason" TEXT NOT NULL DEFAULT '',
    "decidedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "decidedBy" TEXT,

    CONSTRAINT "duty_day_types_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "weekly_days_off" (
    "id" TEXT NOT NULL,
    "staffId" INTEGER NOT NULL,
    "date" DATE NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "weekly_days_off_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "holidays" (
    "date" DATE NOT NULL,
    "name" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "holidays_pkey" PRIMARY KEY ("date")
);

-- CreateTable
CREATE TABLE "substitute_holidays" (
    "id" TEXT NOT NULL,
    "staffId" INTEGER NOT NULL,
    "originalHoliday" DATE NOT NULL,
    "substituteDate" DATE NOT NULL,
    "reason" TEXT NOT NULL DEFAULT '',
    "decidedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "decidedBy" TEXT,

    CONSTRAINT "substitute_holidays_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "overtime_slot_resolved" (
    "id" TEXT NOT NULL,
    "dutyId" TEXT NOT NULL,
    "staffId" INTEGER NOT NULL,
    "startAt" TIMESTAMP(3) NOT NULL,
    "endAt" TIMESTAMP(3) NOT NULL,
    "minutes" INTEGER NOT NULL,
    "overtimeRateCategoryId" INTEGER NOT NULL,
    "rateSnapshot" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "overtime_slot_resolved_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "incident_staff_engagements" (
    "id" TEXT NOT NULL,
    "incidentId" TEXT NOT NULL,
    "staffId" INTEGER NOT NULL,
    "engagedFrom" TIMESTAMP(3) NOT NULL,
    "engagedTo" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "incident_staff_engagements_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "attendance_events" (
    "id" TEXT NOT NULL,
    "dutyId" TEXT NOT NULL,
    "staffId" INTEGER NOT NULL,
    "type" "AttendanceEventType" NOT NULL,
    "occurredAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "attendance_events_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "IncidentReadModel" (
    "id" TEXT NOT NULL,
    "dutyId" TEXT NOT NULL,
    "locationId" INTEGER NOT NULL,
    "status" TEXT NOT NULL,
    "occurredAt" TIMESTAMP(3) NOT NULL,
    "closedAt" TIMESTAMP(3),
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "IncidentReadModel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DispatchedVehicle" (
    "id" SERIAL NOT NULL,
    "incidentId" TEXT NOT NULL,
    "vehicleId" INTEGER NOT NULL,
    "dispatchedAt" TIMESTAMP(3) NOT NULL,
    "returnedAt" TIMESTAMP(3),

    CONSTRAINT "DispatchedVehicle_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StaffInVehicle" (
    "id" SERIAL NOT NULL,
    "dispatchedVehicleId" INTEGER NOT NULL,
    "staffId" INTEGER NOT NULL,

    CONSTRAINT "StaffInVehicle_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "ProjectionCheckpoint_lastEventAt_idx" ON "ProjectionCheckpoint"("lastEventAt");

-- CreateIndex
CREATE INDEX "duty_day_types_staffId_dayType_idx" ON "duty_day_types"("staffId", "dayType");

-- CreateIndex
CREATE UNIQUE INDEX "duty_day_types_dutyId_staffId_key" ON "duty_day_types"("dutyId", "staffId");

-- CreateIndex
CREATE UNIQUE INDEX "weekly_days_off_staffId_date_key" ON "weekly_days_off"("staffId", "date");

-- CreateIndex
CREATE INDEX "substitute_holidays_staffId_substituteDate_idx" ON "substitute_holidays"("staffId", "substituteDate");

-- CreateIndex
CREATE UNIQUE INDEX "substitute_holidays_staffId_originalHoliday_key" ON "substitute_holidays"("staffId", "originalHoliday");

-- CreateIndex
CREATE UNIQUE INDEX "substitute_holidays_staffId_substituteDate_key" ON "substitute_holidays"("staffId", "substituteDate");

-- CreateIndex
CREATE INDEX "overtime_slot_resolved_dutyId_staffId_idx" ON "overtime_slot_resolved"("dutyId", "staffId");

-- CreateIndex
CREATE INDEX "overtime_slot_resolved_overtimeRateCategoryId_idx" ON "overtime_slot_resolved"("overtimeRateCategoryId");

-- CreateIndex
CREATE INDEX "incident_staff_engagements_staffId_engagedFrom_engagedTo_idx" ON "incident_staff_engagements"("staffId", "engagedFrom", "engagedTo");

-- CreateIndex
CREATE INDEX "attendance_events_dutyId_staffId_occurredAt_idx" ON "attendance_events"("dutyId", "staffId", "occurredAt");

-- CreateIndex
CREATE UNIQUE INDEX "DispatchedVehicle_incidentId_vehicleId_key" ON "DispatchedVehicle"("incidentId", "vehicleId");

-- CreateIndex
CREATE UNIQUE INDEX "StaffInVehicle_dispatchedVehicleId_staffId_key" ON "StaffInVehicle"("dispatchedVehicleId", "staffId");

-- CreateIndex
CREATE UNIQUE INDEX "OvertimeSummary_dutyId_staffId_calculationVersion_key" ON "OvertimeSummary"("dutyId", "staffId", "calculationVersion");

-- AddForeignKey
ALTER TABLE "duty_day_types" ADD CONSTRAINT "duty_day_types_dutyId_fkey" FOREIGN KEY ("dutyId") REFERENCES "duties"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "duty_day_types" ADD CONSTRAINT "duty_day_types_staffId_fkey" FOREIGN KEY ("staffId") REFERENCES "Staff"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "weekly_days_off" ADD CONSTRAINT "weekly_days_off_staffId_fkey" FOREIGN KEY ("staffId") REFERENCES "Staff"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "substitute_holidays" ADD CONSTRAINT "substitute_holidays_staffId_fkey" FOREIGN KEY ("staffId") REFERENCES "Staff"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "incident_staff_engagements" ADD CONSTRAINT "incident_staff_engagements_incidentId_fkey" FOREIGN KEY ("incidentId") REFERENCES "incidents"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "incident_staff_engagements" ADD CONSTRAINT "incident_staff_engagements_staffId_fkey" FOREIGN KEY ("staffId") REFERENCES "Staff"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "attendance_events" ADD CONSTRAINT "attendance_events_dutyId_fkey" FOREIGN KEY ("dutyId") REFERENCES "duties"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "attendance_events" ADD CONSTRAINT "attendance_events_staffId_fkey" FOREIGN KEY ("staffId") REFERENCES "Staff"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DispatchedVehicle" ADD CONSTRAINT "DispatchedVehicle_incidentId_fkey" FOREIGN KEY ("incidentId") REFERENCES "IncidentReadModel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StaffInVehicle" ADD CONSTRAINT "StaffInVehicle_dispatchedVehicleId_fkey" FOREIGN KEY ("dispatchedVehicleId") REFERENCES "DispatchedVehicle"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
