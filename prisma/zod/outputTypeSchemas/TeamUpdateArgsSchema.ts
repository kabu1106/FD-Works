import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TeamIncludeSchema } from '../inputTypeSchemas/TeamIncludeSchema'
import { TeamUpdateInputSchema } from '../inputTypeSchemas/TeamUpdateInputSchema'
import { TeamUncheckedUpdateInputSchema } from '../inputTypeSchemas/TeamUncheckedUpdateInputSchema'
import { TeamWhereUniqueInputSchema } from '../inputTypeSchemas/TeamWhereUniqueInputSchema'
import { DepartmentArgsSchema } from "../outputTypeSchemas/DepartmentArgsSchema"
import { StaffFindManyArgsSchema } from "../outputTypeSchemas/StaffFindManyArgsSchema"
import { WorkShiftArgsSchema } from "../outputTypeSchemas/WorkShiftArgsSchema"
import { TeamWorkDayFindManyArgsSchema } from "../outputTypeSchemas/TeamWorkDayFindManyArgsSchema"
import { DutyFindManyArgsSchema } from "../outputTypeSchemas/DutyFindManyArgsSchema"
import { TeamCountOutputTypeArgsSchema } from "../outputTypeSchemas/TeamCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const TeamSelectSchema: z.ZodType<Prisma.TeamSelect> = z.object({
  id: z.boolean().optional(),
  departmentId: z.boolean().optional(),
  workShiftId: z.boolean().optional(),
  code: z.boolean().optional(),
  name: z.boolean().optional(),
  shiftType: z.boolean().optional(),
  isActive: z.boolean().optional(),
  departments: z.union([z.boolean(),z.lazy(() => DepartmentArgsSchema)]).optional(),
  staffs: z.union([z.boolean(),z.lazy(() => StaffFindManyArgsSchema)]).optional(),
  workShift: z.union([z.boolean(),z.lazy(() => WorkShiftArgsSchema)]).optional(),
  teamWorkDay: z.union([z.boolean(),z.lazy(() => TeamWorkDayFindManyArgsSchema)]).optional(),
  duties: z.union([z.boolean(),z.lazy(() => DutyFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => TeamCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const TeamUpdateArgsSchema: z.ZodType<Prisma.TeamUpdateArgs> = z.object({
  select: TeamSelectSchema.optional(),
  include: z.lazy(() => TeamIncludeSchema).optional(),
  data: z.union([ TeamUpdateInputSchema, TeamUncheckedUpdateInputSchema ]),
  where: TeamWhereUniqueInputSchema, 
}).strict();

export default TeamUpdateArgsSchema;
