-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('ADMINISTRATOR', 'APPROVER', 'GENERAL');

-- CreateEnum
CREATE TYPE "ShiftType" AS ENUM ('DUTY_24H', 'DAY_SHIFT');

-- CreateEnum
CREATE TYPE "WorkType" AS ENUM ('DUTY_24H', 'DAY_SHIFT', 'OFF_DUTY', 'DAY_OFF');

-- CreateEnum
CREATE TYPE "TeamWorkOverrideReason" AS ENUM ('DISASTER', 'SPECIAL_EVENT', 'STAFF_SHORTAGE', 'MANUAL');

-- CreateEnum
CREATE TYPE "ScheduleStatus" AS ENUM ('UNAPPROVED', 'APPROVED', 'PENDING');

-- CreateEnum
CREATE TYPE "LocationType" AS ENUM ('PREFECTURE', 'MUNICIPALITY', 'TOWN', 'OAZA', 'AZA', 'CHOME');

-- CreateEnum
CREATE TYPE "AttendanceType" AS ENUM ('WORK_START', 'BREAK_START', 'BREAK_OUT', 'WORK_OUT');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "loginId" TEXT NOT NULL,
    "password" TEXT,
    "name" TEXT,
    "email" TEXT,
    "emailVerified" TIMESTAMP(3),
    "image" TEXT,
    "role" "UserRole" NOT NULL DEFAULT 'GENERAL',
    "staffId" INTEGER,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Account" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "providerAccountId" TEXT NOT NULL,
    "refresh_token" TEXT,
    "access_token" TEXT,
    "expires_at" INTEGER,
    "token_type" TEXT,
    "scope" TEXT,
    "id_token" TEXT,
    "session_state" TEXT,

    CONSTRAINT "Account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Session" (
    "id" TEXT NOT NULL,
    "sessionToken" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Session_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VerificationToken" (
    "identifier" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL
);

