-- CreateTable
CREATE TABLE "employees" (
    "id" TEXT NOT NULL,
    "employeeNumber" VARCHAR(50) NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "department" VARCHAR(100) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "employees_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "schedule_days" (
    "id" TEXT NOT NULL,
    "date" DATE NOT NULL,
    "status" VARCHAR(20) NOT NULL DEFAULT '未承認',
    "hasEverCancelled" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "schedule_days_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sleep_group_assignments" (
    "id" TEXT NOT NULL,
    "scheduleDayId" TEXT NOT NULL,
    "employeeId" TEXT NOT NULL,
    "sleepGroup" VARCHAR(20) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "sleep_group_assignments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "special_leaves" (
    "id" TEXT NOT NULL,
    "scheduleDayId" TEXT NOT NULL,
    "employeeId" TEXT NOT NULL,
    "type" VARCHAR(20) NOT NULL,
    "baseDate" DATE NOT NULL,
    "startDate" DATE NOT NULL,
    "startTime" VARCHAR(10) NOT NULL,
    "startMinutes" INTEGER NOT NULL,
    "endDate" DATE NOT NULL,
    "endTime" VARCHAR(10) NOT NULL,
    "endMinutes" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "special_leaves_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "employees_employeeNumber_key" ON "employees"("employeeNumber");

-- CreateIndex
CREATE INDEX "schedule_days_date_idx" ON "schedule_days"("date");

-- CreateIndex
CREATE UNIQUE INDEX "schedule_days_date_key" ON "schedule_days"("date");

-- CreateIndex
CREATE INDEX "sleep_group_assignments_scheduleDayId_idx" ON "sleep_group_assignments"("scheduleDayId");

-- CreateIndex
CREATE INDEX "sleep_group_assignments_employeeId_idx" ON "sleep_group_assignments"("employeeId");

-- CreateIndex
CREATE UNIQUE INDEX "sleep_group_assignments_scheduleDayId_employeeId_sleepGroup_key" ON "sleep_group_assignments"("scheduleDayId", "employeeId", "sleepGroup");

-- CreateIndex
CREATE INDEX "special_leaves_scheduleDayId_idx" ON "special_leaves"("scheduleDayId");

-- CreateIndex
CREATE INDEX "special_leaves_employeeId_idx" ON "special_leaves"("employeeId");

-- CreateIndex
CREATE INDEX "special_leaves_baseDate_idx" ON "special_leaves"("baseDate");

-- AddForeignKey
ALTER TABLE "sleep_group_assignments" ADD CONSTRAINT "sleep_group_assignments_scheduleDayId_fkey" FOREIGN KEY ("scheduleDayId") REFERENCES "schedule_days"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sleep_group_assignments" ADD CONSTRAINT "sleep_group_assignments_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "employees"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "special_leaves" ADD CONSTRAINT "special_leaves_scheduleDayId_fkey" FOREIGN KEY ("scheduleDayId") REFERENCES "schedule_days"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "special_leaves" ADD CONSTRAINT "special_leaves_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "employees"("id") ON DELETE CASCADE ON UPDATE CASCADE;
