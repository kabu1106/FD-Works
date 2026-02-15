import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StaffIncludeSchema } from '../inputTypeSchemas/StaffIncludeSchema'
import { StaffWhereInputSchema } from '../inputTypeSchemas/StaffWhereInputSchema'
import { StaffOrderByWithRelationInputSchema } from '../inputTypeSchemas/StaffOrderByWithRelationInputSchema'
import { StaffWhereUniqueInputSchema } from '../inputTypeSchemas/StaffWhereUniqueInputSchema'
import { StaffScalarFieldEnumSchema } from '../inputTypeSchemas/StaffScalarFieldEnumSchema'
import { TeamArgsSchema } from "../outputTypeSchemas/TeamArgsSchema"
import { WorkGroupAssignmentFindManyArgsSchema } from "../outputTypeSchemas/WorkGroupAssignmentFindManyArgsSchema"
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema"
import { SpecialLeaveAssignmentFindManyArgsSchema } from "../outputTypeSchemas/SpecialLeaveAssignmentFindManyArgsSchema"
import { IncidentStaffFindManyArgsSchema } from "../outputTypeSchemas/IncidentStaffFindManyArgsSchema"
import { AttendanceFindManyArgsSchema } from "../outputTypeSchemas/AttendanceFindManyArgsSchema"
import { OvertimeSummaryFindManyArgsSchema } from "../outputTypeSchemas/OvertimeSummaryFindManyArgsSchema"
import { AttendanceEventFindManyArgsSchema } from "../outputTypeSchemas/AttendanceEventFindManyArgsSchema"
import { IncidentStaffEngagementFindManyArgsSchema } from "../outputTypeSchemas/IncidentStaffEngagementFindManyArgsSchema"
import { SubstituteHolidayFindManyArgsSchema } from "../outputTypeSchemas/SubstituteHolidayFindManyArgsSchema"
import { WeeklyDayOffFindManyArgsSchema } from "../outputTypeSchemas/WeeklyDayOffFindManyArgsSchema"
import { DutyDayTypeFindManyArgsSchema } from "../outputTypeSchemas/DutyDayTypeFindManyArgsSchema"
import { StaffCountOutputTypeArgsSchema } from "../outputTypeSchemas/StaffCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const StaffSelectSchema: z.ZodType<Prisma.StaffSelect> = z.object({
  id: z.boolean().optional(),
  staffNo: z.boolean().optional(),
  name: z.boolean().optional(),
  isActive: z.boolean().optional(),
  photoKey: z.boolean().optional(),
  teamId: z.boolean().optional(),
  team: z.union([z.boolean(),z.lazy(() => TeamArgsSchema)]).optional(),
  workGroupAssignment: z.union([z.boolean(),z.lazy(() => WorkGroupAssignmentFindManyArgsSchema)]).optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  specialLeaveAssignments: z.union([z.boolean(),z.lazy(() => SpecialLeaveAssignmentFindManyArgsSchema)]).optional(),
  IncidentStaff: z.union([z.boolean(),z.lazy(() => IncidentStaffFindManyArgsSchema)]).optional(),
  Attendance: z.union([z.boolean(),z.lazy(() => AttendanceFindManyArgsSchema)]).optional(),
  OvertimeSummary: z.union([z.boolean(),z.lazy(() => OvertimeSummaryFindManyArgsSchema)]).optional(),
  attendanceEvents: z.union([z.boolean(),z.lazy(() => AttendanceEventFindManyArgsSchema)]).optional(),
  incidentStaffEngagements: z.union([z.boolean(),z.lazy(() => IncidentStaffEngagementFindManyArgsSchema)]).optional(),
  substituteHolidays: z.union([z.boolean(),z.lazy(() => SubstituteHolidayFindManyArgsSchema)]).optional(),
  weeklyDayOffs: z.union([z.boolean(),z.lazy(() => WeeklyDayOffFindManyArgsSchema)]).optional(),
  dutyDayTypes: z.union([z.boolean(),z.lazy(() => DutyDayTypeFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => StaffCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const StaffFindManyArgsSchema: z.ZodType<Prisma.StaffFindManyArgs> = z.object({
  select: StaffSelectSchema.optional(),
  include: z.lazy(() => StaffIncludeSchema).optional(),
  where: StaffWhereInputSchema.optional(), 
  orderBy: z.union([ StaffOrderByWithRelationInputSchema.array(), StaffOrderByWithRelationInputSchema ]).optional(),
  cursor: StaffWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ StaffScalarFieldEnumSchema, StaffScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export default StaffFindManyArgsSchema;
