import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DutyIncludeSchema } from '../inputTypeSchemas/DutyIncludeSchema'
import { DutyCreateInputSchema } from '../inputTypeSchemas/DutyCreateInputSchema'
import { DutyUncheckedCreateInputSchema } from '../inputTypeSchemas/DutyUncheckedCreateInputSchema'
import { TeamArgsSchema } from "../outputTypeSchemas/TeamArgsSchema"
import { WorkGroupAssignmentFindManyArgsSchema } from "../outputTypeSchemas/WorkGroupAssignmentFindManyArgsSchema"
import { SpecialLeaveAssignmentFindManyArgsSchema } from "../outputTypeSchemas/SpecialLeaveAssignmentFindManyArgsSchema"
import { IncidentFindManyArgsSchema } from "../outputTypeSchemas/IncidentFindManyArgsSchema"
import { AttendanceFindManyArgsSchema } from "../outputTypeSchemas/AttendanceFindManyArgsSchema"
import { OvertimeSummaryFindManyArgsSchema } from "../outputTypeSchemas/OvertimeSummaryFindManyArgsSchema"
import { DutyCountOutputTypeArgsSchema } from "../outputTypeSchemas/DutyCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const DutySelectSchema: z.ZodType<Prisma.DutySelect> = z.object({
  id: z.boolean().optional(),
  date: z.boolean().optional(),
  teamId: z.boolean().optional(),
  status: z.boolean().optional(),
  memo: z.boolean().optional(),
  isLocked: z.boolean().optional(),
  lockedAt: z.boolean().optional(),
  lockedByUserId: z.boolean().optional(),
  hasEverCancelled: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  team: z.union([z.boolean(),z.lazy(() => TeamArgsSchema)]).optional(),
  workGroupAssignments: z.union([z.boolean(),z.lazy(() => WorkGroupAssignmentFindManyArgsSchema)]).optional(),
  specialLeaveAssignments: z.union([z.boolean(),z.lazy(() => SpecialLeaveAssignmentFindManyArgsSchema)]).optional(),
  incidents: z.union([z.boolean(),z.lazy(() => IncidentFindManyArgsSchema)]).optional(),
  attendance: z.union([z.boolean(),z.lazy(() => AttendanceFindManyArgsSchema)]).optional(),
  OvertimeSummary: z.union([z.boolean(),z.lazy(() => OvertimeSummaryFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => DutyCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const DutyCreateArgsSchema: z.ZodType<Prisma.DutyCreateArgs> = z.object({
  select: DutySelectSchema.optional(),
  include: z.lazy(() => DutyIncludeSchema).optional(),
  data: z.union([ DutyCreateInputSchema, DutyUncheckedCreateInputSchema ]),
}).strict();

export default DutyCreateArgsSchema;