-- CreateTable
CREATE TABLE "WorkShift" (
    "id" SERIAL NOT NULL,
    "code" VARCHAR(20) NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "shiftType" "ShiftType" NOT NULL DEFAULT 'DUTY_24H',
    "isActive" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "WorkShift_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "work_shift_days" (
    "id" TEXT NOT NULL,
    "date" DATE NOT NULL,
    "type" "WorkType" NOT NULL DEFAULT 'DUTY_24H',
    "workShiftId" INTEGER NOT NULL,

    CONSTRAINT "work_shift_days_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Department" (
    "id" SERIAL NOT NULL,
    "code" VARCHAR(20) NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "latitude" DECIMAL(9,6),
    "longitude" DECIMAL(9,6),
    "isActive" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "Department_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Team" (
    "id" SERIAL NOT NULL,
    "departmentId" INTEGER NOT NULL,
    "workShiftId" INTEGER NOT NULL,
    "code" VARCHAR(20) NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "shiftType" "ShiftType" NOT NULL DEFAULT 'DUTY_24H',
    "isActive" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "Team_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "team_work_days" (
    "id" TEXT NOT NULL,
    "date" DATE NOT NULL,
    "type" "WorkType" NOT NULL DEFAULT 'DUTY_24H',
    "teamId" INTEGER NOT NULL,

    CONSTRAINT "team_work_days_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "team_work_overrides" (
    "id" TEXT NOT NULL,
    "teamWorkDayId" TEXT NOT NULL,
    "overriddenType" "WorkType" NOT NULL,
    "reason" "TeamWorkOverrideReason" NOT NULL,
    "memo" TEXT NOT NULL DEFAULT '',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "team_work_overrides_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Staff" (
    "id" SERIAL NOT NULL,
    "staffNo" VARCHAR(20) NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "photoKey" VARCHAR(255),
    "teamId" INTEGER NOT NULL,

    CONSTRAINT "Staff_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "duties" (
    "id" TEXT NOT NULL,
    "date" DATE NOT NULL,
    "teamId" INTEGER NOT NULL,
    "status" "ScheduleStatus" NOT NULL DEFAULT 'UNAPPROVED',
    "memo" TEXT NOT NULL DEFAULT '',
    "isLocked" BOOLEAN NOT NULL DEFAULT false,
    "lockedAt" TIMESTAMP(3),
    "lockedByUserId" TEXT,
    "hasEverCancelled" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "duties_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "work_group_assignments" (
    "id" TEXT NOT NULL,
    "dutyId" TEXT NOT NULL,
    "staffId" INTEGER NOT NULL,
    "workGroupId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "work_group_assignments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "special_leaves" (
    "id" TEXT NOT NULL,
    "dutyId" TEXT NOT NULL,
    "staffId" INTEGER NOT NULL,
    "specialLeaveTypeId" TEXT NOT NULL,
    "baseDate" DATE NOT NULL,
    "startTime" TIMESTAMP(3) NOT NULL,
    "endTime" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "special_leaves_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WorkGroup" (
    "id" SERIAL NOT NULL,
    "code" VARCHAR(10) NOT NULL,
    "name" VARCHAR(50) NOT NULL,

    CONSTRAINT "WorkGroup_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OvertimeRateCategory" (
    "id" SERIAL NOT NULL,
    "code" VARCHAR(20) NOT NULL,
    "name" TEXT NOT NULL,
    "rate" DOUBLE PRECISION NOT NULL,
    "color" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "OvertimeRateCategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OvertimeSlot" (
    "id" SERIAL NOT NULL,
    "workGroupId" INTEGER NOT NULL,
    "startMinute" INTEGER NOT NULL,
    "endMinute" INTEGER NOT NULL,
    "overtimeRateCategoryId" INTEGER,

    CONSTRAINT "OvertimeSlot_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "special_leave_group" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "sortOrder" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "special_leave_group_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "special_leave_type" (
    "id" TEXT NOT NULL,
    "code" VARCHAR(50) NOT NULL,
    "name" TEXT NOT NULL,
    "specialLeaveGroupId" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL,

    CONSTRAINT "special_leave_type_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "incidents" (
    "id" TEXT NOT NULL,
    "dutyId" TEXT NOT NULL,
    "categoryId" INTEGER NOT NULL,
    "typeId" INTEGER NOT NULL,
    "locationId" INTEGER NOT NULL,
    "destinationId" INTEGER,
    "destinationName" TEXT,
    "isDeleted" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "incidents_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "incident_categories" (
    "id" SERIAL NOT NULL,
    "code" VARCHAR(20) NOT NULL,
    "name" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "sortOrder" INTEGER NOT NULL DEFAULT 0,
    "isActive" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "incident_categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "incident_types" (
    "id" SERIAL NOT NULL,
    "categoryId" INTEGER NOT NULL,
    "code" VARCHAR(20) NOT NULL,
    "name" TEXT NOT NULL,
    "sortOrder" INTEGER NOT NULL DEFAULT 0,
    "isActive" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "incident_types_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "vehicles" (
    "id" SERIAL NOT NULL,
    "code" VARCHAR(20) NOT NULL,
    "name" TEXT NOT NULL,
    "departmentId" INTEGER,
    "isActive" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "vehicles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "incident_vehicles" (
    "id" TEXT NOT NULL,
    "incidentId" TEXT NOT NULL,
    "vehicleId" INTEGER NOT NULL,
    "dispatchTime" TIMESTAMP(3) NOT NULL,
    "returnTime" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "incident_vehicles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "incident_staffs" (
    "id" TEXT NOT NULL,
    "incidentVehicleId" TEXT NOT NULL,
    "staffId" INTEGER NOT NULL,

    CONSTRAINT "incident_staffs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "allowance_groups" (
    "id" SERIAL NOT NULL,
    "code" VARCHAR(20) NOT NULL,
    "name" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "allowance_groups_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "allowance_types" (
    "id" SERIAL NOT NULL,
    "allowanceGroupId" INTEGER NOT NULL,
    "code" VARCHAR(20) NOT NULL,
    "name" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "allowance_types_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "incident_staff_allowances" (
    "id" TEXT NOT NULL,
    "incidentStaffId" TEXT NOT NULL,
    "allowanceTypeId" INTEGER NOT NULL,

    CONSTRAINT "incident_staff_allowances_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "locations" (
    "id" SERIAL NOT NULL,
    "parentId" INTEGER,
    "type" "LocationType" NOT NULL,
    "code" TEXT,
    "name" TEXT NOT NULL,
    "latitude" DECIMAL(9,6),
    "longitude" DECIMAL(9,6),

    CONSTRAINT "locations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Hospital" (
    "id" SERIAL NOT NULL,
    "code" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "latitude" DECIMAL(9,6),
    "longitude" DECIMAL(9,6),

    CONSTRAINT "Hospital_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Attendance" (
    "id" TEXT NOT NULL,
    "dutyId" TEXT NOT NULL,
    "departmentId" INTEGER NOT NULL,
    "staffId" INTEGER NOT NULL,
    "type" "AttendanceType" NOT NULL,
    "startTime" TIMESTAMP(3) NOT NULL,
    "endTime" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Attendance_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OvertimeSummary" (
    "id" TEXT NOT NULL,
    "dutyId" TEXT NOT NULL,
    "staffId" INTEGER NOT NULL,
    "version" INTEGER NOT NULL DEFAULT 1,
    "totalMinutes" INTEGER NOT NULL,
    "isFinalized" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "OvertimeSummary_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OvertimeSummaryDetail" (
    "id" TEXT NOT NULL,
    "overtimeSummaryId" TEXT NOT NULL,
    "overtimeRateCategoryId" INTEGER NOT NULL,
    "rateSnapshot" DOUBLE PRECISION NOT NULL,
    "minutes" INTEGER NOT NULL,

    CONSTRAINT "OvertimeSummaryDetail_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "IncidentAllowanceSummary" (
    "id" TEXT NOT NULL,
    "incidentStaffId" TEXT NOT NULL,
    "allowanceTypeId" INTEGER NOT NULL,
    "version" INTEGER NOT NULL DEFAULT 1,
    "count" INTEGER NOT NULL DEFAULT 1,
    "isFinalized" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "IncidentAllowanceSummary_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_loginId_key" ON "User"("loginId");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_staffId_key" ON "User"("staffId");

-- CreateIndex
CREATE UNIQUE INDEX "Account_provider_providerAccountId_key" ON "Account"("provider", "providerAccountId");

-- CreateIndex
CREATE UNIQUE INDEX "Session_sessionToken_key" ON "Session"("sessionToken");

-- CreateIndex
CREATE UNIQUE INDEX "VerificationToken_token_key" ON "VerificationToken"("token");

-- CreateIndex
CREATE UNIQUE INDEX "VerificationToken_identifier_token_key" ON "VerificationToken"("identifier", "token");

-- CreateIndex
CREATE UNIQUE INDEX "WorkShift_code_key" ON "WorkShift"("code");

-- CreateIndex
CREATE UNIQUE INDEX "work_shift_days_date_workShiftId_key" ON "work_shift_days"("date", "workShiftId");

-- CreateIndex
CREATE UNIQUE INDEX "Department_code_key" ON "Department"("code");

-- CreateIndex
CREATE UNIQUE INDEX "Team_code_key" ON "Team"("code");

-- CreateIndex
CREATE UNIQUE INDEX "team_work_days_date_teamId_key" ON "team_work_days"("date", "teamId");

-- CreateIndex
CREATE INDEX "team_work_overrides_teamWorkDayId_idx" ON "team_work_overrides"("teamWorkDayId");

-- CreateIndex
CREATE UNIQUE INDEX "team_work_overrides_teamWorkDayId_key" ON "team_work_overrides"("teamWorkDayId");

-- CreateIndex
CREATE UNIQUE INDEX "Staff_staffNo_key" ON "Staff"("staffNo");

-- CreateIndex
CREATE UNIQUE INDEX "duties_date_teamId_key" ON "duties"("date", "teamId");

-- CreateIndex
CREATE UNIQUE INDEX "work_group_assignments_dutyId_staffId_key" ON "work_group_assignments"("dutyId", "staffId");

-- CreateIndex
CREATE INDEX "special_leaves_dutyId_idx" ON "special_leaves"("dutyId");

-- CreateIndex
CREATE INDEX "special_leaves_staffId_idx" ON "special_leaves"("staffId");

-- CreateIndex
CREATE UNIQUE INDEX "WorkGroup_code_key" ON "WorkGroup"("code");

-- CreateIndex
CREATE UNIQUE INDEX "OvertimeRateCategory_code_key" ON "OvertimeRateCategory"("code");

-- CreateIndex
CREATE INDEX "OvertimeSlot_workGroupId_idx" ON "OvertimeSlot"("workGroupId");

-- CreateIndex
CREATE INDEX "OvertimeSlot_overtimeRateCategoryId_idx" ON "OvertimeSlot"("overtimeRateCategoryId");

-- CreateIndex
CREATE UNIQUE INDEX "OvertimeSlot_workGroupId_startMinute_endMinute_key" ON "OvertimeSlot"("workGroupId", "startMinute", "endMinute");

-- CreateIndex
CREATE UNIQUE INDEX "special_leave_type_code_key" ON "special_leave_type"("code");

-- CreateIndex
CREATE INDEX "incidents_dutyId_idx" ON "incidents"("dutyId");

-- CreateIndex
CREATE INDEX "incidents_createdAt_idx" ON "incidents"("createdAt");

-- CreateIndex
CREATE INDEX "incidents_isDeleted_createdAt_idx" ON "incidents"("isDeleted", "createdAt");

-- CreateIndex
CREATE INDEX "incidents_locationId_idx" ON "incidents"("locationId");

-- CreateIndex
CREATE UNIQUE INDEX "incident_categories_code_key" ON "incident_categories"("code");

-- CreateIndex
CREATE INDEX "incident_types_categoryId_idx" ON "incident_types"("categoryId");

-- CreateIndex
CREATE UNIQUE INDEX "incident_types_categoryId_code_key" ON "incident_types"("categoryId", "code");

-- CreateIndex
CREATE UNIQUE INDEX "vehicles_code_key" ON "vehicles"("code");

-- CreateIndex
CREATE INDEX "incident_vehicles_incidentId_idx" ON "incident_vehicles"("incidentId");

-- CreateIndex
CREATE UNIQUE INDEX "incident_vehicles_incidentId_vehicleId_key" ON "incident_vehicles"("incidentId", "vehicleId");

-- CreateIndex
CREATE UNIQUE INDEX "incident_staffs_incidentVehicleId_staffId_key" ON "incident_staffs"("incidentVehicleId", "staffId");

-- CreateIndex
CREATE UNIQUE INDEX "allowance_groups_code_key" ON "allowance_groups"("code");

-- CreateIndex
CREATE UNIQUE INDEX "allowance_types_code_key" ON "allowance_types"("code");

-- CreateIndex
CREATE UNIQUE INDEX "incident_staff_allowances_incidentStaffId_allowanceTypeId_key" ON "incident_staff_allowances"("incidentStaffId", "allowanceTypeId");

-- CreateIndex
CREATE INDEX "locations_parentId_idx" ON "locations"("parentId");

-- CreateIndex
CREATE INDEX "locations_type_idx" ON "locations"("type");

-- CreateIndex
CREATE UNIQUE INDEX "locations_parentId_name_key" ON "locations"("parentId", "name");

-- CreateIndex
CREATE UNIQUE INDEX "Hospital_code_key" ON "Hospital"("code");

-- CreateIndex
CREATE UNIQUE INDEX "Hospital_name_key" ON "Hospital"("name");

-- CreateIndex
CREATE INDEX "Hospital_latitude_longitude_idx" ON "Hospital"("latitude", "longitude");

-- CreateIndex
CREATE INDEX "OvertimeSummary_dutyId_version_idx" ON "OvertimeSummary"("dutyId", "version");

-- CreateIndex
CREATE UNIQUE INDEX "OvertimeSummary_dutyId_staffId_version_key" ON "OvertimeSummary"("dutyId", "staffId", "version");

-- CreateIndex
CREATE UNIQUE INDEX "OvertimeSummaryDetail_overtimeSummaryId_overtimeRateCategor_key" ON "OvertimeSummaryDetail"("overtimeSummaryId", "overtimeRateCategoryId");

-- CreateIndex
CREATE UNIQUE INDEX "IncidentAllowanceSummary_incidentStaffId_allowanceTypeId_ve_key" ON "IncidentAllowanceSummary"("incidentStaffId", "allowanceTypeId", "version");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_staffId_fkey" FOREIGN KEY ("staffId") REFERENCES "Staff"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Account" ADD CONSTRAINT "Account_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Session" ADD CONSTRAINT "Session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "work_shift_days" ADD CONSTRAINT "work_shift_days_workShiftId_fkey" FOREIGN KEY ("workShiftId") REFERENCES "WorkShift"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Team" ADD CONSTRAINT "Team_departmentId_fkey" FOREIGN KEY ("departmentId") REFERENCES "Department"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Team" ADD CONSTRAINT "Team_workShiftId_fkey" FOREIGN KEY ("workShiftId") REFERENCES "WorkShift"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "team_work_days" ADD CONSTRAINT "team_work_days_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "Team"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "team_work_overrides" ADD CONSTRAINT "team_work_overrides_teamWorkDayId_fkey" FOREIGN KEY ("teamWorkDayId") REFERENCES "team_work_days"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Staff" ADD CONSTRAINT "Staff_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "Team"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "duties" ADD CONSTRAINT "duties_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "Team"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "work_group_assignments" ADD CONSTRAINT "work_group_assignments_dutyId_fkey" FOREIGN KEY ("dutyId") REFERENCES "duties"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "work_group_assignments" ADD CONSTRAINT "work_group_assignments_workGroupId_fkey" FOREIGN KEY ("workGroupId") REFERENCES "WorkGroup"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "work_group_assignments" ADD CONSTRAINT "work_group_assignments_staffId_fkey" FOREIGN KEY ("staffId") REFERENCES "Staff"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "special_leaves" ADD CONSTRAINT "special_leaves_dutyId_fkey" FOREIGN KEY ("dutyId") REFERENCES "duties"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "special_leaves" ADD CONSTRAINT "special_leaves_staffId_fkey" FOREIGN KEY ("staffId") REFERENCES "Staff"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "special_leaves" ADD CONSTRAINT "special_leaves_specialLeaveTypeId_fkey" FOREIGN KEY ("specialLeaveTypeId") REFERENCES "special_leave_type"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OvertimeSlot" ADD CONSTRAINT "OvertimeSlot_overtimeRateCategoryId_fkey" FOREIGN KEY ("overtimeRateCategoryId") REFERENCES "OvertimeRateCategory"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OvertimeSlot" ADD CONSTRAINT "OvertimeSlot_workGroupId_fkey" FOREIGN KEY ("workGroupId") REFERENCES "WorkGroup"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "special_leave_type" ADD CONSTRAINT "special_leave_type_specialLeaveGroupId_fkey" FOREIGN KEY ("specialLeaveGroupId") REFERENCES "special_leave_group"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "incidents" ADD CONSTRAINT "incidents_dutyId_fkey" FOREIGN KEY ("dutyId") REFERENCES "duties"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "incidents" ADD CONSTRAINT "incidents_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "incident_categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "incidents" ADD CONSTRAINT "incidents_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "incident_types"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "incidents" ADD CONSTRAINT "incidents_locationId_fkey" FOREIGN KEY ("locationId") REFERENCES "locations"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "incidents" ADD CONSTRAINT "incidents_destinationId_fkey" FOREIGN KEY ("destinationId") REFERENCES "Hospital"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "incident_types" ADD CONSTRAINT "incident_types_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "incident_categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "vehicles" ADD CONSTRAINT "vehicles_departmentId_fkey" FOREIGN KEY ("departmentId") REFERENCES "Department"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "incident_vehicles" ADD CONSTRAINT "incident_vehicles_incidentId_fkey" FOREIGN KEY ("incidentId") REFERENCES "incidents"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "incident_vehicles" ADD CONSTRAINT "incident_vehicles_vehicleId_fkey" FOREIGN KEY ("vehicleId") REFERENCES "vehicles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "incident_staffs" ADD CONSTRAINT "incident_staffs_incidentVehicleId_fkey" FOREIGN KEY ("incidentVehicleId") REFERENCES "incident_vehicles"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "incident_staffs" ADD CONSTRAINT "incident_staffs_staffId_fkey" FOREIGN KEY ("staffId") REFERENCES "Staff"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "allowance_types" ADD CONSTRAINT "allowance_types_allowanceGroupId_fkey" FOREIGN KEY ("allowanceGroupId") REFERENCES "allowance_groups"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "incident_staff_allowances" ADD CONSTRAINT "incident_staff_allowances_incidentStaffId_fkey" FOREIGN KEY ("incidentStaffId") REFERENCES "incident_staffs"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "incident_staff_allowances" ADD CONSTRAINT "incident_staff_allowances_allowanceTypeId_fkey" FOREIGN KEY ("allowanceTypeId") REFERENCES "allowance_types"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "locations" ADD CONSTRAINT "locations_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "locations"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Attendance" ADD CONSTRAINT "Attendance_dutyId_fkey" FOREIGN KEY ("dutyId") REFERENCES "duties"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Attendance" ADD CONSTRAINT "Attendance_departmentId_fkey" FOREIGN KEY ("departmentId") REFERENCES "Department"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Attendance" ADD CONSTRAINT "Attendance_staffId_fkey" FOREIGN KEY ("staffId") REFERENCES "Staff"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OvertimeSummary" ADD CONSTRAINT "OvertimeSummary_dutyId_fkey" FOREIGN KEY ("dutyId") REFERENCES "duties"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OvertimeSummary" ADD CONSTRAINT "OvertimeSummary_staffId_fkey" FOREIGN KEY ("staffId") REFERENCES "Staff"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OvertimeSummaryDetail" ADD CONSTRAINT "OvertimeSummaryDetail_overtimeSummaryId_fkey" FOREIGN KEY ("overtimeSummaryId") REFERENCES "OvertimeSummary"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OvertimeSummaryDetail" ADD CONSTRAINT "OvertimeSummaryDetail_overtimeRateCategoryId_fkey" FOREIGN KEY ("overtimeRateCategoryId") REFERENCES "OvertimeRateCategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "IncidentAllowanceSummary" ADD CONSTRAINT "IncidentAllowanceSummary_incidentStaffId_fkey" FOREIGN KEY ("incidentStaffId") REFERENCES "incident_staffs"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "IncidentAllowanceSummary" ADD CONSTRAINT "IncidentAllowanceSummary_allowanceTypeId_fkey" FOREIGN KEY ("allowanceTypeId") REFERENCES "allowance_types"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
