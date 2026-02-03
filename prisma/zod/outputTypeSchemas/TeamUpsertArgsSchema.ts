import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TeamIncludeSchema } from '../inputTypeSchemas/TeamIncludeSchema'
import { TeamWhereUniqueInputSchema } from '../inputTypeSchemas/TeamWhereUniqueInputSchema'
import { TeamCreateInputSchema } from '../inputTypeSchemas/TeamCreateInputSchema'
import { TeamUncheckedCreateInputSchema } from '../inputTypeSchemas/TeamUncheckedCreateInputSchema'
import { TeamUpdateInputSchema } from '../inputTypeSchemas/TeamUpdateInputSchema'
import { TeamUncheckedUpdateInputSchema } from '../inputTypeSchemas/TeamUncheckedUpdateInputSchema'
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

export const TeamUpsertArgsSchema: z.ZodType<Prisma.TeamUpsertArgs> = z.object({
  select: TeamSelectSchema.optional(),
  include: z.lazy(() => TeamIncludeSchema).optional(),
  where: TeamWhereUniqueInputSchema, 
  create: z.union([ TeamCreateInputSchema, TeamUncheckedCreateInputSchema ]),
  update: z.union([ TeamUpdateInputSchema, TeamUncheckedUpdateInputSchema ]),
}).strict();

export default TeamUpsertArgsSchema;
